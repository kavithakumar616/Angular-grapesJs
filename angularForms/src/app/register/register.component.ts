import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  id: '';
  userdetails: any = {
    name: '',
    id: '',
    email: '',
    password: ''
  };

  constructor(public myService: Service1Service, public router: ActivatedRoute) {}
  public userdata = [];



  ngOnInit() {
    this.router.queryParams
    .subscribe(params => {
      this.id = params.id;
      this.myService.userdata.forEach(value => {
        if (this.id === value.id) {
          this.userdetails = value;
        }
      })


    })
  }
  register(value) {
    if (value.id === this.id) {
      this.userdetails = value;
    } else {
      this.myService.userdata.push(value);
    }

    console.log(this.userdata);

  }

}
