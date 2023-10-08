import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intention-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intention-selection.component.html',
  styleUrls: ['./intention-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class IntentionSelectionComponent {

}
