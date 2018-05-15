import { Component, OnInit } from '@angular/core'; // components are specific to Angular and comes from the Angular Core package

@Component({  // decorator to tell Angular this is a component. 'selector', 'templateUrl', 'styles' are the common input objects to this component

  selector: 'app-component',   // defines the selector as an HTML tag i.e. <app-component>
//selector: '[app-component]', // defines the selector as an HTML attribute i.e. <div app-server>
//selector: '[app-component]', // defines the selector as an HTML class i.e. <div class="app-server">

  templateUrl: './component.component.html', // defines the HTML template file associated to this component
  // or you can use inline styling using the template property. You can use JS template expressions using back ticks `....`
  // You need to have atleast one of the template or templateURL property

  styleUrls: ['./component.component.css'] // define the CSS for the component.
  // can add multiple css files, or can do inline styling using style property
})
export class ComponentComponent implements OnInit { // export the component so it can be used outside this file

  constructor() { }

  ngOnInit() {
  }

}
