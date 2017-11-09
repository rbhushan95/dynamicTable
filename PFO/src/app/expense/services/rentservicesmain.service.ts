import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

@Injectable()
export class RentservicesmainService {

  constructor() { }

  cars = ['Tata', 'Maruti', 'Cervolate', 'Bajaj', 'Hundai'];
  @Injectable()
  getCars() {
    return this.cars;
  }
}
