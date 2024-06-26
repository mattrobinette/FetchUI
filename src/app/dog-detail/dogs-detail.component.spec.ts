import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dogsDetailComponent } from './dogs-detail.component';

describe('dogsDetailComponent', () => {
  let component: dogsDetailComponent;
  let fixture: ComponentFixture<dogsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [dogsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(dogsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
