import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardImageComponent } from './item-card-image.component';

describe('ItemCardImageComponent', () => {
  let component: ItemCardImageComponent;
  let fixture: ComponentFixture<ItemCardImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemCardImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemCardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
