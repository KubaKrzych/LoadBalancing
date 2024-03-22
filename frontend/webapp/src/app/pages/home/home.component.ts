import { Component, OnInit } from '@angular/core';
import { IncrementalButtonComponent } from './components/incremental-button/incremental-button.component';
import { environment } from '../../../environments/environment';
import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IncrementalButtonComponent, ContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  app_name: string = environment.appName;

  ngOnInit(): void {
    document.body.style.backgroundColor = environment.backgroundColor;
  }
}
