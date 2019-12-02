import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import {User} from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'note-app';
  user: User;
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    });
    this.isLoggedIn();
  }

  isLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.router.navigate(['/notes']);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
