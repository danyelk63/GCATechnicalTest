import { v4 as uuidv4 } from 'uuid';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { SalesmanService } from '@services/salesman/salesman.service';
import { SalesmanCardComponent } from '@shared/salesman-card/salesman-card.component';
import { Salesman } from 'src/app/models/salesman.model';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { HttpSalesmanService } from '@services/http/salesman/salesman.service';

@Component({
  selector: 'app-salesman-list',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SalesmanCardComponent,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
  ],
  templateUrl: './salesman-list.component.html',
  styleUrl: './salesman-list.component.scss',
})
export class SalesmanListComponent implements OnInit {
  @ViewChild('DialogContainer', { static: true })
  dialogContainer!: TemplateRef<any>;

  salesmanService = inject(SalesmanService);
  httpSalesmanService = inject(HttpSalesmanService);
  fb = inject(FormBuilder);
  dialog = inject(MatDialog);

  form = this.fb.group({
    id: uuidv4(),
    name: this.fb.control('', Validators.required),
    category: this.fb.control('', Validators.required),
    address: this.fb.control('', Validators.required),
    photo: this.fb.control('', Validators.required),
    vehicle: this.fb.control('', Validators.required),
  });

  salesmanList: Salesman[] = [];

  vehicleList = [
    { key: 'ambulancia', value: 'Ambulancia' },
    { key: 'ambulancia2', value: 'Ambulancia 2' },
    { key: 'carro', value: 'Carro' },
    { key: 'dron', value: 'Dron' },
    { key: 'grua', value: 'Grua' },
    { key: 'moto', value: 'Moto' },
    { key: 'sinvehiculo', value: 'Sin vehiculo' },
  ];

  photoList = [
    { key: 'person1', value: 'Persona 1' },
    { key: 'person2', value: 'Persona 2' },
    { key: 'person3', value: 'Persona 3' },
    { key: 'person4', value: 'Persona 4' },
    { key: 'person5', value: 'Persona 5' },
    { key: 'person6', value: 'Persona 6' },
  ];

  ngOnInit(): void {
    this.getSalesmanList();
  }

  getSalesmanList() {
    this.salesmanService.getSalesman().subscribe({
      next: (response: Salesman[]) => {
        this.salesmanList = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  onSubmit() {
    let data = this.form.getRawValue() as Partial<Salesman>;
    data.id = data.id!.slice(0, Math.floor(data.id!.length / 2));
    this.httpSalesmanService.post(data).subscribe({
      next: (response) => {
        this.form.reset();
        this.dialog.closeAll();
        this.salesmanService.getSalesman();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  openDialog() {
    const buttonElement = document.activeElement as HTMLElement;
    buttonElement.blur();
    this.dialog.open(this.dialogContainer, {
      autoFocus: true,
    });
  }
}
