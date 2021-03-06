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
var core_1 = require("@angular/core");
var jQuery_service_1 = require("../../../services/jQuery.service");
var SelectBtnComponent = (function () {
    function SelectBtnComponent() {
    }
    SelectBtnComponent.prototype.ngAfterViewInit = function () {
        $('select').material_select();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SelectBtnComponent.prototype, "title", void 0);
    SelectBtnComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'select-btn',
            templateUrl: 'select-btn.component.html',
            styleUrls: ['select-btn.component.css'],
            providers: [jQuery_service_1.JQueryService]
        }), 
        __metadata('design:paramtypes', [])
    ], SelectBtnComponent);
    return SelectBtnComponent;
}());
exports.SelectBtnComponent = SelectBtnComponent;
//# sourceMappingURL=select-btn.component.js.map