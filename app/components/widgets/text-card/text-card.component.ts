import {Component, Input, Attribute} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'text-card',
    templateUrl: 'text-card.component.html',
    styleUrls: ['text-card.component.css']
})

export class TextCardComponent {
    @Input() textClass: string;
}