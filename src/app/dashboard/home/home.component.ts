import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpComponent } from '../help/help.component';
import { ChartData, ChartType } from 'chart.js';
import { StockService } from '../stock.service';
import { Product } from '../product';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog:MatDialog, private stockService:StockService) {
    this.dataSource = new MatTableDataSource<Product>(this.lastProductsAdded);
  
  }
  // lineChart
  public lineChartType: ChartType = 'bar';
  public lineChartData:Array<any> = [
    {data: [18, 48, 7, 9], label: 'Entradas',
    backgroundColor: "#9961F5"},
    {data: [1, 10, 17, 29], label: 'Salidas',
    backgroundColor: "#F57FA4"},
    {data: [10, 8, 35, 84], label: 'Cambios',
    backgroundColor: "#ffe29a"},
  ];
  public lineChartLabels:Array<any> = ['May', 'Jun', 'Jul', 'Ago'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartLegend:boolean = true;

  recentUnitsAdded = this.stockService.getLastUnitsAdded()
  totalUnits = this.stockService.getTotalUnits()
  totalProducts = this.stockService.getTotalProducts() 
  productsBrand = this.stockService.getBrand()
  productsQuantity = this.stockService.getQuantity()
  recentActivity = this.stockService.recentActivity;
  lastProductsAdded = this.stockService.lastProductsAdded;
  displayedColumns: string[] = ["codigo", "nombre", "modelo", "marca", "cantidad", ]
  dataSource!:any;


 // Doughnut
  public doughnutChartLabels: string[] = this.productsBrand;
  public doughnutChartData: ChartData<'doughnut'> = {
    labels:  this.doughnutChartLabels,
    datasets: [
      { data: this.productsQuantity,
        backgroundColor: ["#9961F5","#F57FA4","#ffe29a"] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  

  ngOnInit(): void {
  }


  openDialog() {
    this.dialog.open(HelpComponent);
  }




}
