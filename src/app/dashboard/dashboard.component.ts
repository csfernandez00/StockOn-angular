import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExitdialogComponent } from '../dashboard/exitdialog/exitdialog.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  name: string = this.userService.user.nombre;
  constructor(public dialog: MatDialog, public userService: UserService) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(ExitdialogComponent, {
      width: '400px',
    });
  }
}
