import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-earphone-detaille',
  templateUrl: './earphone-detaille.component.html',
  styleUrls: ['./earphone-detaille.component.css']
})
export class EarphoneDetailleComponent implements OnInit{
  id: any
  data: any=[]
constructor(private route:ActivatedRoute, private serviceproducts:ProductsService){
  this.id = this.route.snapshot.paramMap.get('id')
}
ngOnInit(): void {
  this.serviceproducts.geEarphoneById(this.id).subscribe((helmet)=>{
    this.data =helmet
  })
}
}
