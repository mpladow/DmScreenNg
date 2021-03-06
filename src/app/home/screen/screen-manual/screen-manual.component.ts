import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Inject
} from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-screen-manual",
  templateUrl: './screen-manual.component.html',
  styleUrls: ["./screen-manual.component.scss"]
})
export class ScreenManualComponent implements OnInit {
  @ViewChild("container", { static: false }) private container: ElementRef;

  constructor(
    @Inject(DOCUMENT) private document: any
  ) {}
 ngOnInit(){
    // this.pageScrollService.scroll({
    //   document: this.document,
    //   scrollTarget: ".theEnd"
    // });
 }
  public scrollToSection(el: HTMLElement) {
    // el.scrollIntoView();

  }
  // if the position of the top of a heading is less than the position of the top of container
  // then set the active class to the heading of the next section heading.
}
