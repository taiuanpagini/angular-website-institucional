import { NgModule } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { QuemSomosComponent } from "./quem-somos.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'quem-somos', component: QuemSomosComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class QuemSomosRoutingModule {

}