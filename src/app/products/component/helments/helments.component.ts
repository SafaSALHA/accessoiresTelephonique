import { Component , OnInit ,ElementRef ,ApplicationRef} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-helments',
  templateUrl: './helments.component.html',
  styleUrls: ['./helments.component.css']
})
export class HelmentsComponent implements OnInit {
  helmet: any [] = []
  cartHelmets : any [] = []
  itemsPerPage = 6;
  currentPage = 1;
  constructor(private route: ActivatedRoute, private router: Router , private location: Location , private appRef: ApplicationRef , private el: ElementRef , private ProductsService:ProductsService) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentPage = +params['page'] || 1;
    });
    this.ProductsService.getHelmets().subscribe((helmet)=>{
      this.helmet =helmet
    })
  }

  get paginatedHelmet() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.helmet?.slice(startIndex, endIndex);
  }

  numberOfPages() {
    return Math.ceil(this.helmet.length / this.itemsPerPage);
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
      this.cartHelmets=JSON.parse(localStorage.getItem("products")!) || [] //bech njib data ili fast localstorege wnhotha fast cartHelmets
      let exist = this.cartHelmets.find(item => item.item.name == event.item.name)
      if(exist){
        alert("Cases or covers is already is your cart")
      }else{
        this.cartHelmets.push(event) // bech nhot il event fi cartHelmets
      localStorage.setItem('products' , JSON.stringify(this.cartHelmets)) // bech nhot data fi localstorge
      }

    }else{
      this.cartHelmets.push(event) // bech nhot il event fi cartHelmets
      localStorage.setItem('products' , JSON.stringify(this.cartHelmets)) // bech nhot data fi localstorge
    }

    }

}
