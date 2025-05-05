import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EndpointService } from '@services/endpoint/endpoint.service';
import { map } from 'rxjs';
import { ISalesman, Salesman } from 'src/app/models/salesman.model';

@Injectable({
  providedIn: 'root',
})
export class HttpSalesmanService {
  config = {
    data: '/salesman',
  };

  httpClientService: HttpClient = inject(HttpClient);
  endpointService = inject(EndpointService);

  get(id: string) {
    return this.httpClientService
      .get<ISalesman>(this.endpointService.getUrl(this.config.data, id))
      .pipe(map((data) => new Salesman(data)));
  }

  getAll() {
    return this.httpClientService
      .get<ISalesman[]>(this.endpointService.getUrl(this.config.data))
      .pipe(map((data) => data.map((item) => new Salesman(item))));
  }

  post(data: Partial<Salesman>) {
    return this.httpClientService.post<ISalesman>(
      this.endpointService.getUrl(this.config.data),
      data
    );
  }
}
