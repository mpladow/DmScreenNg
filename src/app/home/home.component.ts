import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../_services/resources.service';
import { Resource } from '../_models/resource.model';
import { MatDialog } from '@angular/material/dialog';
import { CharacterQuickaddComponent } from './character-tracker/character-quickadd/character-quickadd.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  resourceList: Resource[] = [];
  constructor(
    private resourceService: ResourcesService,
    public dialog: MatDialog) { }

  ngOnInit() {
  }
}
