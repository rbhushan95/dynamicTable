import { Component, OnInit } from '@angular/core';
import { RentservicesmainService } from '../services/rentservicesmain.service';
import { } from '@angular/http';

@Component({
  selector: 'app-rentallocation',
  templateUrl: './rentallocation.component.html',
  styleUrls: ['./rentallocation.component.css']
})
export class RentallocationComponent implements OnInit {
  con: string;
  data: string[];
  coumns: string[];
  rows: any[];
  rowsData: any[];
  rentservicesmainService: RentservicesmainService;
  constructor(private rentser: RentservicesmainService) {
    this.rentservicesmainService = rentser;
  }

  ngOnInit() {
    this.data = this.rentservicesmainService.getCars();
    // Dynamic table
    this.coumns = ['sr', 'name', 'age'];

    this.rowsData = [
      { 'sr': '1', 'name': 'ravi', 'age': '40' },
      { 'sr': '2', 'name': 'Shekhar', 'age': '25' },
      { 'sr': '3', 'name': 'Ujjwal', 'age': '22' },
      { 'sr': '4', 'name': 'lebo', 'age': '20' }
    ];
    this.rows = [
      { 'data': ['1', 'ravi', '20'] },
      { 'data': ['2', 'lebo', '30'] },
      { 'data': ['3', 'shekhar', '25'] }
    ];
  }
  getRowData(datarow: any) {
    alert(datarow);
  }
}
