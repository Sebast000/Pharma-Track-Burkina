import { Component, OnInit } from '@angular/core';
import { MedicinesService } from '../../shared/services/medicines.service';
import { Medicine } from '../../shared/models/medicine.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  medicines: Medicine[] = []; // ✅ déplacé DANS la classe

  constructor(private medicineService: MedicinesService) {}

  ngOnInit(): void {
    this.loadMedicines();
  }

  loadMedicines() {
    this.medicineService.getAll().subscribe((data) => {
      this.medicines = data;
    });
  }

  deleteMedicine(id: number) {
    if(confirm("Voulez-vous vraiment supprimer ce médicament ?")) {
      this.medicineService.delete(id).subscribe(() => {
        this.loadMedicines(); // recharge la liste
      });
    }
  }
}
