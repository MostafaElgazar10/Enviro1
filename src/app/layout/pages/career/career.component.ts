import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {

selectedImage: File | null = null;
imagePreview: string | null = null;

onFileSelected(event: Event): void {

  console.log('File input changed');

  const input = event.target as HTMLInputElement;

  if (!input.files || input.files.length === 0) {
    console.log('No file selected');
    return;
  }

  this.selectedImage = input.files[0];

  console.log('Selected file:', this.selectedImage);

  const reader = new FileReader();

  reader.onload = () => {

    console.log('Image loaded');

    this.imagePreview = reader.result as string;

  };

  reader.readAsDataURL(this.selectedImage);
}

  
}
