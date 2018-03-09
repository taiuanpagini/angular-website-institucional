import { NgModule } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { HomeComponent } from "./home/home.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}