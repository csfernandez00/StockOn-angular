import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent {
  supportForm!: FormGroup;
  user: User = this.userService.getUser();

  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UserService
  ) {
    this.supportForm = this.initForm();
  }

  ngOnInit(): void {
    console.log(this.user);
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: [this.user.nombre, Validators.required],
      mail: [this.user.email, Validators.required],
      mensaje: ['', Validators.required],
    });
  }
}
