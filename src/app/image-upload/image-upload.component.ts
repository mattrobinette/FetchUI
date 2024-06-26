import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { dogService } from '../dog.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./image-upload.component.css']
})
export class imageUploadComponent {
  @Input() id!: string; // Accept dogId as an input property
  selectedFile: File | null = null;
  error: any = null;

  constructor(private dogService: dogService,
    private router: Router) {}

    onFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        this.selectedFile = input.files[0];
      }
    }

    onSubmit(): void {

      if (!this.selectedFile) {
        alert('Please select an image file first.');
        return;
      }

      this.dogService.uploadImage(this.id, this.selectedFile).subscribe({
        next: (res) => {
          console.log('successful', res);
          this.router.navigate(['/dogs']);
        },
        error: (err) => {
          this.error = err;
          console.error('Error uploading image:', err);
        }
      });
    }
}
