import {Component, Input, OnInit} from '@angular/core';
import {ItemComponent} from "../item/item.component";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
    id:number=0;
  itemss: Array<ItemComponent>=[
    {uid:1, uName:"Houssem", uJob:"Software Engineer"},
    {uid:2, uName:"Fakh", uJob:"Falleh"},
    {uid:3 ,uName:"HammaHamma", uJob:"aak3ouk"}
  ];

  public static selectedItem:ItemComponent;

showDetails(uid:number){
  console.log(this.itemss[uid-1]);
  ListeComponent.selectedItem=this.itemss[uid-1];
  this.id=uid;
}
  constructor() {

  }

}
