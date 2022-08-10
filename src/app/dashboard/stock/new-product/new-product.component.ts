import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../product';



@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})

export class NewProductComponent {
 
  productForm!:FormGroup

  constructor(private readonly fb: FormBuilder, public dialogRef: MatDialogRef<NewProductComponent>) {
    this.productForm = this.initForm();
  }

  onCreate():void{
    let newProduct:Product = this.productForm.value 
    this.dialogRef.close([newProduct, true])
  }

  onCancel():void{
    let newProduct:Product = this.productForm.value 
    this.dialogRef.close([newProduct, false])
  }



  initForm():FormGroup{
    return this.fb.group({
      nombre: ['',Validators.required],
      modelo: [''],
      marca: ['',Validators.required],
      cantidad: ['',Validators.required],
      codigo: ['']
    })
  }
}
