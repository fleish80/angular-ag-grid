import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { ToggleButtonRendererComponent } from './toggle-button-renderer.component';
import { DataRendererComponent } from './data-renderer.component';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'df-toggle',
  imports: [AgGridAngular],
  template: `
    <ag-grid-angular
      class="ag-theme-alpine"
      [rowData]="rowData"
      [columnDefs]="columnDefs"
      [components]="frameworkComponents"
    ></ag-grid-angular>
  `,
})
export class ToggleComponent {
  public columnDefs: ColDef[] = [
    {
      headerName: 'Toggle',
      field: 'isCollapsed',
      cellRenderer: 'toggleButtonRenderer',
      width: 120,
      // suppressMenu: true,
      // suppressSorting: true,
    },
    {
      headerName: 'Data',
      field: 'data',
      cellRenderer: 'dataRenderer',
    },
    // ... other column definitions
  ];

  public frameworkComponents = {
    toggleButtonRenderer: ToggleButtonRendererComponent,
    dataRenderer: DataRendererComponent,
  };

  public rowData = [
    {
      isCollapsed: true,
      collapsedData: 'Summary Info',
      expandedData: 'Detailed Information',
      // ... other data fields
    },
    {
      isCollapsed: false,
      collapsedData: 'Summary Info',
      expandedData: 'Detailed Information',
      // ... other data fields
    },
    // ... other rows
  ];
}
