import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataInfosService } from '../../service/data-infos.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };

  errorMessage: string = '';
  appComponent: any;

  constructor(
    private dataInfosService: DataInfosService,
    private router: Router,
  ) {}

  onSubmit() {
    const isAuthenticated = this.dataInfosService.login(
      this.credentials.email,
      this.credentials.password
    );

    if (isAuthenticated) {
      this.router.navigate(['/']); // Rediriger vers la page d'accueil
    } else {
      this.errorMessage = 'Email ou mot de passe incorrect.';
    }
  }

}
