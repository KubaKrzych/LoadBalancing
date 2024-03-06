import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackendApiService } from './api/backend-api-service.service';
import { IncrementalButtonComponent } from './pages/home/components/incremental-button/incremental-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  incrementalButton: IncrementalButtonComponent;
  title = 'webapp';

  constructor(private backend: BackendApiService) {
    this.incrementalButton = new IncrementalButtonComponent(backend);
  }
}
