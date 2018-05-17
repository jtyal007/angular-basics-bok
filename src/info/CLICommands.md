
# Angular CLI Commands

installling the Angular CLI
> npm install -g @angular/cli     // the g stands for global which allows the npm command to be used anywhere

Creating a new Angular project
> ng new <name of project>          // run this command from the parent directory where you want your project to sit

Pull down dependencies of the project
> npm install                       // pulls down the dependencies of the projects and puts it into the node_modules folder
                                    // run this command when you add anything new to package.json

Run and build the project
> ng serve                          // builds the projects and deploys to local dev server to test
or 
> npm start

Create an angular component:
> ng generate component <component-name> // will automatically import the component for usage in app.module.ts
or
> ng g c <component-name>


