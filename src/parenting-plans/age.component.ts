import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})
export class AgeComponent implements OnInit {

  Color: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.Color = this.route.snapshot.paramMap.get('color');
  }

  ageSelected(age: string) {
    this.router.navigate(['/parenting-plans/', this.Color, age]);
  }

}
