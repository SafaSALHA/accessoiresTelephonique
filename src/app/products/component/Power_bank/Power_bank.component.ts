import { Component , OnInit ,ElementRef ,ApplicationRef} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-Power_bank',
  templateUrl: './Power_bank.component.html',
  styleUrls: ['./Power_bank.component.css']
})
export class PowerBankComponent {
  Power_bank : any [] = []
  cartPower : any [] = []
  itemsPerPage = 6;
  currentPage = 1;
  constructor(private route: ActivatedRoute, private router: Router , private location: Location , private appRef: ApplicationRef , private el: ElementRef,private ProductsService:ProductsService) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentPage = +params['page'] || 1;
    });
    this.ProductsService.getPowerBank().subscribe((Power_bank)=>{
      this.Power_bank =Power_bank
    })
  }

  get paginatedPower_bank () {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.Power_bank .slice(startIndex, endIndex);
  }

  numberOfPages() {
    return Math.ceil(this.Power_bank .length / this.itemsPerPage);
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
      this.cartPower=JSON.parse(localStorage.getItem("products")!) || [] //bech njib data ili fast localstorege wnhotha fast cartPower
      let exist = this.cartPower.find(item => item.item.name == event.item.name)
      if(exist){
        alert("Cases or covers is already is your cart")
      }else{
        this.cartPower.push(event) // bech nhot il event fi cartPower
      localStorage.setItem('products' , JSON.stringify(this.cartPower)) // bech nhot data fi localstorge
      }

    }else{
      this.cartPower.push(event) // bech nhot il event fi cartPower
      localStorage.setItem('products' , JSON.stringify(this.cartPower)) // bech nhot data fi localstorge
    }

    }
}
