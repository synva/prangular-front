import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { MessageService } from '../../services/message.service';
import { UserService } from '../../services/user.service';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hero$: Observable<any>;

  constructor(
    private router: Router,
    private apiService: ApiService,
    public messageService: MessageService,
    public userService: UserService,
    private heroService: HeroService
  ) {
  }

  ngOnInit() {
    // $('.test').text('jquery test');
  }

  getData() {
    this.hero$ = this.heroService.getHero();
  }

  postData() {
    this.apiService.post('/public/postData', { input: 'testInput2' }).subscribe(response => {
      console.log('response:', JSON.stringify(response));
    });
  }

  logout() {
    this.userService.logout(() => {
      this.router.navigate(['/login']);
    });
  }
}
