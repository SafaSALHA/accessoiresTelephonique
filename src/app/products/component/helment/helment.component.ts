import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-helment',
  templateUrl: './helment.component.html',
  styleUrls: ['./helment.component.css']
})
export class HelmentComponent {
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
