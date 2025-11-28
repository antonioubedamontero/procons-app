import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-pros-list',
  imports: [ReactiveFormsModule, MatButtonModule, MatStepperModule],
  templateUrl: './pros-list.component.html',
  styleUrl: './pros-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProsListComponent {
  prosFormGroup = input.required<FormGroup>();
}
