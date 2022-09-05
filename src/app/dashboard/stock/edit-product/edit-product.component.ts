import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  editForm!: FormGroup;
  id: number = this.data.product.id;

  constructor(
    private readonly fb: FormBuilder,
    public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product }
  ) {
    this.editForm = this.initForm();
  }

  onEdit(): void {
    let updatedProduct: Product = this.editForm.value;
    updatedProduct.id = this.id;
    this.dialogRef.close([updatedProduct, true]);
  }

  onDiscard(): void {
    let updatedProduct: Product = this.editForm.value;
    this.dialogRef.close([updatedProduct, false]);
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: [this.data.product.nombre, Validators.required],
      modelo: [this.data.product.modelo],
      marca: [this.data.product.marca, Validators.required],
      cantidad: [this.data.product.cantidad, Validators.required],
      codigo: [this.data.product.codigo],
    });
  }
}
