import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreatureCard } from 'src/app/_models/creaturecard.model';
import { FormBuilder } from '@angular/forms';
import { CreatureCardService } from 'src/app/_services/creaturecard.service';

@Component({
  selector: "app-quickadd",
  templateUrl: "./quickadd.component.html",
  styleUrls: ["./quickadd.component.scss"]
})
export class QuickaddComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<QuickaddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreatureCard,
    private fb: FormBuilder,
    private creatureCardservice: CreatureCardService
  ) {}

  ngOnInit() {}
}
