import { Component, OnInit, Input } from '@angular/core';
import { Resource } from 'src/app/_models/resource.model';
import { ResourcesService } from 'src/app/_services/resources.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  resourceList: Resource[] = [];
  ghosts = [];

  constructor(private resourceService: ResourcesService,
    private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.reloadList();

    this.resourceService.getResourcesList().subscribe((data) => {
      this.resourceList = data;
      this.ghosts = [];
    }, error => this.alertifyService.error('Error'));
  }

  reloadList() {
    this.ghosts = new Array(10); // setup ghost items
  }

}
