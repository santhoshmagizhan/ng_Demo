import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title= 'Rdemo';
  selectedValue1: string="";
  selectedValue2: string="";
  selectedValue3: string="";

  selection1='uncheckmark';
  selection2='uncheckmark';
  selection3='uncheckmark';

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  firstselect(){
    this.selection1='checkmark';
  }

  secondselect(){
    this.selection2='checkmark';
  }
  thirdselect(){
    this.selection3='checkmark';
  }

}
