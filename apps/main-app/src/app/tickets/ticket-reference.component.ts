import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Ticket } from './ticket.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'df-ticket-reference',
  imports: [
    RouterLink
  ],
  template: `<a [routerLink]="['']">{{originTicketId}} - {{subject}}</a>`,
  styles: ``
})
export class TicketReferenceComponent implements ICellRendererAngularComp {

  originTicketId: string | undefined;
  subject: string | undefined;

  agInit(params: ICellRendererParams<Ticket>): void {
    const ticket = params.data;
    this.originTicketId = ticket?.originTicketId;
    this.subject = ticket?.subject;
  }

  refresh(): boolean {
    return false;
  }


}
