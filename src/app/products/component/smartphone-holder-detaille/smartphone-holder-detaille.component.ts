import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-smartphone-holder-detaille',
  templateUrl: './smartphone-holder-detaille.component.html',
  styleUrls: ['./smartphone-holder-detaille.component.css']
})
export class SmartphoneHolderDetailleComponent {
  id: any
  data: any=[]
constructor(private route:ActivatedRoute, private serviceproducts:ProductsService){
  this.id = this.route.snapshot.paramMap.get('id')
}
ngOnInit(): void {
  this.serviceproducts.getSmartphoneHolderByID(this.id).subscribe((helmet)=>{
    this.data =helmet
  })
}
}
