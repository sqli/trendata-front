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
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngAfterViewInit = function () {
        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 300,
            constrain_width: false,
            hover: false,
            gutter: -2,
            belowOrigin: true,
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
        });
        // Used to remove active class on dropdown buttons
        $('li').click(function () {
            $(this).siblings().removeClass('active');
        });
    };
    /**
     * Method to use on dropdown buttons to add class 'active'
     */
    HeaderComponent.prototype.activation = function () {
        $('.dropdown-button').parent().addClass('active');
    };
    __decorate([
        core_1.ViewChild('navUl'), 
        __metadata('design:type', core_1.ElementRef)
    ], HeaderComponent.prototype, "navUl", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'trendata-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map