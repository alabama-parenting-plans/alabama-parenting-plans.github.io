import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan';

@Component({
  selector: 'app-reunification',
  templateUrl: './reunification.component.html',
  styleUrls: ['./reunification.component.scss', '../plan.component.scss']
})
export class ReunificationComponent implements OnInit {

  PlanSources: Plan[];

  constructor() { }

  ngOnInit() {
    this.PlanSources = [
      {
        Name: 'Reunification R1',
        ImageURL: 'Reunification R1.png'
      }
    ]
  }

}
