import { Component } from '@angular/core';
import { MapComponent } from '@shared/map/map.component';
import { SalesmanListComponent } from '@shared/salesman-list/salesman-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-salesman-view',
  imports: [
    RouterOutlet,
    SalesmanListComponent,
    MatTabsModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './salesman-view.component.html',
  styleUrl: './salesman-view.component.scss',
})
export class SalesmanViewComponent {
  links = [
    { key: 'home', value: 'Home' },
    { key: 'page1', value: 'Page 1' },
    { key: 'page2', value: 'Page 2' },
    { key: 'page3', value: 'Page 3' },
  ];
  activeLink = this.links[0];
}
