import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dogsUpdateComponent } from './dogs-update.component';

describe('dogDetailComponent', () => {
  let component: dogsUpdateComponent;
  let fixture: ComponentFixture<dogsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [dogsUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(dogsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
