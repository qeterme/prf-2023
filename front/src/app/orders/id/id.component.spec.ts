import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersIdComponent } from './id.component';

describe('OrdersIdComponent', () => {
  let component: OrdersIdComponent;
  let fixture: ComponentFixture<OrdersIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
