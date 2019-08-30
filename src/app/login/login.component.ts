import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  onSubmit(data:NgForm)
  {
    console.log(data.value);

    if(data.value.username=="admin" && data.value.password=="1234")
    {
      localStorage.setItem('loggedIn','true');
      console.log("True");
      this.router.navigateByUrl('welcome');
    }
    else{
      console.log("false");
    }
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
