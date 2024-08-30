import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartOverlayComponent } from './shopping-cart-overlay.component';

describe('ShoppingCartOverlayComponent', () => {
  let component: ShoppingCartOverlayComponent;
  let fixture: ComponentFixture<ShoppingCartOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingCartOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
