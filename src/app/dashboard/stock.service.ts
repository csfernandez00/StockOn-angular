import { Injectable, OnInit} from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})

export class StockService{
  id!:number
  products:Product[] = [
    {
      id: 1,
      nombre: "Celular",
      modelo: "Azul",
      marca: "Samsung",
      cantidad: 10,
      codigo: "00-01"
    },
    {
      id: 2,
      nombre: "Televisor",
      modelo: "4k",
      marca: "Samsung",
      cantidad: 10,
      codigo: "00-02"
    }, 
    {
      id: 3,
      nombre: "Tablet",
      modelo: "Blanca",
      marca: "Samsung",
      cantidad: 10,
      codigo: "00-03"
    },
  ];

  constructor() {
    this.filterProducts()
  }

  productsResume!:any[];
  recentActivity:Product[]=[];
  lastProductsAdded:Product[] = [];
  


  getProducts(){
    return this.products
  }


  postProduct(product:Product){}



  deleteProduct(id:number){

  }






  // deleteProduct(productSelected:Product){
  //   this.products = this.products.filter(product => product !== productSelected)
  // }


















  filterProducts(){
    const productsFiltered = this.products.reduce((acc:Product[], value:Product) => {
      const doesExist = acc.find(elemento => elemento.marca === value.marca);

      if (doesExist) {
        return acc.map((elemento) => {
          if (elemento.marca === value.marca) {
            return {
              ...elemento,
              cantidad: elemento.cantidad + value.cantidad
            }
          }
    
          return elemento;
        });
      }
    
      return [...acc, value];
    }, []);
    this.productsResume = productsFiltered;
  }


  getBrand(){ 
    const arr:string[] =[]
    for(let product of this.productsResume){
      arr.push(product.marca)
    }
    return arr
  }

  getQuantity(){
      const arr:number[] = []
      for(let product of this.productsResume){
        arr.push(product.cantidad)
      }
    return arr
  }

  updateList(np:Product){
    this.productsResume.push(np)
    this.recentActivity.push(np)
    if(this.lastProductsAdded.length < 3){
      this.lastProductsAdded.push(np)
    }else{
      this.lastProductsAdded.shift()
      this.lastProductsAdded.push(np)
    }
    this.filterProducts()
  }


  getTotalProducts(){
    return this.products.length
  }

  getTotalUnits(){
    let totalUnits:number = 0;
    for(let product of this.products){
      totalUnits += product.cantidad
    }
    return totalUnits
  }


  getLastUnitsAdded(){
    let unitsAdded:number = 0;
    for(let product of this.recentActivity){
      unitsAdded += product.cantidad
    }
    return unitsAdded
  }
}

