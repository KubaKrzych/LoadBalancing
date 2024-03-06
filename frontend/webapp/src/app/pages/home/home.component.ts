import { Component, OnInit } from '@angular/core';
import { IncrementalButtonComponent } from './components/incremental-button/incremental-button.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IncrementalButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    document.body.style.backgroundColor = environment.backgroundColor;
  }
}
