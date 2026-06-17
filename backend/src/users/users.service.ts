import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../../prisma/generated/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(identifier: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        OR: [
          { username: identifier },
          { email: identifier },
        ],
      },
    });
  }

  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async updateProfile(id: string, data: { fullName?: string; phone?: string }): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }
}
