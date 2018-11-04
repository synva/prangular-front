import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'axcel-column',
  templateUrl: './axcel-column.component.html',
  styleUrls: ['./axcel-column.component.scss']
})
export class AxcelColumnComponent implements OnInit {
  public controler = null;
  public index: number = null;
  public dataSources = null;
  @Input() bind: string;

  constructor() { }

  ngOnInit() {
  }

}
