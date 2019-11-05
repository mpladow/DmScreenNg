import { CreatureCardService } from "./../../../../_services/creaturecard.service";
import { Component, OnInit } from "@angular/core";
import { CreatureCard } from "src/app/_models/creaturecard.model";

@Component({
  selector: "app-encounter-quickadd",
  templateUrl: "./encounter-quickadd.component.html",
  styleUrls: ["./encounter-quickadd.component.scss"]
})
export class EncounterQuickaddComponent implements OnInit {
  creatures: CreatureCard[] = [];
  constructor(private creatureCardService: CreatureCardService) {}

  ngOnInit() {
    this.creatureCardService.get().subscribe(result => {
      this.creatures = result;
    });
  }

}
