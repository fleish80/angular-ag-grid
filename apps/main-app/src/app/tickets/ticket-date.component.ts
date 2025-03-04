import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Ticket } from './ticket.model';

@Component({
  selector: 'df-ticket-date',
  imports: [CommonModule],
  template: `{{ date }}`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketDateComponent implements ICellRendererAngularComp {

  date: string;

  agInit(params: ICellRendererParams<Ticket, number>): void {
    const value = params.value;
    this.date = new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(value!);
  }

  refresh(): boolean {
   return false
  }


}
