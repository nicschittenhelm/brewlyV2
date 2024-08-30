import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCommpleteComponent } from './order-commplete.component';

describe('OrderCommpleteComponent', () => {
  let component: OrderCommpleteComponent;
  let fixture: ComponentFixture<OrderCommpleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderCommpleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderCommpleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
