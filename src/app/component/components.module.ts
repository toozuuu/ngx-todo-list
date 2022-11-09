import {NgModule} from "@angular/core";
import {TaskComponent} from "./task/task.component";

@NgModule({
    declarations: [
        TaskComponent
    ],
    exports: [
        TaskComponent
    ]
})


export class ComponentsModule {
}
