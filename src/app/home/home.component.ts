import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../_services/resources.service';
import { Resource } from '../_models/resource.model';
import { MatDialog } from '@angular/material/dialog';
import { CharacterQuickaddComponent } from './character-tracker/character-quickadd/character-quickadd.component';
import { CharactercardService } from '../_services/charactercard.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
    private characterCardService: CharactercardService) { }

  ngOnInit() {
  }
}
