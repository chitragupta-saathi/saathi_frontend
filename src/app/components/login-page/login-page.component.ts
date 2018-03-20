import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../providers/http';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  // styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private http: HttpService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      'userName': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    if(localStorage.getItem('isLogedIn') === 'true') {
      this.router.navigate(['dashboard']);
    }
  }
  login(){
    console.log(this.loginForm);
    console.log(this.loginForm.valid);
    localStorage.setItem('isLogedIn', 'true');
    this.router.navigate(['/dashboard']);
  }
}
