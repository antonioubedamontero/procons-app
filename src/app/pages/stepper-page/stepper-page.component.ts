import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { MatStepperModule } from '@angular/material/stepper';

import { ProblemComponent } from './components/problem/problem.component';
import { ProsListComponent } from './components/pros-list/pros-list.component';
import { ConsListComponent } from './components/cons-list/cons-list.component';

@Component({
  selector: 'app-stepper-page',
  imports: [MatStepperModule, ProblemComponent, ProsListComponent, ConsListComponent],
  templateUrl: './stepper-page.component.html',
  styleUrl: './stepper-page.component.scss',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperPageComponent {
  private fb = inject(FormBuilder);

  problemFormGroup = this.fb.group({
    problem: ['', [Validators.required, Validators.minLength(10)]],
  });

  prosFormGroup = this.fb.group({
    pros: this.fb.array([]),
  });

  consFormGroup = this.fb.group({
    cons: this.fb.array([]),
  });
}
