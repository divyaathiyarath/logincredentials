import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    status=localStorage.getItem('loggedIn');
    console.log(status);
    if(status==="null")
    {
      console.log(status);
      this.router.navigateByUrl('');
    }
  }
  onSubmit()
  {
    localStorage.removeItem('loggedIn');
    this.router.navigateByUrl('');
  }

}
