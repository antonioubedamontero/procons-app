import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
@Component({
  selector: 'app-cons-list',
  imports: [ReactiveFormsModule, MatButtonModule, MatStepperModule, MatStepperModule],
  templateUrl: './cons-list.component.html',
  styleUrl: './cons-list.component.scss',
})
export class ConsListComponent {
  consFormGroup = input.required<FormGroup>();
}
