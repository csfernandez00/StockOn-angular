import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpComponent } from '../help/help.component';
import { ChartData, ChartType } from 'chart.js';
import { StockService } from '../stock.service';
import { Product } from '../product';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../user';
import { arrayRandomIndex, Push } from 'tsparticles-engine';
import { SupportComponent } from '../support/support.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products!: Product[];
  recentActivity: Product[] = [];
  recentUnitsAdded!: number;
  totalUnits!: number;
  totalProducts!: number;
  productsResume!: any[];
  lastAdded = this.stockService.lastAdded;
  productsBrand: string[] = [];
  productsQuantity: number[] = [];
  displayedColumns: string[] = [
    'codigo',
    'nombre',
    'modelo',
    'marca',
    'cantidad',
  ];

  dataSource!: any;

  constructor(private dialog: MatDialog, private stockService: StockService) {}

  // lineChart
  public lineChartType: ChartType = 'bar';
  public lineChartData: Array<any> = [
    { data: [18, 48, 7, 9], label: 'Entradas', backgroundColor: '#9961F5' },
    { data: [1, 10, 17, 29], label: 'Salidas', backgroundColor: '#F57FA4' },
    { data: [10, 8, 35, 84], label: 'Cambios', backgroundColor: '#ffe29a' },
  ];
  public lineChartLabels: Array<any> = ['May', 'Jun', 'Jul', 'Ago'];
  public lineChartOptions: any = {
    responsive: true,
  };
  public lineChartLegend: boolean = true;

  // Doughnut;
  public doughnutChartData!: ChartData<'doughnut'>;
  public doughnutChartOptions: any = {
    responsive: true,
  };
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit() {
    this.stockService.getProducts().subscribe((data) => {
      this.products = data.sort(function (a: Product, b: Product) {
        return a.id - b.id;
      });
      this.totalProducts = this.products.length;
      this.getRecentActivity();
      this.dataSource = new MatTableDataSource<Product>(this.recentActivity);
      this.getTotalUnits();
      this.filterProducts();
    });
  }

  openDialog() {
    this.dialog.open(HelpComponent);
  }

  getRecentActivity() {
    const arr = [];
    let acc = 0;
    for (let i = this.products.length - 3; i < this.products.length; i++) {
      arr.push(this.products[i]);
      acc += this.products[i].cantidad;
    }
    this.recentActivity = arr;
    this.recentUnitsAdded = acc;
  }

  getTotalUnits() {
    let acc = 0;
    for (let product of this.products) {
      acc += product.cantidad;
    }
    this.totalUnits = acc;
  }

  filterProducts() {
    const productsFiltered = this.products.reduce(
      (acc: Product[], value: Product) => {
        const doesExist = acc.find(
          (elemento) => elemento.marca === value.marca
        );

        if (doesExist) {
          return acc.map((elemento) => {
            if (elemento.marca === value.marca) {
              return {
                ...elemento,
                cantidad: elemento.cantidad + value.cantidad,
              };
            }

            return elemento;
          });
        }

        return [...acc, value];
      },
      []
    );
    let arr: number[] = [];
    let arr2: String[] = [];
    productsFiltered.forEach((product) => {
      arr.push(product.cantidad);
      arr2.push(product.marca);
      this.doughnutChartData = {
        labels: [...arr2],
        datasets: [
          {
            data: [...arr],
            backgroundColor: ['#9961F5', '#F57FA4', '#ffe29a'],
          },
        ],
      };
    });
    console.log(this.doughnutChartData.labels);
  }

  openSupportDialog() {
    this.dialog.open(SupportComponent);
  }
}
