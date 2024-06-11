import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dogsCreateComponent } from './dogs-create.component';

describe('dogsCreateComponent', () => {
  let component: dogsCreateComponent;
  let fixture: ComponentFixture<dogsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [dogsCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(dogsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
