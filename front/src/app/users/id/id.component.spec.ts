import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersIdComponent } from './id.component';

describe('UsersIdComponent', () => {
  let component: UsersIdComponent;
  let fixture: ComponentFixture<UsersIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
