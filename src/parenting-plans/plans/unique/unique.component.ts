import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan';

@Component({
  selector: 'app-unique',
  templateUrl: './unique.component.html',
  styleUrls: ['./unique.component.scss', '../plan.component.scss']
})
export class UniqueComponent implements OnInit {

  PlanSources: Plan[];

  constructor() { }

  ngOnInit() {
    this.PlanSources = [
      {
        Name: 'Unique U1',
        ImageURL: 'Unique U1.png'
      }
    ]
  }

}
