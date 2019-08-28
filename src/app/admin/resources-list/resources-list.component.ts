import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/_services/resources.service';
import { Router } from '@angular/router';
import { Resource } from 'src/app/_models/resource.model';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss']
})
export class ResourcesListComponent implements OnInit {

  resources: Resource[] = [];
  displayedColumns: string[] = ['id', 'category', 'actions'];

  constructor(private resourceService: ResourcesService,
    private router: Router) { }

  ngOnInit() {
    this.resourceService.getResourcesList().subscribe(resources => {
      this.resources = resources;
    });
  }
  onEditClick(e){
    console.log(e);
    this.router.navigate([`/resource/${e.id}`]);
  }

}
