import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder } from "@angular/forms";
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private myServ: ServiceService
  ) {
    this.loginForm = this.fb.group({
      "Company_Name": [''],
      "UserName": [''],
      "email": [''],
      "password": [''],
      "CFM_password": [""]
    });
  }

  ngOnInit() {
  }

  handealClick() {
    console.log(this.loginForm.value);
    this.myServ.creatUser(this.loginForm.value);
  }

}
