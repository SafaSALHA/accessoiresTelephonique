import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts:any[] = []
  total:any=0
  ngOnInit(): void {
    this.getCartProducts()
  }

getCartProducts(){
  if("products" in localStorage){
    this.cartProducts=JSON.parse(localStorage.getItem("products")!) || []
}
this.getCartTotal()
}

getCartTotal(){
  this.total = 0
  for(let x in this.cartProducts){
    this.total+=this.cartProducts[x].item.prix*this.cartProducts[x].quantity
  }

}

addAmount(index:number){
  this.cartProducts[index].quantity++
  localStorage.setItem('products' , JSON.stringify(this.cartProducts))
  this.getCartTotal()
}

minuAmount(index:number){
  this.cartProducts[index].quantity--
  localStorage.setItem('products' , JSON.stringify(this.cartProducts))
  this.getCartTotal()
}
dedectChange(){
  localStorage.setItem('products' , JSON.stringify(this.cartProducts))
  this.getCartTotal()
}
deleteProduct(index:number){
  this.cartProducts.splice(index,1)
  localStorage.setItem('products' , JSON.stringify(this.cartProducts))
  this.getCartTotal()
}
}
