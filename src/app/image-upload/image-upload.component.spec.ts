import { ComponentFixture, TestBed } from '@angular/core/testing';

import { imageUploadComponent } from './image-upload.component';

describe('dogDetailComponent', () => {
  let component: imageUploadComponent;
  let fixture: ComponentFixture<imageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [imageUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(imageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
