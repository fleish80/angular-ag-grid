import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, GridReadyEvent, ICellRendererParams, SideBarDef, StatusPanelDef } from 'ag-grid-community';
import { Observable } from 'rxjs';

import 'ag-grid-enterprise';
import { AgGridAngular } from 'ag-grid-angular';
import { AsyncPipe } from '@angular/common';
import { GoodbyeComponent, HelloComponent } from './my-renderers';
import { MyCustomComponent } from './my-renders.component';

@Component({
  selector: 'df-component-overview',
  template: `
    <ag-grid-angular
      class="ag-theme-alpine"
      [columnDefs]="columnDefs"
      [defaultColDef]="defaultColDef"
      [rowData]="rowData$ | async"
      [components]="components"
      [statusBar]="statusBar"
      [sideBar]="sideBar"
      (gridReady)="onGridReady($event)"
    ></ag-grid-angular>
  `,
  imports: [
    AgGridAngular,
    AsyncPipe
  ]
})
export class ComponentOverviewComponent {

  components = {
    hello: HelloComponent,
    goodbye: GoodbyeComponent
  };

  public statusBar: {
    statusPanels: StatusPanelDef[];
  } = {
    statusPanels: [
      {
        statusPanel: HelloComponent
      },
      {
        statusPanel: GoodbyeComponent
      },
      {
        statusPanel: 'agAggregationComponent',
        statusPanelParams: {
          aggFuncs: ['count', 'sum']
        }
      }
    ]
  };

  public sideBar: SideBarDef = {
    toolPanels: [
      'columns',
      'filters',
      {
        id: 'customComp',
        labelDefault: 'Custom Comp',
        labelKey: 'customComp',
        iconKey: 'custom-Comp',
        toolPanel: HelloComponent
      }
    ],
    defaultToolPanel: 'customComp'
  };

  public columnDefs: ColDef[] = [
    {
      field: 'athlete',
      cellRendererSelector: (params: ICellRendererParams) => {
        if (params.data.age < 24) {
          return {
            component: 'hello',
            params: {
              name: params.data.athlete
            }
          };
        }
        return {
          component: 'goodbye',
          params: {
            name: params.data.athlete
          }
        };
      }
    },
    {
      field: 'age',
      filter: 'agSetColumnFilter'
    },
    {
      field: 'country',
      filter: MyCustomComponent,
      filterParams: {
        name: 'Filter'
      }
    },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' }
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true
  };

  public rowData$!: Observable<any[]>;

  constructor(private http: HttpClient) {
  }

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/olympic-winners.json');
    params.api.autoSizeColumns(['age', 'country', 'year']);
  }
}
