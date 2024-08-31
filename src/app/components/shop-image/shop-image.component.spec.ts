import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopImageComponent } from './shop-image.component';

describe('ShopImageComponent', () => {
  let component: ShopImageComponent;
  let fixture: ComponentFixture<ShopImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
