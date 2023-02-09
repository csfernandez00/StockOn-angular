import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpComponent } from '../help/help.component';
import { SupportComponent } from '../support/support.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openHelpDialog() {
    this.dialog.open(HelpComponent);
  }
  openSupportDialog() {
    this.dialog.open(SupportComponent);
  }
}
