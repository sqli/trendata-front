import {Component, ElementRef, ViewChild, AfterViewInit} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'trendata-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements AfterViewInit {

    @ViewChild('navUl') navUl: ElementRef;

    ngAfterViewInit(): void {
        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 300,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: false, // Activate on hover
            gutter: -2, // Spacing from edge
            belowOrigin: true, // Displays dropdown below the button
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
        });

        // Used to remove active class on dropdown buttons
        $('li').click(function() {
            $(this).siblings().removeClass('active');
        });
    }

    /**
     * Method to use on dropdown buttons to add class 'active'
     */
    activation(): void {
        $('.dropdown-button').parent().addClass('active');
    }
}