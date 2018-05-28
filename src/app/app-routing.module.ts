import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatabindingComponent } from './databinding/databinding.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComponentComponent } from './component/component.component';

const appRoutes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'databinding', component: DatabindingComponent },
    { path: 'component', component: ComponentComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes, { enableTracing: true }
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}