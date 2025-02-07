import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { LocationComponent } from './pages/location/location.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard], // Protéger la route d'accueil
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'location/:id', component: LocationComponent },
  {
    path: 'product-page/:name',
    component: ProductPageComponent,
    canActivate: [authGuard], // Protéger la route des produits
  },
  {
    path: 'product-details/:cat/:id',
    component: ProductDetailsComponent,
    canActivate: [authGuard], // Protéger la route des détails du produit
  },
];
