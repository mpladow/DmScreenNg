import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
imports: [MatCardModule, MatGridListModule, DragDropModule, MatInputModule, MatButtonModule],
exports: [MatCardModule, MatGridListModule, DragDropModule, MatInputModule, MatButtonModule]
})
export class MaterialModule { }