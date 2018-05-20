
# Data Binding in Angular

Databinding is how the typescript/javascript code communicates with the HTML template

There are 4 forms of data-binding:

1. String Interpolation
Allows strings, or objects that can be implicitly converted to Strings outputted to the view.
usage: output the value within double curly braces in the HTML template i.e. {{ myVariable }}
MyVariable can be a variable, a hardcoded string, a method that returns a string, a value that can be converted to a String (implicilty done by Angular).
For Example, a number will work because Angular will know to implicitly convert this into a String.
Within the double curly braces, you cannot put conditional statements.

i.e. <p> Server with {{ serverID }} is {{getServerStatus() }} </p>

2. Property Binding
Allows Angular to set the value of a property on a HTML element dynamically
usage: <blah [property]="value">
When setting the property statically it is not within square brackets
i.e. 
<button disabled="true">Add Server</button> <!-- Without Angular property binding -->
<button [disabled]="allowNewServer">Add Server</button> <!-- With Angular property binding -->

3. Event Binding
Allows Angular to set the value of an HTML element dynamically
usage: <blah (event)="expression">
When setting the event statically, it's not within brackets and omit the on part of the keyword
To get the values and properties of the event, use $event in the expression. i.e. (input)= "onUpdateServerName($event)"
In the type script class, you can then use event.target.value (may require casting to HTML input) to retrieve the input value
Note: for binding values, it's probably better to use Angular's 2-way binding

4. 2-way Binding
Allows Angular to bind the value of a form field to a javascript model. 
If the form field is updated, then the model is automatically updated, and vice-versa.
usage: [(ngModel)]="data", where ngModel is a 'directive'

## What to bind to
You can bind to all Properties and Events. To know what event or property and element has, use console.log(<property>) or inspect using the developer tools in the browser;
For events, you don't bind to onclick, but only to the click (=>(click))