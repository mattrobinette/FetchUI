import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dogDetailComponent } from './dog-detail.component';

describe('dogDetailComponent', () => {
  let component: dogDetailComponent;
  let fixture: ComponentFixture<dogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [dogDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(dogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
