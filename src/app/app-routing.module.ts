import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResourcesListComponent } from './admin/resources-list/resources-list.component';
import { ResourceEditorComponent } from './admin/resources-list/resource-editor/resource-editor.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { CreatureListComponent } from './admin/creature-list/creature-list.component';
import { CreatureEditorComponent } from './admin/creature-list/creature-editor/creature-editor.component';


const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: 'resources-list', component: ResourcesListComponent },
      { path: 'resource/:id', component: ResourceEditorComponent },
      { path: 'resource', component: ResourceEditorComponent },
      { path: 'creature-list', component: CreatureListComponent },
      { path: 'creature', component: CreatureEditorComponent },
      { path: 'creature/:id', component: CreatureEditorComponent }
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
