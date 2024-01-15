import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-helment-detaille',
  templateUrl: './helment-detaille.component.html',
  styleUrls: ['./helment-detaille.component.css']
})
export class HelmentDetailleComponent implements OnInit {
  id: any
  data: any=[]
constructor(private route:ActivatedRoute, private serviceproducts:ProductsService){
  this.id = this.route.snapshot.paramMap.get('id')
}
ngOnInit(): void {
  this.serviceproducts.getHelmetsById(this.id).subscribe((helmet)=>{
    this.data =helmet
  })
}


}
