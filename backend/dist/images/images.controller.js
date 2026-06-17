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
exports.ImagesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const images_service_1 = require("./images.service");
let ImagesController = class ImagesController {
    imagesService;
    constructor(imagesService) {
        this.imagesService = imagesService;
    }
    async uploadImage(file, isMain) {
        return this.imagesService.uploadImage(file, isMain === 'true');
    }
    async deleteImage(id) {
        return this.imagesService.deleteImage(id);
    }
    async getImages(villaId) {
        return this.imagesService.getImagesForVilla(villaId);
    }
    async serveImage(id, res) {
        const { buffer, contentType } = await this.imagesService.serveImage(id);
        res.setHeader('Content-Type', contentType);
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        res.send(buffer);
    }
};
exports.ImagesController = ImagesController;
__decorate([
    (0, common_1.Post)('villa-images'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload một ảnh villa, trả về ID' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            required: ['file'],
            properties: {
                file: { type: 'string', format: 'binary', description: 'File ảnh' },
                isMain: { type: 'string', enum: ['true', 'false'], description: 'Có phải ảnh chính không' },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)('isMain')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Delete)('villa-images/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Xóa ảnh theo ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "deleteImage", null);
__decorate([
    (0, common_1.Get)('villa-images'),
    (0, swagger_1.ApiOperation)({ summary: 'Lấy danh sách ảnh của villa theo villaId' }),
    (0, swagger_1.ApiQuery)({ name: 'villaId', required: true }),
    __param(0, (0, common_1.Query)('villaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "getImages", null);
__decorate([
    (0, common_1.Get)('villa-image/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Serve ảnh binary theo ID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "serveImage", null);
exports.ImagesController = ImagesController = __decorate([
    (0, swagger_1.ApiTags)('Images'),
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [images_service_1.ImagesService])
], ImagesController);
//# sourceMappingURL=images.controller.js.map