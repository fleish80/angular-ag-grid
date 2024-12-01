import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { GroupCellRendererComponent } from './group-cell-renderer.component';

@Component({
  selector: 'df-nested',
  imports: [AgGridAngular],
  template: `
    <ag-grid-angular
      class="ag-theme-alpine"
      [rowData]="rowData"
      [columnDefs]="columnDefs"
    [defaultColDef]="defaultColDef"
    [detailCellRenderer]="detailCellRenderer"
    [masterDetail]="true"
    [components]="frameworkComponents">
    </ag-grid-angular>
  `,
  styles: [`
    button {
      margin-bottom: 10px;
    }
  `]
})
export class NestedComponent {

  detailCellRenderer = 'detailCellRenderer';
  frameworkComponents = {
    detailCellRenderer: GroupCellRendererComponent,
  };

  rowData = [
    { country: 'USA', state: 'California', city: 'Los Angeles', population: 4000000 },
    { country: 'USA', state: 'California', city: 'San Francisco', population: 870000 },
    { country: 'USA', state: 'Texas', city: 'Houston', population: 2300000 },
    { country: 'Canada', state: 'Ontario', city: 'Toronto', population: 2800000 },
    { country: 'Canada', state: 'British Columbia', city: 'Vancouver', population: 630000 },
  ];

  columnDefs: ColDef[] = [
    { field: 'country'},
    { field: 'state', cellRenderer: 'agGroupCellRenderer' },
    { field: 'city' },
    { field: 'population'  },
  ];

  defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    filter: true,
    resizable: true,
  };
}
