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
exports.Country = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Team_1 = require("./Team");
let Country = class Country extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Country.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], Country.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], Country.prototype, "code", void 0);
__decorate([
    typeorm_1.OneToMany(() => User_1.User, (user) => user.country),
    __metadata("design:type", Array)
], Country.prototype, "users", void 0);
__decorate([
    typeorm_1.OneToMany(() => Team_1.Team, (team) => team.country),
    __metadata("design:type", Array)
], Country.prototype, "teams", void 0);
Country = __decorate([
    typeorm_1.Entity()
], Country);
exports.Country = Country;
