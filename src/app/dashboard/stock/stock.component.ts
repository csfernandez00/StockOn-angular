import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/dashboard/product';
import { StockService } from 'src/app/dashboard/stock.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NewProductComponent } from './new-product/new-product.component';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  selected!:string;
  products!:Product[];
  displayedColumns: string[] = ["codigo", "nombre", "modelo", "marca", "cantidad"]
  dataSource!:any;
  productSelected!:any;
  value!:string;
  lastAdded!:Product[]
  

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  
  constructor(private stockService:StockService, public dialog:MatDialog) {
    this.products = this.stockService.getProducts()
    this.updateDataSource()
  }



  


  getProducts(){

  }



















  ngOnInit(): void {
  }

  updateDataSource(){
    this.dataSource = new MatTableDataSource<Product>(this.products);
  }


  onSearch(value:string):void{    
    this.dataSource.filter = value.trim().toLowerCase()
  }


  onSelect(product:Product):void{
    this.productSelected = product
  }


  onClear(){
    this.productSelected = null
  }


  onDelete():void{
    const dialogRef = this.dialog.open(ConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        this.stockService.deleteProduct(this.productSelected)
        this.products = this.stockService.getProducts()
        this.updateDataSource()
        this.productSelected = null
        this.stockService.filterProducts()
      }
    });
  }


  newProduct():void{
    const dialogRef = this.dialog.open(NewProductComponent, {disableClose:true});
    dialogRef.afterClosed().subscribe((result) => { 
      if(result[1] === true){
        const newProduct:Product = result[0]
        this.products.push(newProduct)
        this.updateDataSource()
        this.dataSource.sort = this.sort;
        this.stockService.updateList(newProduct)
      }
    })
  }


  editProduct():void{
    this.dialog.open(EditProductComponent, {
      data: { product: this.productSelected },
    });
  }

}

