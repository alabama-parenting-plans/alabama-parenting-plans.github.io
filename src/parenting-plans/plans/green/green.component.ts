import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.scss', '../plan.component.scss']
})
export class GreenComponent implements OnInit {

  PlanType: string;

  PlanSources: Plan[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.PlanType = this.route.snapshot.paramMap.get('id');
    switch (this.PlanType) {
      case 'a':
        this.PlanSources = [
          {
            Name: 'Green A1',
            ImageURL: 'Green A1.png'
          },
          {
            Name: 'Green A2',
            ImageURL: 'Green A2.png'
          },
          {
            Name: 'Green A3',
            ImageURL: 'Green A3.png'
          },
          {
            Name: 'Green A4',
            ImageURL: 'Green A4.png'
          },
          {
            Name: 'Green A5',
            ImageURL: 'Green A5.png'
          },
          {
            Name: 'Green A6',
            ImageURL: 'Green A6.png'
          },
          {
            Name: 'Green A7',
            ImageURL: 'Green A7.png'
          }
        ];
        break;

      case 'b':
        break;

      case 'c':
        break;

      case 'd':
        break;

      case 'm':
        break;

      default:
        break;
    }
  }

}
