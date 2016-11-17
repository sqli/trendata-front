import {Component, Input, OnInit, AfterViewInit} from "@angular/core";
import {JQueryService} from "../../../services/jQuery.service";

@Component({
    moduleId: module.id,
    selector: 'select-btn',
    templateUrl: 'select-btn.component.html',
    styleUrls: ['select-btn.component.css'],
    providers: [JQueryService]
})

export class SelectBtnComponent implements AfterViewInit {
    @Input() title: string;

    // moduleid: any = module.id;

    ngAfterViewInit(): void {
        $('select').material_select();
        // console.log(this.moduleid);
    }
}