import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from "rxjs/Observable";

@Injectable()
export class HeroService {

  constructor(private apiService: ApiService) {
  }

  getHero(): Observable<any> {
    return this.apiService.get('/public/getData');
  }

}
