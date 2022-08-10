import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  img = 'http://www.straightforward.today/wp-content/uploads/2021/03/ilus3.png'
  constructor() { }

  ngOnInit(): void {
  }

}
