import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'df-group-cell-renderer',
  template: `
    <div class="detail-container">
      Some content
    </div>
  `,
  styles: [`
    .custom-group-cell {
      display: flex;
      align-items: center;
    }
    .expand-icon {
      cursor: pointer;
      margin-right: 5px;
    }
    .group-value {
      font-weight: bold;
    }
    .row-count {
      margin-left: 5px;
      font-size: 0.9em;
      color: gray;
    }
  `]
})
export class GroupCellRendererComponent implements ICellRendererAngularComp {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    this.params = params;
    return true;
  }

  onExpandToggle(event: MouseEvent): void {
    this.params.node.setExpanded(!this.params.node.expanded);
    event.stopPropagation();
  }
}
