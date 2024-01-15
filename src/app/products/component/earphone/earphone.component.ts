import { Component , OnInit ,ElementRef ,ApplicationRef} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-earphone',
  templateUrl: './earphone.component.html',
  styleUrls: ['./earphone.component.css']
})
export class EarphoneComponent {

  Earphone :any []= []
  cartEarphone : any [] =[]

  itemsPerPage = 6;
  currentPage = 1;
  constructor(private route: ActivatedRoute, private router: Router , private location: Location , private appRef: ApplicationRef , private el: ElementRef , private ProductsService:ProductsService) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentPage = +params['page'] || 1;
    });
    this.ProductsService.getEarphone().subscribe((Earphone)=>{
      this.Earphone =Earphone
    })
  }

  get paginatedEarphone() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.Earphone.slice(startIndex, endIndex);
  }

  numberOfPages() {
    return Math.ceil(this.Earphone.length / this.itemsPerPage);
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
      this.cartEarphone=JSON.parse(localStorage.getItem("products")!) || [] //bech njib data ili fast localstorege wnhotha fast cartEarphone
      let exist = this.cartEarphone.find(item => item.item.name == event.item.name)
      if(exist){
        alert("Cases or covers is already is your cart")
      }else{
        this.cartEarphone.push(event) // bech nhot il event fi cartEarphone
      localStorage.setItem('products' , JSON.stringify(this.cartEarphone)) // bech nhot data fi localstorge
      }

    }else{
      this.cartEarphone.push(event) // bech nhot il event fi cartEarphone
      localStorage.setItem('products' , JSON.stringify(this.cartEarphone)) // bech nhot data fi localstorge
    }

    }
}
