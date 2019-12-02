import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  user: User;
  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.user = user;
    });
  }
  async googleLogin() {
    await this.authService.googleSignIn();
    if (this.user) {
      this.router.navigate(['/notes']);
    }
  }

}
