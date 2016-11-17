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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var about_component_1 = require("../components/core/main/about/about.component");
var news_component_1 = require("../components/core/footer/news/news.component");
var cgv_component_1 = require("../components/core/footer/cgv/cgv.component");
var sector_mapping_component_1 = require("../components/core/main/services/sector-mapping/sector-mapping.component");
var reports_component_1 = require("../components/core/main/reports/reports.component");
var offers_component_1 = require("../components/core/main/offers/offers.component");
var documentation_component_1 = require("../components/core/main/documentation/documentation.component");
var support_component_1 = require("../components/core/main/support/support.component");
var routes = [
    {
        path: 'sector-mapping',
        component: sector_mapping_component_1.SectorMappingComponent
    },
    {
        path: 'reports',
        component: reports_component_1.ReportsComponent
    },
    {
        path: 'offers',
        component: offers_component_1.OffersComponent
    },
    {
        path: 'documentation',
        component: documentation_component_1.DocumentationComponent
    },
    {
        path: 'support',
        component: support_component_1.SupportComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'news',
        component: news_component_1.NewsComponent
    },
    {
        path: 'cgv',
        component: cgv_component_1.CGVComponent
    }
];
var MainRoutingModule = (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], MainRoutingModule);
    return MainRoutingModule;
}());
exports.MainRoutingModule = MainRoutingModule;
//# sourceMappingURL=main-routing.module.js.map