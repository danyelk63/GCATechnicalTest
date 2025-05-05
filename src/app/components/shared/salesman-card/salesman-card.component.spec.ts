import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanCardComponent } from './salesman-card.component';

describe('SalesmanCardComponent', () => {
  let component: SalesmanCardComponent;
  let fixture: ComponentFixture<SalesmanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesmanCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesmanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
