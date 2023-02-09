import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { WarningComponent } from 'src/app/components/warning/warning.component';
import { ConfirmComponent } from '../confirm/confirm.component';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User = this.userService.user;
  userEditForm!: FormGroup;
  changePassForm!: FormGroup;
  hide1 = true;
  hide2 = true;
  hide3 = true;

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialog: MatDialog,
    public userService: UserService
  ) {
    this.userEditForm = this.initUserForm();
    this.changePassForm = this.initPassForm();
  }

  ngOnInit(): void {}

  logOut() {}

  onEdit(): void {
    let updatedUser: User = this.userEditForm.value;
    updatedUser.id = this.user.id;
    this.user = updatedUser;
    // post..
  }

  initUserForm(): FormGroup {
    return this.fb.group({
      nombre: [this.user.nombre, Validators.required],
      apellido: [this.user.apellido, Validators.required],
      empresa: [this.user.empresa, Validators.required],
      email: [this.user.email, Validators.required],
    });
  }
  initPassForm(): FormGroup {
    return this.fb.group({
      oldPass: ['', Validators.required],
      newPass: ['', Validators.required],
      confirmPass: ['', Validators.required],
    });
  }

  resetUserForm() {
    this.userEditForm.markAsUntouched();
  }
  resetPassForm() {
    this.changePassForm.markAsUntouched();
    this.changePassForm.reset();
  }

  newPass() {}

  deleteAccount() {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      disableClose: true,
      data: { item: 'tu cuenta' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        const dialogRe = this.dialog.open(WarningComponent, {
          disableClose: true,
        });
        dialogRe.afterClosed().subscribe((res) => {
          if (res === true) {
            //delete account
          }
        });
      }
    });
  }
}
