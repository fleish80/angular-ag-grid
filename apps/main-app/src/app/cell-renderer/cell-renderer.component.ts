import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ColDef, GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { AsyncPipe } from '@angular/common';
import { MyCellComponent } from './my-cell.component';
import { UnderComponent } from './under.component';
import { OverComponent } from './over.component';

@Component({
    selector: 'df-cell-renderer',
    imports: [
        AgGridAngular,
        AsyncPipe
    ],
    template: `
    <ag-grid-angular
      class="ag-grid ag-theme-material"
      [columnDefs]="columnDefs"
      [defaultColDef]="defaultColDef"
      [rowData]="rowData$ | async"
      (gridReady)="onGridReady($event)"
    ></ag-grid-angular>

  `,
    styles: `

    :host {
      display: flex;
      padding: 50px;
      overflow: auto;
      height: 100%;
      width: 100%;
    }

    .ag-grid {
      width: 100%;
      height: 100%;
      border: 1px solid black;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellRendererComponent {

  public columnDefs: ColDef[] = [
    {
      field: 'athlete',
      cellRenderer: MyCellComponent,
      cellRendererParams: {
        buttonText: 'Name'
      }
    },
    {
      field: 'age',
      cellRendererSelector: (params: ICellRendererParams) => {
        if (params.value < 25) {
          return { component: UnderComponent, params: {} };
        }
        return { component: OverComponent };
      }
    },
    {
      field: 'country',
      cellRenderer: (params: ICellRendererParams) => {
        return `<b> !! ${ params.value } </b>`;
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
  }

}
