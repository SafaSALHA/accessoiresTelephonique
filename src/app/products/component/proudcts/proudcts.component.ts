import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-proudcts',
  templateUrl: './proudcts.component.html',
  styleUrls: ['./proudcts.component.css']
})
export class ProudctsComponent  implements OnInit{
  constructor(private ProductsService:ProductsService  ){}
  helmet:any [] | undefined
  Earphone:any [] | undefined
  Cases_and_covers:any [] | undefined
  Smartphone_holder:any [] | undefined
  Power_bank:any [] | undefined
  cartProducts : any [] = []
  ngOnInit(): void{
    this.ProductsService.getHelmets().subscribe((helmet)=>{
      this.helmet =helmet
    })
    this.ProductsService.getEarphone().subscribe((Earphone)=>{
      this.Earphone =Earphone
    })
    this.ProductsService.getCasesAndCovers().subscribe((Cases_and_covers)=>{
      this.Cases_and_covers =Cases_and_covers
    })
    this.ProductsService.getSmartphoneHolder().subscribe((Smartphone_holder)=>{
      this.Smartphone_holder =Smartphone_holder
    })
    this.ProductsService.getPowerBank().subscribe((Power_bank)=>{
      this.Power_bank =Power_bank
    })
  }

  addToCart(event:any){
    if("products" in localStorage){
      this.cartProducts=JSON.parse(localStorage.getItem("products")!) || [] //bech njib data ili fast localstorege wnhotha fast cartProducts
      let exist = this.cartProducts.find(item => item.item.name == event.item.name)
      if(exist){
        alert("Cases or covers is already is your cart")
      }else{
        this.cartProducts.push(event) // bech nhot il event fi cartProducts
      localStorage.setItem('products' , JSON.stringify(this.cartProducts)) // bech nhot data fi localstorge
      }

    }else{
      this.cartProducts.push(event) // bech nhot il event fi cartProducts
      localStorage.setItem('products' , JSON.stringify(this.cartProducts)) // bech nhot data fi localstorge
    }

    }
    
  }


