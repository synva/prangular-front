import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';

import { LoadingComponent } from './loading/loading.component';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { MyComponent } from './main/my/my.component';

import { ErrorComponent } from './error/error.component';

// services
import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoadingComponent,
    HomeComponent,
    MyComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
