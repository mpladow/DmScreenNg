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
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';



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
    MatCheckboxModule,
    TextFieldModule,
    MatMenuModule,
    MatIconModule],
exports: [MatCardModule,
    MatGridListModule,
    DragDropModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    MatExpansionModule,
    MatCheckboxModule,
    TextFieldModule,
    MatMenuModule,
    MatIconModule]
})
export class MaterialModule { }
