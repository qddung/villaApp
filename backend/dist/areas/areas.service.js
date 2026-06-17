"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AreasService = class AreasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.area.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                _count: {
                    select: { villas: true }
                }
            }
        });
    }
    async create(createAreaDto) {
        const existing = await this.prisma.area.findUnique({
            where: { slug: createAreaDto.slug }
        });
        if (existing) {
            throw new common_1.ConflictException('Area with this slug already exists');
        }
        return this.prisma.area.create({
            data: createAreaDto
        });
    }
    async update(id, updateAreaDto) {
        const existing = await this.prisma.area.findUnique({ where: { id } });
        if (!existing) {
            throw new common_1.NotFoundException('Area not found');
        }
        if (updateAreaDto.slug && updateAreaDto.slug !== existing.slug) {
            const slugExists = await this.prisma.area.findUnique({
                where: { slug: updateAreaDto.slug }
            });
            if (slugExists) {
                throw new common_1.ConflictException('Area with this slug already exists');
            }
        }
        return this.prisma.area.update({
            where: { id },
            data: updateAreaDto
        });
    }
    async getFamousAreas() {
        const areas = await this.prisma.area.findMany({
            where: {
                isFamous: true,
            },
            select: {
                id: true,
                slug: true,
                name: true,
                description: true,
                imageUrl: true,
                _count: {
                    select: { villas: true }
                }
            },
            orderBy: {
                createdAt: 'asc',
            },
        });
        return areas.map(area => ({
            id: area.id,
            slug: area.slug,
            name: area.name,
            description: area.description || '',
            image: area.imageUrl || '',
            villaCount: area._count.villas,
        }));
    }
};
exports.AreasService = AreasService;
exports.AreasService = AreasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AreasService);
//# sourceMappingURL=areas.service.js.map