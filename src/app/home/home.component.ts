import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../_services/resources.service';
import { Resource } from '../_models/resource.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  resourceList: Resource[] = [];
  constructor(private resourceService: ResourcesService) { }

  ngOnInit() {
  }


}
