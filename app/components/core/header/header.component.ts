import {Component, ElementRef, ViewChild, AfterViewInit, Renderer} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'trendata-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements AfterViewInit {

    @ViewChild('navUl') navUl: ElementRef;

    menuItems: Object[] = [
        {title: 'services', link: '/sector-mapping'},
        {title: 'rapports', link: '/reports'},
        {title: 'offres', link: '/offers'},
        {title: 'documentation', link: '/documentation'},
        {title: 'support', link: '/support'},
        {title: 'à propos', link: '/about'}
    ];

    constructor(public renderer: Renderer) {
    }

    ngAfterViewInit(): void {
    }
}