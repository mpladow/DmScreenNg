import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';





@NgModule({
imports: [MatCardModule, MatGridListModule, DragDropModule, MatInputModule, MatButtonModule, MatTableModule],
exports: [MatCardModule, MatGridListModule, DragDropModule, MatInputModule, MatButtonModule, MatTableModule]
})
export class MaterialModule { }