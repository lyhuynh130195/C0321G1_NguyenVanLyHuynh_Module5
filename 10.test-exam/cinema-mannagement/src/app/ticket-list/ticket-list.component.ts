import {Component, OnInit} from '@angular/core';
import {TicketService} from '../ticket.service';
import {Ticket} from '../ticket';
import {TicketDeleteComponent} from '../ticket-delete/ticket-delete.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[];
  p: number;

  constructor(private ticketService: TicketService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.ticketService.getAllTicket().subscribe(value => {
      this.tickets = value;
    });
  }

  openDialog(id: any) {
    this.ticketService.findById(id).subscribe(data => {
      const dialogRef = this.dialog.open(TicketDeleteComponent, {
        width: '500px',
        data: {ticket: data},
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(() => {
        this.ngOnInit();
      });
    });
  }
}
