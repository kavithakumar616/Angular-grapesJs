import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {


  constructor() { }
  public userdata = [];
  delete(i) {
    this.userdata.splice(i, 1);
  }
}
