import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AboutComponent} from "../components/core/main/about/about.component";
import {NewsComponent} from "../components/core/footer/news/news.component";
import {CGVComponent} from "../components/core/footer/cgv/cgv.component";
import {SectorMappingComponent} from "../components/core/main/services/sector-mapping/sector-mapping.component";
import {ReportsComponent} from "../components/core/main/reports/reports.component";
import {OffersComponent} from "../components/core/main/offers/offers.component";
import {DocumentationComponent} from "../components/core/main/documentation/documentation.component";
import {SupportComponent} from "../components/core/main/support/support.component";

const routes: Routes = [
    {
        path: 'sector-mapping',
        component: SectorMappingComponent
    },
    {
        path: 'reports',
        component: ReportsComponent
    },
    {
        path: 'offers',
        component: OffersComponent
    },
    {
        path: 'documentation',
        component: DocumentationComponent
    },
    {
        path: 'support',
        component: SupportComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: 'cgv',
        component: CGVComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class MainRoutingModule {
}