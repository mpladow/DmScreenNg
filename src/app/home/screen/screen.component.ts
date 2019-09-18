import { Component, OnInit, Input, OnDestroy } from '@angular/core';
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
export class ScreenComponent implements OnInit, OnDestroy {

  selectResourceItems = [];
  selected = '';
  resourceList: Resource[] = [];
  accountResourceList: Resource[] = [];
  ghosts = [];
  faPlus = faPlus;
  subscription;

  constructor(private resourceService: ResourcesService,
    private alertifyService: AlertifyService,
    private sessionService: SessionService) { }

  ngOnInit() {
    this.subscription = this.resourceService.resourcesListSource.subscribe(rl => {
      //on changs to the service, update the current list
      this.accountResourceList = rl;
      //push these changes to the session
      this.sessionService.updateAllResources(this.accountResourceList);

    })
    this.resourceService.getCurrentResources();

    //get data from the session service.
    // this.sessionService.getSession();
    this.reloadList();
    // this.accountResourceList = this.sessionService.getResourcesList();
    this.resourceService.getResourcesList().subscribe((data: Resource[]) => {
      this.resourceList = data;
      data.forEach(r => {
        const selectListitem = {
          value: r.resourceId,
          viewValue: r.category
        };
        this.selectResourceItems.push(selectListitem);
      });
      this.ghosts = [];
    }, error => this.alertifyService.error('Error'));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  reloadList() {
    this.ghosts = new Array(10); // setup ghost items
  }
  addResource() {
    // find resource in the resource list, then add this resource to the accountResourceList
    const resourceFound: Resource = this.resourceList.find(res => {
      return res.resourceId === parseInt(this.selected);
    })
    this.resourceService.addSessionResource(resourceFound);

  }
  onDeleted(id: number) {
    this.resourceService.removeSessionResource(id);
  }
  addNewResource() {
    // let newResource: Resource = {};
    // let randomId = Math.floor((Math.random() * 100) + 1);
    // newResource.category = 'Notes'+ randomId;
    // this.resourceService.createNewResource(newResource)
    // .subscribe(resource => {
    //   this.accountResourceList.push(resource);
    //   this.sessionService.addActiveResourceSheet(resource);
    // }, fail =>{
    //   this.alertifyService.error('An error has occurred.');
    // })
  }

}
