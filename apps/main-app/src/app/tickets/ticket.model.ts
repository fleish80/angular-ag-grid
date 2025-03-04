export interface Ticket {
  originTicketId: `${number}`;
  subject: string;
  timeCreation: number;
  timeExpiration: number;
}
