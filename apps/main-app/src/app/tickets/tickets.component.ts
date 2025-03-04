import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { Ticket } from './ticket.model';
import { TicketReferenceComponent } from './ticket-reference.component';
import { TicketDateComponent } from './ticket-date.component';

@Component({
  selector: 'df-tickets',
  imports: [
    AgGridAngular
  ],
  template: `
    <ag-grid-angular [rowData]="rowData" [columnDefs]="colDefs" [defaultColDef]="defaultColDef" />
  `,
  styles: `

    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
      height: 100%;
    }

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketsComponent {

  rowData: Ticket[] = [
    {
      'originTicketId': '60609',
      'subject': 'Bernard',
      'timeCreation': 1141106159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '1',
      'subject': 'Anabelle',
      'timeCreation': 1241106159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '20',
      'subject': 'Jordyn',
      'timeCreation': 1341106159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '21',
      'subject': 'Brittany',
      'timeCreation': 1741106159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '23',
      'subject': 'Rebecca',
      'timeCreation': 1741106159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '24',
      'subject': 'Muhammad',
      'timeCreation': 1731106159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '64752',
      'subject': 'Filomena',
      'timeCreation': 1441306159309,
      'timeExpiration': 1541106159309
    },
    {
      'originTicketId': '25',
      'subject': 'Hulda',
      'timeCreation': 1741106159309,
      'timeExpiration': 1741106156309
    },
    {
      'originTicketId': '26',
      'subject': 'Laurence',
      'timeCreation': 1741106159209,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '91831',
      'subject': 'America',
      'timeCreation': 1541106159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '28',
      'subject': 'Courtney',
      'timeCreation': 1741106159309,
      'timeExpiration': 1741106134309
    },
    {
      'originTicketId': '2',
      'subject': 'Yasmin',
      'timeCreation': 1741145159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '34392',
      'subject': 'Jevon',
      'timeCreation': 1741106159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '29',
      'subject': 'Declan',
      'timeCreation': 1641106159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '79087',
      'subject': 'Gunner',
      'timeCreation': 1741106159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '3',
      'subject': 'Shannon',
      'timeCreation': 1741106159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '14301',
      'subject': 'Federico',
      'timeCreation': 1841106159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '4',
      'subject': 'Leanna',
      'timeCreation': 1741106159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '30',
      'subject': 'Reagan',
      'timeCreation': 1941106159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '5',
      'subject': 'Zoey',
      'timeCreation': 1741106159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '6',
      'subject': 'Lura',
      'timeCreation': 1741106159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '7',
      'subject': 'Green',
      'timeCreation': 1741106159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '85635',
      'subject': 'Celine',
      'timeCreation': 1741106159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '71320',
      'subject': 'Sophie',
      'timeCreation': 1741106159309,
      'timeExpiration': 1741106159309
    },
    {
      'originTicketId': '8',
      'subject': 'Abdul',
      'timeCreation': 1741106159310,
      'timeExpiration': 1741106159310
    },
    {
      'originTicketId': '9',
      'subject': 'Micah',
      'timeCreation': 1741106159310,
      'timeExpiration': 1741106159310
    },
    {
      'originTicketId': '10',
      'subject': 'Samson',
      'timeCreation': 1741106159310,
      'timeExpiration': 1741106159310
    },
    {
      'originTicketId': '11',
      'subject': 'Elenora',
      'timeCreation': 1741106159310,
      'timeExpiration': 1741106159310
    },
    {
      'originTicketId': '11',
      'subject': 'Adolfo',
      'timeCreation': 1741106159310,
      'timeExpiration': 1741106159310
    },
    {
      'originTicketId': '12',
      'subject': 'Felicia',
      'timeCreation': 1741106159310,
      'timeExpiration': 1741106159310
    },
    {
      'originTicketId': '45185',
      'subject': 'Emmitt',
      'timeCreation': 1741106159310,
      'timeExpiration': 1741106159310
    },
    {
      'originTicketId': '15',
      'subject': 'Gustave',
      'timeCreation': 1741106159310,
      'timeExpiration': 1741106159310
    },
    {
      'originTicketId': '16',
      'subject': 'Bret',
      'timeCreation': 1741106159310,
      'timeExpiration': 1741106159310
    },
    {
      'originTicketId': '17',
      'subject': 'Franco',
      'timeCreation': 1741106159310,
      'timeExpiration': 1741106159310
    },
    {
      'originTicketId': '57194',
      'subject': 'Jett',
      'timeCreation': 1741106159310,
      'timeExpiration': 1741106159310
    },
    {
      'originTicketId': '2275',
      'subject': 'Brannon',
      'timeCreation': 1741106159310,
      'timeExpiration': 1741106159310
    },
    {
      'originTicketId': '80217',
      'subject': 'Monica',
      'timeCreation': 1741106159310,
      'timeExpiration': 1741106159310
    }
  ];

  colDefs: ColDef[] = [
    {
      headerName: 'Certification ticket', field: 'originTicketId', cellRenderer: TicketReferenceComponent,
      comparator: (valueA, valueB) => parseInt(valueA) - parseInt(valueB)
    },
    {
      headerName: 'Time Creation', field: 'timeCreation', cellRenderer: TicketDateComponent
    },
    {
      headerName: 'Time Expiration', field: 'timeExpiration', cellRenderer: TicketDateComponent
    }
  ];

  defaultColDef: ColDef = {
    flex: 1
  };


}
