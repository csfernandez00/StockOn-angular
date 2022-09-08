import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Product } from 'src/app/dashboard/product';
import { StockService } from 'src/app/dashboard/stock.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NewProductComponent } from './new-product/new-product.component';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  value!: string;
  products!: Product[];
  dataSource!: any;
  displayedColumns: string[] = [
    'codigo',
    'nombre',
    'modelo',
    'marca',
    'cantidad',
  ];
  productSelected!: any;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private readonly stockService: StockService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  onSearch(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  onSelect(product: Product) {
    this.productSelected = product;
  }

  onClear() {
    this.productSelected = null;
  }

  newProduct() {
    const dialogRef = this.dialog.open(NewProductComponent, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result[1] === true) {
        const newProduct: Product = result[0];
        this.stockService.postProduct(newProduct);
        setTimeout(() => {
          this.refresh();
        }, 100);
      }
    });
  }

  deleteProduct(product: Product) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      disableClose: true,
      data: { item: 'un producto' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        const id = product.id;
        this.stockService.deleteProduct(id);
        this.productSelected = null;
        setTimeout(() => {
          this.refresh();
        }, 100);
      }
    });
  }

  editProduct() {
    const dialogRef = this.dialog.open(EditProductComponent, {
      disableClose: true,
      data: { product: this.productSelected },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result[1] === true) {
        const updatedProduct: Product = result[0];
        this.stockService.updateProduct(updatedProduct).subscribe((data) => {
          if (data) {
            setTimeout(() => {
              this.refresh();
            }, 100);
          }
        });
        this.productSelected = null;
      }
    });
  }

  refresh() {
    this.stockService.getProducts().subscribe((data) => {
      let orderByIdArr = data.sort(function (a: Product, b: Product) {
        return a.id - b.id;
      });
      this.dataSource = new MatTableDataSource<Product>(orderByIdArr);
      this.products = this.dataSource;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
}
