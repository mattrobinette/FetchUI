import { ComponentFixture, TestBed } from '@angular/core/testing';

import { browseComponent } from './browse.component';

describe('browseComponent', () => {
  let component: browseComponent;
  let fixture: ComponentFixture<browseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [browseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(browseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});