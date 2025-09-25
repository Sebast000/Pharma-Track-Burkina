import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Medicine } from '../../shared/models/medicine.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // ✅ La variable doit être DANS la classe
  currentMedicine: Medicine = {
    id: 0,
    name: '',
    category: '',
    price: 0,
    quantity: 0,
    expiryDate: ''
  };

  medicineForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.medicineForm = this.fb.group({
      name: [this.currentMedicine.name, Validators.required],
      category: [this.currentMedicine.category, Validators.required],
      price: [this.currentMedicine.price, [Validators.required, Validators.min(0.01)]],
      quantity: [this.currentMedicine.quantity, [Validators.required, Validators.min(0)]],
      expiryDate: [this.currentMedicine.expiryDate, Validators.required]
    });
  }

  onSubmit() {
    if (this.medicineForm.valid) {
      console.log('Médecament enregistré :', this.medicineForm.value);
      // Ici tu peux appeler le service pour ajouter/modifier
    }
  }
}
