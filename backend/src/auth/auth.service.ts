import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService
  ) {}

  async signIn(username: string, pass: string): Promise<{ token: string, user: any }> {
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    const payload = { userId: user.id, username: user.username, email: user.email, role: user.role, tenantId: user.tenantId };
    return {
      token: await this.jwtService.signAsync(payload),
      user: { id: user.id, username: user.username, email: user.email, role: user.role, tenantId: user.tenantId }
    };
  }

  async registerStartup(data: any): Promise<{ success: boolean; token?: string; user?: any }> {
    const existingUser = await this.prisma.user.findUnique({ where: { email: data.email } });
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Create Tenant and User in a transaction
    const result = await this.prisma.$transaction(async (prisma) => {
      const tenant = await prisma.tenant.create({
        data: {
          name: data.startupName,
          businessType: data.businessType,
          status: 'active',
        },
      });

      const user = await prisma.user.create({
        data: {
          username: data.email, // Default username to email for newly registered users
          email: data.email,
          password: hashedPassword,
          fullName: data.fullName,
          phone: data.phone,
          role: 'owner',
          tenantId: tenant.id,
        },
      });

      return user;
    });

    const payload = { userId: result.id, email: result.email, role: result.role, tenantId: result.tenantId };
    const token = await this.jwtService.signAsync(payload);

    return { success: true, token, user: { id: result.id, email: result.email } };
  }
  async register(data: any): Promise<{ success: boolean; token?: string; user?: any }> {
    const existingUser = await this.prisma.user.findUnique({ where: { email: data.email } });
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Find default tenant or create one
    let tenant = await this.prisma.tenant.findFirst();
    if (!tenant) {
      tenant = await this.prisma.tenant.create({
        data: {
          name: 'Default Tenant',
          status: 'active',
        },
      });
    }

    const user = await this.prisma.user.create({
      data: {
        username: data.email, // Default username to email
        email: data.email,
        password: hashedPassword,
        fullName: data.fullName,
        phone: data.phone,
        role: 'admin', // As requested for default admin creation
        tenantId: tenant.id,
      },
    });

    const payload = { userId: user.id, email: user.email, role: user.role, tenantId: user.tenantId };
    const token = await this.jwtService.signAsync(payload);

    return { success: true, token, user: { id: user.id, email: user.email } };
  }
}
