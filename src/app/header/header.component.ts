import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

 async logout() {
    await this.authService.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  hideButton(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return !!user;
  }
}
