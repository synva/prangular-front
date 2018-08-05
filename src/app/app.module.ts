import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import * as $ from 'jquery';

// routing
import { AppRoutingModule } from './app-routing.module';

// material design
import { MaterialModule } from './material.module';

// components
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { MyComponent } from './main/my/my.component';

import { ErrorComponent } from './error/error.component';

// services
import { ApiService } from './services/api.service';
import { MessageService } from './services/message.service';
import { UserService } from './services/user.service';
import { HeroService } from './services/hero.service';

// utils
import { Interceptor } from './utils/interceptor';
import { AuthGuard } from './utils/authGuard';

// APP initialize
export function init_app(messageService: MessageService) {
  return async () => {
    await messageService.getMessage();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HomeComponent,
    MyComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    AuthGuard,
    ApiService,
    MessageService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [MessageService],
      multi: true
    },
    UserService,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
