import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Bienvenue sur Pharma Track Burkina</h1>
    <a routerLink="/medicines">Voir les médicaments</a>
  `
})
export class HomeComponent {}
