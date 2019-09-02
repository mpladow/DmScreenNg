import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../_services/resources.service';
import { Resource } from '../_models/resource.model';
import { MatDialog } from '@angular/material/dialog';
import { CharacterQuickaddComponent } from './character-tracker/character-quickadd/character-quickadd.component';
import { CharactercardService } from '../_services/charactercard.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faMenu = faBars;

  resourceList: Resource[] = [];
  constructor(
    private resourceService: ResourcesService,
    public dialog: MatDialog,
    private characterCardService: CharactercardService,
    private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/login']);
  }
}
