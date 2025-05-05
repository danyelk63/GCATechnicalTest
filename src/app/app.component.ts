import { Component } from '@angular/core';
import { SalesmanViewComponent } from '@features/salesman-view/salesman-view.component';

@Component({
  selector: 'app-root',
  imports: [SalesmanViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GCATechnicalTest';
}
