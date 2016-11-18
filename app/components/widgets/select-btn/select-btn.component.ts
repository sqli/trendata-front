import {Component, Input, AfterViewInit} from "@angular/core";
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

    ngAfterViewInit(): void {
        $('select').material_select();
    }
}