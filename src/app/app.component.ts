import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [
    ScreenTrackingService,
    UserTrackingService
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
