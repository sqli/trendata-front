import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./routes/app-routing.module";
import {MainRoutingModule} from "./routes/main-routing.module";
import {AppComponent} from "./components/core/app.component";
import {HeaderComponent} from "./components/core/header/header.component";
import {FooterComponent} from "./components/core/footer/footer.component";
import {SectorMappingComponent} from "./components/core/main/services/sector-mapping/sector-mapping.component";
import {HomeComponent} from "./components/core/main/home/home.component";
import {JQueryService} from "./services/jQuery.service";
import {AboutComponent} from "./components/core/main/about/about.component";
import {CGVComponent} from "./components/core/footer/cgv/cgv.component";
import {NewsComponent} from "./components/core/footer/news/news.component";
import {SelectBtnComponent} from "./components/widgets/select-btn/select-btn.component";
import {ReportsComponent} from "./components/core/main/reports/reports.component";
import {OffersComponent} from "./components/core/main/offers/offers.component";
import {DocumentationComponent} from "./components/core/main/documentation/documentation.component";
import {SupportComponent} from "./components/core/main/support/support.component";
import {TopCardComponent} from "./components/core/main/services/top-card/top-card.component";
import {CardContainerComponent} from "./components/widgets/card-container/card-container.component";
import {TendencyCircleComponent} from "./components/core/main/services/top-card/tendency-circle/tendency-circle.component";
import {GrapheComponent} from "./components/core/main/services/graphe/graphe.component";

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule, AppRoutingModule, MainRoutingModule],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        SectorMappingComponent,
        ReportsComponent,
        OffersComponent,
        DocumentationComponent,
        SupportComponent,
        AboutComponent,
        CGVComponent,
        NewsComponent,
        SelectBtnComponent,
        CardContainerComponent,
        TopCardComponent,
        TendencyCircleComponent,
        GrapheComponent
    ],
    providers: [JQueryService],
    bootstrap: [AppComponent]
})

export class AppModule {
}