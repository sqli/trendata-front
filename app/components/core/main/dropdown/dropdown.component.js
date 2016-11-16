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
var jQuery_service_1 = require("../../../../services/jQuery.service");
var DropdownComponent = (function () {
    function DropdownComponent() {
    }
    DropdownComponent.prototype.ngOnInit = function () {
        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false,
            hover: true,
            gutter: 0,
            belowOrigin: false,
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DropdownComponent.prototype, "title", void 0);
    DropdownComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dropdown',
            templateUrl: './dropdown.component.html',
            styleUrls: ['./dropdown.component.css'],
            providers: [jQuery_service_1.JQueryService]
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownComponent);
    return DropdownComponent;
}());
exports.DropdownComponent = DropdownComponent;
//# sourceMappingURL=dropdown.component.js.map