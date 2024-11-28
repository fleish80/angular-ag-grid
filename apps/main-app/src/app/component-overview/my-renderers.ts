import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';

export interface MyParams {
  name?: string;
}

@Component({
  selector: 'df-hello',
  template: `
      Hello {{name}}!
  `,
  standalone: true,
})
export class HelloComponent implements ICellRendererAngularComp {

  name?: string;
  refresh(params: ICellRendererParams & MyParams): boolean {
    return false;
  }
  agInit(params: ICellRendererParams & MyParams): void {
    this.name = params.name;
  }
}

@Component({
  selector: 'df-goodbye',
  template: `
      Goodbye {{name}}!
  `,
  standalone: true
})
export class GoodbyeComponent implements ICellRendererAngularComp {

  name?: string;
  refresh(params: ICellRendererParams & MyParams): boolean {
    return false;
  }
  agInit(params: ICellRendererParams & MyParams): void {
    this.name = params.name;
  }
}

export class GreetTS implements ICellRendererComp {
  eGui!: HTMLElement;
  init(params: ICellRendererParams & MyParams) {
    this.eGui = document.createElement('span');
    this.eGui.innerHTML = "GreetTS " + params.name;
  }
  getGui(): HTMLElement {
    return this.eGui;
  }
  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
