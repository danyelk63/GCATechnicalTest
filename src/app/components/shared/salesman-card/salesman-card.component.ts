import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { Salesman } from 'src/app/models/salesman.model';
import { MatCardModule } from '@angular/material/card';
import { SalesmanService } from '@services/salesman/salesman.service';

@Component({
  selector: 'app-salesman-card',
  imports: [CommonModule, MatCardModule],
  templateUrl: './salesman-card.component.html',
  styleUrl: './salesman-card.component.scss'
})
export class SalesmanCardComponent implements OnInit {
  @Input() salesman: Salesman = {} as Salesman;

  salesmanService = inject(SalesmanService);

  selectedSalesman = signal<Salesman | null>(null);

  ngOnInit(): void {
    this.salesmanService.selectedSalesman$.subscribe({
      next: (salesman) => {
        if (salesman) {
          this.selectedSalesman.set(salesman);
        }
      },
    });
  }

  selectSalesman() {
    this.salesmanService.setSelectedSalesman(this.salesman);
  }
  
}
