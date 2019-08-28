import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResourcesListComponent } from './admin/resources-list/resources-list.component';
import { ResourceEditorComponent } from './admin/resources-list/resource-editor/resource-editor.component';


const routes: Routes = [
  {path: 'home',
  component: HomeComponent},
  {path: 'resources-list',
  component: ResourcesListComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'resource/:id', component: ResourceEditorComponent},
  {path: 'resource', component: ResourceEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
