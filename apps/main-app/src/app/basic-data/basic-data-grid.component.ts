import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CustomButtonComponent } from './custom-button.component';
import { ColDef, GridOptions, RowClassRules } from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
    imports: [
        AgGridAngular
    ],
    selector: 'df-basic-data-grid',
    template: `
    <ag-grid-angular class="ag-theme-alpine" [rowData]="rowData" [columnDefs]="colDefs"
                     [defaultColDef]="defaultColDef" [gridOptions]="gridOptions"
                     [pagination]="true" [paginationPageSize]="10" [paginationPageSizeSelector]="[10, 20]"
                     [rowClassRules]="rowClassRules" rowGroupPanelShow="always" />
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: `

      :host {
        display: flex;
        flex-direction: column;
        overflow: auto;
        height: 100%;
      }

      ::ng-deep {
        .green-cell {
          background-color: rgb(100, 150, 100)
        }

        .red-row {
          background-color: rgb(150, 100, 100);
        }
      }
    `
})
export class BasicDataGridComponent {

  defaultColDef: ColDef = {
    flex: 1,
    filter: true,
    editable: true
  };

  rowClassRules: RowClassRules<any> = {
    'red-row': p => p.data.make === 'Toyota'
  }

  rowData = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false }
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    {
      field: 'make',
      cellRenderer: CustomButtonComponent,
      flex: 2,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: { values: ['Tesla', 'Ford', 'Toyota'] },
    },
    {
      field: 'model',
      floatingFilter: true,
    },
    {
      headerName: 'Make & Model', valueGetter: p => p.data.make + ' ' + p.data.model
    },
    {
      field: 'price',
      valueFormatter: p => `€ ${ p.value.toLocaleString() }`,
      cellClassRules: {
        'green-cell': p => +p.value > 30000
      }


    },
    {
      field: 'electric'
    },
  ];

  gridOptions: GridOptions = {
    rowSelection: {
      mode: 'multiRow', // or 'singleRow' for single row selection
      checkboxes: true, // enables selection checkboxes in rows
      headerCheckbox: false, // enables the 'select all' checkbox in the header
      // Additional configuration options as needed
    },
    // Other grid options...
  };
}

