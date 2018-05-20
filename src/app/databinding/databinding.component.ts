import { Component } from "@angular/core"; 

@Component( { // decorator to tell Angular this is a Component
    selector: 'app-databinding', 
    templateUrl: './databinding.component.html'

} )
export class DatabindingComponent {

    // variables and functions to test out String Interpolation
    myNumber: number = 10;
    myExplicitString: string = 'explicit string'; 
    myImplicitString = 'implicit string'; 

    // variables to test Property Binding
    myPropertyBinding: boolean = true;

    constructor() {
        setTimeout(() => { // after 2 seconds set the property to false
            this.myPropertyBinding = false;
        }, 2000);
    }
    getStringFunction() {
        return "String returned from String Function";
    }

    // variables to test Event Binding 
    eventBindingNumber: number = 0;
    eventBindingString: string;
    onEventBindingIncreaseNumber():void {
        this.eventBindingNumber++;
    }
    onEventBindingTextInput(event: Event): void {
        console.log(event);  // inspect the event properties. Can retrieve the value from the HTML input
        this.eventBindingString = (<HTMLInputElement>(event.target)).value;
    }

    // variables to test out 2-way binding
    twoWayBindingString: String = 'default';
    twoWayBindingOutputString: String;
    onClickOutputString(): void {
        this.twoWayBindingOutputString = this.twoWayBindingString;
    }

}
