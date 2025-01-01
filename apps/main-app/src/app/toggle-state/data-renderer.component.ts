// data-renderer.component.ts
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'df-data-renderer',
    template: `
    @if (isCollapsed) {
    <div>
      {{ params.data.collapsedData }}
    </div>
    } @else {
      {{ params.data.expandedData }}
    }
  `,
})
export class DataRendererComponent implements ICellRendererAngularComp {
  public params: any;
  isCollapsed = true;

  agInit(params: any): void {
    console.log(params);
    this.params = params;
    this.isCollapsed = this.params.data.isCollapsed;
  }

  refresh(params: any): boolean {
    this.params = params;
    this.isCollapsed = this.params.data.isCollapsed;
    return true;
  }
}
