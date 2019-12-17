import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listData = {};
  mod = true;

  constructor(public myService: Service1Service, public router: Router) {

  }
  public name = '';
  public email = '';
  public password = '';

  ngOnInit() {
    this.listData = this.myService.userdata;
  }

  edit(list) {
    console.log(list);
    this.router.navigate (['/'], {queryParams: {id: list.id}});
    return this.mod = true;
  }
  delete(i) {
    this.myService.delete(i);
    return this.mod = true;
  }


}
