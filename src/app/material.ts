import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
imports: [MatCardModule, DragDropModule],
exports: [MatCardModule, DragDropModule]
})
export class MaterialModule { }