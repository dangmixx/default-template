import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Output() showNavbar = new EventEmitter<boolean>();
  openNavBar = true;
  constructor() {}

  ngOnInit(): void {}

  openNavbar() {
    this.openNavBar = !this.openNavBar;
    this.showNavbar.emit(this.openNavBar);
  }
}
