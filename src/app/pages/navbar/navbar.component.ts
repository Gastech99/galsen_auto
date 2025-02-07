import { Component, OnInit } from '@angular/core';
import { DataInfosService } from '../../service/data-infos.service';
import { Router, RouterModule } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(
    public dataInfosService: DataInfosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataInfosService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    });
  }

  logout() {
    this.dataInfosService.logout();
    this.router.navigate(['/login']); // Rediriger vers la page de connexion
  }
}
