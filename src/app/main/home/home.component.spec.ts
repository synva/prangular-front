import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
import { HeroService } from '../../services/hero.service';
import { MockApiService } from '../../services/mock.api.service';
import { MockUserService } from '../../services/mock.user.service';
import { MockHeroService } from '../../services/mock.hero.service';

// import { ActivatedRoute, Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockApiService: MockApiService;
  let mockUserService: MockUserService;
  let mockHeroService: MockHeroService;

  beforeEach(async(() => {
    mockApiService = new MockApiService();
    mockUserService = new MockUserService();
    mockHeroService = new MockHeroService();

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        {provide: ApiService, useValue: mockApiService},
        {provide: UserService, useValue: mockUserService},
        {provide: HeroService, useValue: mockHeroService},
        // UserService,
        // HeroService,
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
