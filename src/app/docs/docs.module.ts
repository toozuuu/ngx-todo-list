import {NgModule} from "@angular/core";
import { ComponentListComponent } from './component-list/component-list.component';
import {ComponentsModule} from "../component/components.module";
import {DocsRoutingModule} from "./docs-routing.module";

@NgModule({
    imports: [
        ComponentsModule,
        DocsRoutingModule
    ],
    declarations: [
        ComponentListComponent
    ]
})

export class DocsModule{}
