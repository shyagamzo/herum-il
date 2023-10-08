import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-intention-selection',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './intention-selection.component.html',
  styleUrls: ['./intention-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class IntentionSelectionComponent { }
