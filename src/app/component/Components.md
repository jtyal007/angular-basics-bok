
# Angular Components
- Angular is based on the idea of Component-driven development
- Components are reusable across views and each has their own tempalte, HTML code, styling, and typescript code to hold the business logic
- Each application has an app.module which is the Root component of the entire Angular application. All the other components are added to this component.
- Good practice to put all components under the app folder, and name the folder the same as the component
- Naming of the component should be followed by the word component. i.e.e server.component.ts
- Because the component is essentially a typescript class, it needs to be exported to be used outside the class
- To use a component, it needs to be registered in the AppModule

## Files in a component
1. mycomp.component.css // CSS styles for the component
2. mycomp.component.html // HTML template for the component
3. mycomp.component.spec.ts // for testing the component
4. mycomp.component.ts // typescript file containing the logic for the component


## How to use a component
Components can either be created manually or automatically using the CLI command.

CLI command:
> ng generate component <component-name>
or
> ng g c <component-name>
note: will automatically import the component for usage in app.module.ts

Manual:
1. create the folder and the *.component.ts, *.component.html, *.component.css as required
2. export the component class so it can be used externally
3. import the component in the app.module.ts and add it to the Angular Module declarations array