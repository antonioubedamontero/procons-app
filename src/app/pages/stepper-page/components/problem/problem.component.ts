import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-problem',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatDividerModule,
  ],
  templateUrl: './problem.component.html',
  styleUrl: './problem.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProblemComponent {
  problemFormGroup = input.required<FormGroup>();

  hasError(controlName: string): boolean {
    const control = this.problemFormGroup().get(controlName);
    return control?.invalid && (control.dirty || control.touched) ? true : false;
  }

  getErrorsFromField(controlName: string): string {
    const control = this.problemFormGroup().get(controlName);

    const controlErrors = control?.errors;

    if (!controlErrors) {
      return '';
    }

    if (controlErrors['required']) {
      return 'Debe informar el problema';
    }

    if (controlErrors['minlength']) {
      const requiredLength = controlErrors['minlength'].requiredLength;
      return `Debe tener al menos ${requiredLength} caracteres`;
    }

    return 'Error de validación desconocido.';
  }
}
