import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BackendApiService } from '../../../../api/backend-api-service.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-incremental-button',
  standalone: true,
  imports: [],
  templateUrl: './incremental-button.component.html',
  styleUrl: './incremental-button.component.scss'
})
export class IncrementalButtonComponent implements OnInit {
  count: number = 0;
  constructor(private apiService: BackendApiService) {

  }

  ngOnInit(): void {
    this.apiService.getCount().subscribe((num: number) => {
      this.count = num;
    });
  }

  increment(): void {
    this.apiService.increment().subscribe((num: number) => {
      this.count = num;
    });
  }

}
