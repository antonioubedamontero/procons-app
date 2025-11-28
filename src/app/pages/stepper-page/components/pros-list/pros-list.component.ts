import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';

import { ProconsList } from 'procons';
@Component({
  selector: 'app-pros-list',
  imports: [ReactiveFormsModule, MatButtonModule, MatStepperModule, MatDividerModule, ProconsList],
  templateUrl: './pros-list.component.html',
  styleUrl: './pros-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProsListComponent {
  prosFormGroup = input.required<FormGroup>();

  get proconsAsFormArray(): FormArray {
    return this.prosFormGroup().get('pros') as FormArray;
  }
}
