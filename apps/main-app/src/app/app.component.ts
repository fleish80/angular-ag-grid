import { Component } from '@angular/core';
import { CellRendererComponent } from './cell-renderer/cell-renderer.component';
import { ComponentOverviewComponent } from './component-overview/component-overview.component';
import { BasicDataGridComponent } from './basic-data/basic-data-grid.component';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { NestedComponent } from './nested/nested.component';
import { ToggleComponent } from './toggle-state/toggle.component';

@Component({
  imports: [
    BasicDataGridComponent,
    CellRendererComponent,
    ComponentOverviewComponent,
    NestedComponent,
    ToggleComponent,
    MatTab,
    MatTabGroup
  ],
  selector: 'df-root',
  template: `
    <mat-tab-group>
      <mat-tab label="Basic Data Grid">
        <df-basic-data-grid />
      </mat-tab>
      <mat-tab label="Cell Renderer">
        <df-cell-renderer />
      </mat-tab>
      <mat-tab label="Component Overview">
        <df-component-overview />
      </mat-tab>
      <mat-tab label="Nested">
        <df-nested />
      </mat-tab>
      <mat-tab label="Toggle">
        <df-toggle />
      </mat-tab>
    </mat-tab-group>
  `,
  styles: `
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: auto;
    }

    .mat-mdc-tab-group {
      height: 100%;
    }



  `

})
export class AppComponent {
}
