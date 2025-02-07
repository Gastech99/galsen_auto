import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {
  startDate: string = '';
  endDate: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  validateDates() {
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);

    if (!this.startDate || !this.endDate) {
      this.errorMessage = 'Veuillez sélectionner les deux dates.';
      this.successMessage = '';
      return;
    }

    if (start > end) {
      this.errorMessage = 'La date de début ne peut pas être après la date de fin.';
      this.successMessage = '';
    } else {
      this.errorMessage = '';
      this.successMessage = `Location validée du ${this.startDate} au ${this.endDate}.`;
    }
  }
}
