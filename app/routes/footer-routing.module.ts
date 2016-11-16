import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AboutComponent} from "../components/core/main/about/about.component";
import {NewsComponent} from "../components/core/footer/news/news.component";
import {CGVComponent} from "../components/core/footer/cgv/cgv.component";

const routes: Routes = [
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

export class FooterRoutingModule {
}