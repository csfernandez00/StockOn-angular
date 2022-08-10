import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExitdialogComponent } from '../dashboard/exitdialog/exitdialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  name:string = "Juan";
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
      this.dialog.open(ExitdialogComponent, {
        width: '400px'
    });
  }
} 
