import { NgModule } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { ContatoComponent } from "./contato.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'contato', component: ContatoComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ContatoRoutingModule {

}