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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_routing_module_1 = require("./routes/app-routing.module");
var main_routing_module_1 = require("./routes/main-routing.module");
var app_component_1 = require("./components/core/app.component");
var header_component_1 = require("./components/core/header/header.component");
var footer_component_1 = require("./components/core/footer/footer.component");
var sector_mapping_component_1 = require("./components/core/main/services/sector-mapping/sector-mapping.component");
var home_component_1 = require("./components/core/main/home/home.component");
var jQuery_service_1 = require("./services/jQuery.service");
var about_component_1 = require("./components/core/main/about/about.component");
var cgv_component_1 = require("./components/core/footer/cgv/cgv.component");
var news_component_1 = require("./components/core/footer/news/news.component");
var select_btn_component_1 = require("./components/widgets/select-btn/select-btn.component");
var reports_component_1 = require("./components/core/main/reports/reports.component");
var offers_component_1 = require("./components/core/main/offers/offers.component");
var documentation_component_1 = require("./components/core/main/documentation/documentation.component");
var support_component_1 = require("./components/core/main/support/support.component");
var top_card_component_1 = require("./components/core/main/services/top-card/top-card.component");
var card_container_component_1 = require("./components/widgets/card-container/card-container.component");
var tendency_circle_component_1 = require("./components/core/main/services/top-card/tendency-circle/tendency-circle.component");
var graphe_component_1 = require("./components/core/main/services/graphe/graphe.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule, app_routing_module_1.AppRoutingModule, main_routing_module_1.MainRoutingModule],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                home_component_1.HomeComponent,
                sector_mapping_component_1.SectorMappingComponent,
                reports_component_1.ReportsComponent,
                offers_component_1.OffersComponent,
                documentation_component_1.DocumentationComponent,
                support_component_1.SupportComponent,
                about_component_1.AboutComponent,
                cgv_component_1.CGVComponent,
                news_component_1.NewsComponent,
                select_btn_component_1.SelectBtnComponent,
                card_container_component_1.CardContainerComponent,
                top_card_component_1.TopCardComponent,
                tendency_circle_component_1.TendencyCircleComponent,
                graphe_component_1.GrapheComponent
            ],
            providers: [jQuery_service_1.JQueryService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map