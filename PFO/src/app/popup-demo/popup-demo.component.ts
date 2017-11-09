import { Component, OnInit, Input } from '@angular/core';
// import { ExpensesHomeComponent } from "../expense/expenses-home";

@Component({
  selector: 'app-popup-demo',
  templateUrl: './popup-demo.component.html',
  styleUrls: ['./popup-demo.component.css']
  
})
export class PopupDemoComponent implements OnInit {

  @Input('master') 
  masterName: string;
  
  @Input() 
  public name: string ='Ravi Bhushan kumar 007';
  constructor() { }

  ngOnInit() {
  }


}
