import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodtemplatesComponent } from './foodtemplates.component';

describe('FoodtemplatesComponent', () => {
  let component: FoodtemplatesComponent;
  let fixture: ComponentFixture<FoodtemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodtemplatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodtemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
