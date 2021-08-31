import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TicketService} from '../ticket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ticket-delete',
  templateUrl: './ticket-delete.component.html',
  styleUrls: ['./ticket-delete.component.css']
})
export class TicketDeleteComponent implements OnInit {
  public id: number;
  public name: string;

  constructor(public dialogRef: MatDialogRef<TicketDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public ticketService: TicketService,
              ){ }

  ngOnInit(): void {
    this.id = this.data.ticket.id;
    this.name = this.data.ticket.movie.name;
  }

  close() {
    this.dialogRef.close();
  }

  delete() {
    this.ticketService.removeCustomer(this.id).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
