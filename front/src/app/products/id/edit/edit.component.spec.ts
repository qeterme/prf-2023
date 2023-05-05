import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIdEditComponent } from './edit.component';

describe('ProductIdEditComponent', () => {
  let component: ProductIdEditComponent;
  let fixture: ComponentFixture<ProductIdEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductIdEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductIdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
