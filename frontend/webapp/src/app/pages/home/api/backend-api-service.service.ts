import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { API } from '../../../core/constants/api.const';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) { }

  getCount(): Observable<number> {
    return this.http.get<number>(`${environment.httpBackend}${API.COUNTER_GET.replace(':app', environment.appName)}`);
  }

  increment(): Observable<number> {
    return this.http.post<number>(`${environment.httpBackend}${API.INCREMENT.replace(":app", environment.appName)}`, null)
  }

  private set(): Observable<boolean> {
    return this.http.post<boolean>(`${environment.httpBackend}${API.COUNTER_SET.replace(":app", environment.appName)}`, null)
  }
}
