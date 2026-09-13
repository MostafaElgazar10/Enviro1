import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasticComponent } from './plastic.component';

describe('PlasticComponent', () => {
  let component: PlasticComponent;
  let fixture: ComponentFixture<PlasticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlasticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlasticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
