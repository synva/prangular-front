import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
  }

  getData () {
    this.apiService.get('/public/getData', {input: 'testInput1'}).subscribe(response => {
      console.log('response:', JSON.stringify(response));
    });
  }

  postData () {
    this.apiService.post('/public/postData', {input: 'testInput2'}).subscribe(response => {
      console.log('response:', JSON.stringify(response));
    });
  }

  register () {
    this.userService.register();
  }

  login () {
    this.userService.login();
  }

  logout () {
    this.userService.logout();
  }
}
