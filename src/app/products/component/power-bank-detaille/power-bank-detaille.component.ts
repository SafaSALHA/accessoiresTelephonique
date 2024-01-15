import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-power-bank-detaille',
  templateUrl: './power-bank-detaille.component.html',
  styleUrls: ['./power-bank-detaille.component.css']
})
export class PowerBankDetailleComponent {
  id: any
  data: any=[]
constructor(private route:ActivatedRoute, private serviceproducts:ProductsService){
  this.id = this.route.snapshot.paramMap.get('id')
}
ngOnInit(): void {
  this.serviceproducts.getPowerBankById(this.id).subscribe((helmet)=>{
    this.data =helmet
  })
}
}
