import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exitdialog',
  templateUrl: './exitdialog.component.html',
  styleUrls: ['./exitdialog.component.scss']
})
export class ExitdialogComponent implements OnInit {

  constructor(private readonly router:Router) { }

  ngOnInit(): void {
  }
  goToLanding(){
    this.router.navigate([''])
  }

}
