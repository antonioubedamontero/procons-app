import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-result-page',
  imports: [],
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ResultPageComponent {}
