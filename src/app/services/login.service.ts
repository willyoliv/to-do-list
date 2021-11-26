import { User } from './../models/user.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticated: boolean = false;
  showMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  loginUser(email: string, password: string) {
    this.authenticated = (email === 'admin@admin.com' && password === '123456');
    this.showMenu.emit(this.authenticated);

    if(this.authenticated) {
      let user = new User();
      user.email = email;
      user.password = password;
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['']);
    }
  }

  logoutUser() {
    this.authenticated = false;
    this.showMenu.emit(this.authenticated);
    this.router.navigate(['login']);
    localStorage.removeItem('user');
  }
  
  userIsLoggedIn(): boolean {
    let object = localStorage.getItem('user');
    if (object) {
      let user = JSON.parse(object);
      this.authenticated = (user.email === 'admin@admin.com' && user.password === '123456');
      this.showMenu.emit(this.authenticated);
    }
    return this.authenticated;
  }
}
