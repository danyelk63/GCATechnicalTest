import { inject, Injectable } from '@angular/core';
import { HttpSalesmanService } from '@services/http/salesman/salesman.service';
import { BehaviorSubject, interval, Observable, startWith, switchMap } from 'rxjs';
import { Salesman } from 'src/app/models/salesman.model';

@Injectable({
  providedIn: 'root'
})
export class SalesmanService {
  httpSalesmanService: HttpSalesmanService = inject(HttpSalesmanService);

  private selectedSalesmanSubject: BehaviorSubject<Salesman | null> = new BehaviorSubject<Salesman | null>(null);
  selectedSalesman$: Observable<Salesman | null> = this.selectedSalesmanSubject.asObservable();

  setSelectedSalesman(salesman: Salesman | null): void {
    this.selectedSalesmanSubject.next(salesman);
  }

  getSalesman(): Observable<Salesman[]> {
    return interval(10000).pipe(
      startWith(0),
      switchMap(() => this.httpSalesmanService.getAll())
    );
  }
}
