import { Component , OnInit ,ElementRef ,ApplicationRef} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-smartphones-holders',
  templateUrl: './smartphones-holders.component.html',
  styleUrls: ['./smartphones-holders.component.css']
})
export class SmartphonesHoldersComponent {

  Smartphone_holder: any [] = []
  cartSmartphone_holders : any [] = []
  itemsPerPage = 6;
  currentPage = 1;
  constructor(private route: ActivatedRoute, private router: Router , private location: Location , private appRef: ApplicationRef , private el: ElementRef , private ProductsService:ProductsService) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentPage = +params['page'] || 1;
    });
    this.ProductsService.getSmartphoneHolder().subscribe((Smartphone_holder)=>{
      this.Smartphone_holder =Smartphone_holder
    })
  }

  get paginatedSmartphone_holder() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.Smartphone_holder?.slice(startIndex, endIndex);
  }

  numberOfPages() {
    return Math.ceil(this.Smartphone_holder.length / this.itemsPerPage);
  }

  setPage(pageNumber: number) {
    this.currentPage = pageNumber;


    const queryParams = { page: pageNumber };

    // Utilisez location.go pour naviguer sans recharger la page
    this.location.go(this.router.createUrlTree([], { relativeTo: this.route, queryParams }).toString());

    // Forcer le rafraîchissement manuel de la zone
    this.appRef.tick();
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


  createNumberArray(): number[] {
    return Array.from({ length: this.numberOfPages() }, (_, index) => index + 1);
  }
  isPageActive(pageNumber: number): boolean {
    return this.currentPage === pageNumber;
  }
  addToCart(event:any){
    if("products" in localStorage){
      this.cartSmartphone_holders=JSON.parse(localStorage.getItem("products")!) || [] //bech njib data ili fast localstorege wnhotha fast cartSmartphone_holders
      let exist = this.cartSmartphone_holders.find(item => item.item.name == event.item.name)
      if(exist){
        alert("Cases or covers is already is your cart")
      }else{
        this.cartSmartphone_holders.push(event) // bech nhot il event fi cartSmartphone_holders
      localStorage.setItem('products' , JSON.stringify(this.cartSmartphone_holders)) // bech nhot data fi localstorge
      }

    }else{
      this.cartSmartphone_holders.push(event) // bech nhot il event fi cartSmartphone_holders
      localStorage.setItem('products' , JSON.stringify(this.cartSmartphone_holders)) // bech nhot data fi localstorge
    }

    }
}
