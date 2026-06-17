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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VillasController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const villas_service_1 = require("./villas.service");
let VillasController = class VillasController {
    villasService;
    constructor(villasService) {
        this.villasService = villasService;
    }
    findAll() {
        return this.villasService.findAll();
    }
    getDefaultFilters() {
        return this.villasService.getDefaultFilters();
    }
    findOne(slug) {
        return this.villasService.findOne(slug);
    }
    async create(villa) {
        const savedVilla = await this.villasService.create(villa);
        return { success: true, villa: savedVilla };
    }
    async update(id, villa) {
        const savedVilla = await this.villasService.update(id, villa);
        return { success: true, villa: savedVilla };
    }
    async remove(id) {
        await this.villasService.delete(id);
        return { success: true };
    }
};
exports.VillasController = VillasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VillasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('filters/default'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VillasController.prototype, "getDefaultFilters", null);
__decorate([
    (0, common_1.Get)(':slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VillasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VillasController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VillasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VillasController.prototype, "remove", null);
exports.VillasController = VillasController = __decorate([
    (0, swagger_1.ApiTags)('Villas'),
    (0, common_1.Controller)('api/villas'),
    __metadata("design:paramtypes", [villas_service_1.VillasService])
], VillasController);
//# sourceMappingURL=villas.controller.js.map