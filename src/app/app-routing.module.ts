import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ProduitsComponent } from './produits/produits.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [   // 🔹 important : 'export'
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'medicines', loadChildren: () => import('./medicines/medicines.module').then(m => m.MedicinesModule) }
  { path: '', component: DashboardComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'transactions', component: TransactionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
