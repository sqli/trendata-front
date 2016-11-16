import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./components/core/app.component";
import {HeaderComponent} from "./components/core/header/header.component";
import {FooterComponent} from "./components/core/footer/footer.component";
import {SectorMappingComponent} from "./components/core/main/sector-mapping/sector-mapping.component";
import {AppRoutingModule} from "./routes/app-routing.module";
import {HomeComponent} from "./components/core/main/home.component";
import {JQueryService} from "./services/jQuery.service";
import {AboutComponent} from "./components/core/main/about/about.component";
import {CGVComponent} from "./components/core/footer/cgv/cgv.component";
import {NewsComponent} from "./components/core/footer/news/news.component";
import {FooterRoutingModule} from "./routes/footer-routing.module";
import {DropdownComponent} from "./components/core/main/dropdown/dropdown.component";

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule, AppRoutingModule, FooterRoutingModule],
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        SectorMappingComponent,
        AboutComponent,
        CGVComponent,
        NewsComponent,
        DropdownComponent
    ],
    providers: [JQueryService],
    bootstrap: [AppComponent]
})

export class AppModule {
}