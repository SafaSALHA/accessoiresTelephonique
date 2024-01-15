import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  categories =  [
    {name:'Helmet', url: "/products#Helmet"},
    {name:'Earphone', url: "/products#Earphone"},
    {name:'Cases and covers',url: "/products#Cases_and_covers"},
    {name:'Smartphone holder', url: "/products#Smartphone_holder"},
    {name:'Power bank', url: "/products#Power_bank"}];


}
