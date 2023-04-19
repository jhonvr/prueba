import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  imports: [
    RouterModule
  ]
})

export class NavBarComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
