import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';


@Component({
  standalone: true,
  template: `<button (click)="buttonClicked()">+</button>{{value}}`,
})
export class CustomButtonComponent implements ICellRendererAngularComp {

  value: string;

  agInit(params: ICellRendererParams): void {
    console.log(params);
    this.value = params.value;
  }
  refresh(params: ICellRendererParams) {
    return true;
  }

  buttonClicked() {
    alert("clicked");
  }
}
