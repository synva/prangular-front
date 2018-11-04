import { Component, OnInit } from '@angular/core';

import { AxcelData } from '../../models/axcel.model';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {
  datas: AxcelData[];

  constructor() {
    this.datas = [];
    this.datas.push(new AxcelData({
      id: 'a',
      name: 'James',
      age: 28,
      sex: true,
      monthly: 3200,
      bonus: 5000,
      bank: 21000
    }));
    this.datas.push(new AxcelData({
      id: 'b',
      name: 'Marry',
      age: 24,
      sex: false,
      monthly: 5000,
      bonus: 12000,
      bank: 25000
    }));
    this.datas.push(new AxcelData({
      id: 'c',
      name: 'Lary',
      age: 29,
      sex: false,
      monthly: 3000,
      bonus: 5200,
      bank: 4000
    }));
    this.datas.push(new AxcelData({
      id: 'd',
      name: 'Tom',
      age: 32,
      sex: true,
      monthly: 5300,
      bonus: 12500,
      bank: 187000
    }));
  }

  ngOnInit() {
  }

}
