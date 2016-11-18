import {Component, Input} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'card-container',
    templateUrl: 'card-container.component.html',
    styleUrls: ['card-container.component.css']
})

export class CardContainerComponent {
    @Input() textClass: string;
}