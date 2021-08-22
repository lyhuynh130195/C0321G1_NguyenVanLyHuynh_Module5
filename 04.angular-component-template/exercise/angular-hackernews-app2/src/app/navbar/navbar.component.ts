import {Component, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() showAdd = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  showForm() {
    this.showAdd.emit();
  }
}
