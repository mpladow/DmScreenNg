import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
imports: [MatCardModule, 
    MatGridListModule, 
    DragDropModule, 
    MatInputModule, 
    MatButtonModule, 
    MatTableModule,
    MatDialogModule, 
    MatFormFieldModule,
    MatExpansionModule,
    MatCheckboxModule],
exports: [MatCardModule, 
    MatGridListModule, 
    DragDropModule, 
    MatInputModule, 
    MatButtonModule, 
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    MatExpansionModule,
    MatCheckboxModule]
})
export class MaterialModule { }