"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const villas_module_1 = require("./villas/villas.module");
const images_module_1 = require("./images/images.module");
const prisma_module_1 = require("./prisma/prisma.module");
const bookings_module_1 = require("./bookings/bookings.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const settings_module_1 = require("./settings/settings.module");
const dashboard_module_1 = require("./dashboard/dashboard.module");
const areas_module_1 = require("./areas/areas.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', '..', 'frontend', 'dist', 'assets'),
                serveRoot: '/assets',
            }),
            prisma_module_1.PrismaModule, villas_module_1.VillasModule, images_module_1.ImagesModule, bookings_module_1.BookingsModule, auth_module_1.AuthModule, users_module_1.UsersModule, settings_module_1.SettingsModule, dashboard_module_1.DashboardModule, areas_module_1.AreasModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map