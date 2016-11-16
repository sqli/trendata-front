import {Component, Input, OnInit} from "@angular/core";
import {JQueryService} from "../../../../services/jQuery.service";

@Component({
    moduleId: module.id,
    selector: 'dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css'],
    providers: [JQueryService]
})

export class DropdownComponent implements OnInit {
    @Input() title: string;

    ngOnInit(): void {
        $('.dropdown-button').dropdown({
                inDuration: 300,
                outDuration: 225,
                constrain_width: false, // Does not change width of dropdown to that of the activator
                hover: true, // Activate on hover
                gutter: 0, // Spacing from edge
                belowOrigin: false, // Displays dropdown below the button
                alignment: 'left' // Displays dropdown with edge aligned to the left of button
            }
        );
    }
}