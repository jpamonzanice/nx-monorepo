import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LibSharedCardComponent } from '@nx-shared-lib/card';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, LibSharedCardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'store';
}
