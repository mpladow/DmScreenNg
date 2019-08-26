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

  constructor(private resourceService: ResourcesService,
    private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.resourceService.getResourcesList().subscribe((data) => {
      this.resourceList = data;
    }, error => this.alertifyService.error('Error'))
  }

}
