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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const logger_middleware_1 = require("./common/middlewares/logger/logger.middleware");
const typeorm_1 = require("typeorm");
const posts_module_1 = require("./posts/posts.module");
const typeorm_2 = require("@nestjs/typeorm");
const create_post_entity_1 = require("./posts/dto/create-post.entity");
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
        console.log(dataSource.driver.database);
    }
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [posts_module_1.PostsModule, typeorm_2.TypeOrmModule.forRoot({
                type: 'postgres',
                database: 'post-app',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'rhodayo10.',
                entities: [create_post_entity_1.Posts],
                synchronize: true
            }),],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map