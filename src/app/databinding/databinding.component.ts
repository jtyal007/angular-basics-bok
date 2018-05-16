import { Component } from "@angular/core"; 

@Component( { // decorator to tell Angular this is a Component
    selector: 'app-databinding', 
    templateUrl: './databinding.component.html'

} )
export class DatabindingComponent {

    // variables and functions to test out String interpolation
    myNumber: number = 10;
    myExplicitString: string = 'explicit string'; 
    myImplicitString = 'implicit string'; 
    
    getStringFunction() {
        return "String returned from String Function";
    }
}
