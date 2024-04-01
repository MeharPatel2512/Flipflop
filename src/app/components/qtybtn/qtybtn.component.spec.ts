import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtybtnComponent } from './qtybtn.component';

describe('QtybtnComponent', () => {
  let component: QtybtnComponent;
  let fixture: ComponentFixture<QtybtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QtybtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QtybtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
