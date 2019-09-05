import { Component, OnInit, Input } from '@angular/core';
import { Resource } from 'src/app/_models/resource.model';
import { ResourcesService } from 'src/app/_services/resources.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { SessionService } from 'src/app/_services/session.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  selectResourceItems = [];
  selected = '';
  resourceList: Resource[] = [];
  accountResourceList: Resource[] = [];
  ghosts = [];
  faPlus = faPlus;

  constructor(private resourceService: ResourcesService,
    private alertifyService: AlertifyService,
    private sessionService: SessionService) { }

  ngOnInit() {
    this.reloadList();

    this.resourceService.getResourcesList().subscribe((data: Resource[]) => {
      // generate select list
      this.resourceList = data;
      data.forEach(r => {
        const selectListitem = {
          value: r.id, viewValue: r.category
        }
        this.selectResourceItems.push(selectListitem);
      });
      this.ghosts = [];
    }, error => this.alertifyService.error('Error'));
  }

  reloadList() {
    this.ghosts = new Array(10); // setup ghost items
  }
  addResource() {
    // find resource in the resource list, then add this resource to the accountResourceList
    const resourceFound: Resource = this.resourceList.find(res => {
      return res.id === parseInt(this.selected);
    })
    this.accountResourceList.push(resourceFound);
    this.sessionService.addActiveResourceSheet(resourceFound);
  }
  onDeleted(id: number) {
    this.sessionService.removeActiveResourceSheet(id);
    this.accountResourceList = this.sessionService.getActiveResourceSheets();
    console.log(this.accountResourceList);
  }
  addNewResource() {
    let newResource: Resource = {};
    let randomId = Math.floor((Math.random() * 100) + 1);
    newResource.category = 'Notes'+ randomId;
    this.resourceService.createNewResource(newResource)
    .subscribe(resource => {
      this.accountResourceList.push(resource);
      this.sessionService.addActiveResourceSheet(resource);
    }, fail =>{
      this.alertifyService.error('An error has occurred.');
    })
  }

}
