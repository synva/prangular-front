import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingComponent } from './loading/loading.component';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { MyComponent } from './main/my/my.component';

import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: 'loading',
    component: LoadingComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'my',
        component: MyComponent
      }
    ]
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
