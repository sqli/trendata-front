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
        {title: 'services', link: '/home'},
        {title: 'rapports', link: '/sector-mapping'},
        {title: 'offres', link: '/home'},
        {title: 'documentation', link: '/home'},
        {title: 'support', link: '/home'},
        {title: 'à propos', link: '/home'}
    ];

    constructor(public renderer: Renderer) {
    }

    ngAfterViewInit(): void {
        $(this.navUl.nativeElement).tabs();
    }
}