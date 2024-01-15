import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cases-detaille',
  templateUrl: './cases-detaille.component.html',
  styleUrls: ['./cases-detaille.component.css']
})
export class CasesDetailleComponent {
  id: any
  data: any=[]
constructor(private route:ActivatedRoute, private serviceproducts:ProductsService){
  this.id = this.route.snapshot.paramMap.get('id')
}
ngOnInit(): void {
  this.serviceproducts.getCasesAndCoversById(this.id).subscribe((helmet)=>{
    this.data =helmet
  })
}
}
