import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'df-under',
  template: `
    <b>Under</b> {{value}}
  `,
  styles: [
    `b {
      color: red
    }`
  ],
  standalone: true,
})
export class UnderComponent implements ICellRendererAngularComp {

  value: any;

  agInit(params: ICellRendererParams): void {
    this.value = params.value
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
