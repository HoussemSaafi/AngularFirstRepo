import {Component, Input, OnInit} from '@angular/core';
import {ItemComponent} from "../item/item.component";
import {ListeComponent} from "../liste/liste.component";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
@Input('item') item:ItemComponent;
  constructor() {
    console.log("Im detail: ", ListeComponent.selectedItem);
    this.item={uid:0,uName:"username",uJob:"aJob"};
  }

  ngOnInit(): void {
    // setInterval(()=>{console.log("Im detail: ", ListeComponent.selectedItem)},5000);
    // this.item=ListeComponent.selectedItem;
  }

}
