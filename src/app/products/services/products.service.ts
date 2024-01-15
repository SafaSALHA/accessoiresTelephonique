import { Injectable } from '@angular/core';
import { Products } from '../model/products.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiHel = "http://localhost:3001/api/helmet"
  apiPow = "http://localhost:3001/api/powerBank"
  apiSam = "http://localhost:3001/api/smartphoneHolder"
  apiEar = "http://localhost:3001/api/earphone"
  apiCas = "http://localhost:3001/api/casesAndCovers"
  helmets: Products[] = [];
  Power_Bank: Products[] = [];
  Smartphone_holder: Products[] = [];
  Earphone: Products[] = [];
  Cases_and_covers: Products[] = [];
  item : any
  constructor(private http:HttpClient) {
     this.getHelmets().subscribe(( helmets) => {
      this.helmets =  helmets;
    });
    this.getPowerBank().subscribe(( Power_Bank) => {
      this.Power_Bank =  Power_Bank;
    });
    this.getSmartphoneHolder().subscribe(( Smartphone_holder) => {
      this.Smartphone_holder =  Smartphone_holder;
    });
    this.getEarphone().subscribe(( Earphone) => {
      this.Earphone =  Earphone;
    });
    this.getCasesAndCovers().subscribe(( Cases_and_covers) => {
      this.Cases_and_covers =  Cases_and_covers;
    });
  }

  getHelmets() : Observable<Products[]> {
    return this.http.get<Products[]>(this.apiHel);
  }
  getHelmetsById(id:any) : Observable<Products[]> {
    return this.http.get<Products[]>('http://localhost:3001/api/helmet/'+id);
  }
  getPowerBank() : Observable<Products[]> {
    return this.http.get<Products[]>(this.apiPow);
  }
  getPowerBankById(id:any) : Observable<Products[]> {
    return this.http.get<Products[]>("http://localhost:3001/api/powerBank/"+id);
  }
  getSmartphoneHolder() : Observable<Products[]> {
    return this.http.get<Products[]>(this.apiSam);
  }
  getSmartphoneHolderByID(id:any) : Observable<Products[]> {
    return this.http.get<Products[]>('http://localhost:3001/api/smartphoneHolder/'+id);
  }
  getEarphone() : Observable<Products[]> {
    return this.http.get<Products[]>(this.apiEar);
  }
  geEarphoneById(id:any) : Observable<Products[]> {
    return this.http.get<Products[]>('http://localhost:3001/api/earphone/'+id);
  }
  getCasesAndCovers() : Observable<Products[]> {
    return this.http.get<Products[]>(this.apiCas);
  }
  getCasesAndCoversById(id:any) : Observable<Products[]> {
    return this.http.get<Products[]>('http://localhost:3001/api/casesAndCovers/'+id);
  }


}

