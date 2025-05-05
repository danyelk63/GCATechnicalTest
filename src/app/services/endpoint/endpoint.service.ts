import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  getBaseUrl(): string {
    return environment.apiUrl;
  }

  getUrl(endpoint: string, id?: string): string {
    return `${environment.apiUrl}${endpoint}${id ? `/${id}` : ''}`;
  }
}
