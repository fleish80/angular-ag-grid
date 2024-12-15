// toggle-button-renderer.component.ts
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'df-toggle-button-renderer',
  template: `
    <button (click)="onToggle()">
      {{ isCollapsed ? 'Show More' : 'Show Less' }}
    </button>
  `,
})
export class ToggleButtonRendererComponent implements ICellRendererAngularComp {
  private params: any;
  isCollapsed: boolean = true;

  agInit(params: any): void {
    this.params = params;
    this.isCollapsed = this.params.data.isCollapsed;
  }

  refresh(params: any): boolean {
    this.params = params;
    return true;
  }

  onToggle(): void {
    this.isCollapsed = !this.isCollapsed;
    this.params.node.setDataValue('isCollapsed', this.isCollapsed);
    this.params.api.refreshCells({ rowNodes: [this.params.node], force: true });
  }
}
