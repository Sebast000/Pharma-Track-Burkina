import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- à importer

@Component({
  selector: 'app-root',
  standalone: true,            // ⚡ si ton composant est standalone
  imports: [CommonModule],     // <-- obligatoire pour *ngFor et *ngIf
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PharmaTrack Burkina';

  features = [
    { name: 'Gestion des produits', link: '#' },
    { name: 'Suivi des stocks', link: '#' },
    { name: 'Gestion des ventes', link: '#' },
    { name: 'Rapports détaillés', link: '#' },
    { name: 'Alertes automatiques', link: '#' },
  ];

  
}
