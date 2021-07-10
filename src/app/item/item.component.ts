import {Component, Input} from '@angular/core';
import {ListeComponent} from "../liste/liste.component";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() uid: number;
  @Input() uName: string;
  @Input() uJob: string;

  constructor() {
this.uid=1;
this.uName="username"
this.uJob="user job"
  }


}
