import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ApiService } from './api.service';

@Injectable()
export class UserService {
  private user: User;

  constructor(private apiService: ApiService) {
  }

  register() {
    this.apiService.post('/register', {user: {_id: 'rrrr', password: 'rrrrrr'}}).subscribe((response: any) => {
      console.log('registered:', JSON.stringify(response));
      this.apiService.post('/authenticate', {username: response.user._id, password: response.user.password}).subscribe(response => {
        console.log('authenticated:', JSON.stringify(response));
        this.login();
      });
    });
  }
  login() {
    this.apiService.post('/authenticate', {username: 'rrrr', password: 'rrrrrr'}).subscribe(response => {
    console.log('logined:', JSON.stringify(response));
  });
  }
  logout() {
    this.apiService.get('/logout').subscribe(response => {
      console.log('logouted:', JSON.stringify(response));
    });
  }
}
