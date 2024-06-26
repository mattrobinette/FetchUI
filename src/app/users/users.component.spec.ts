import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dogsComponent } from './users.component';

describe('dogsComponent', () => {
  let component: dogsComponent;
  let fixture: ComponentFixture<dogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [dogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(dogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
