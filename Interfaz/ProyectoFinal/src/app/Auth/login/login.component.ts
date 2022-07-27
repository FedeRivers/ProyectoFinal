import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
/**
 * @title Input with error messages
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  hide = true;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
  constructor() { }
  ngOnInit(): void {
  }

}






