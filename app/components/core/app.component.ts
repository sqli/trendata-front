import {Component, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'trendata-app',
    templateUrl: '../../templates/core/app.component.html'
})

export class AppComponent implements OnInit {
    trendataImg: string = 'app/resources/img/trendata_fulllogo.png';

    constructor() {
    }

    getImage(): string {
        return this.trendataImg;
    }

    ngOnInit(): void {
    }
}