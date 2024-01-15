import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-smartphone-holder',
  templateUrl: './smartphone-holder.component.html',
  styleUrls: ['./smartphone-holder.component.css']
})
export class SmartphoneHolderComponent {

  @Input()
  src : String = ""
  @Input()
  name : String = ""
  @Input()
  prix : number = 0
  @Input()
  id : number = 0
 @Input()
 data : any[] = []
 @Output() item = new EventEmitter
 addButton : boolean = false
 amonet:number=0

  add(){
  this.item.emit({item:this.data, quantity:this.amonet})
  }
}
