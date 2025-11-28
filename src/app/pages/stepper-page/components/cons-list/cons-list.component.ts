import { Component, input } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';

import { ProconsList } from 'procons';
@Component({
  selector: 'app-cons-list',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
    MatStepperModule,
    MatDividerModule,
    ProconsList,
  ],
  templateUrl: './cons-list.component.html',
  styleUrl: './cons-list.component.scss',
})
export class ConsListComponent {
  consFormGroup = input.required<FormGroup>();

  get proconsAsFormArray(): FormArray {
    return this.consFormGroup().get('cons') as FormArray;
  }
}
