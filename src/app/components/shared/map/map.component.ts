import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  QueryList,
  signal,
  ViewChild,
  viewChild,
  ViewChildren,
} from '@angular/core';
import {
  GoogleMap,
  GoogleMapsModule,
  MapAdvancedMarker,
  MapInfoWindow,
} from '@angular/google-maps';
import { SalesmanService } from '@services/salesman/salesman.service';
import { Salesman } from 'src/app/models/salesman.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-map',
  imports: [CommonModule, MatButtonModule, GoogleMapsModule, MapInfoWindow],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
  salesmanService = inject(SalesmanService);

  private mapRef = viewChild.required<GoogleMap>(GoogleMap);
  private infoWindowReference = viewChild<MapInfoWindow>(MapInfoWindow);
  @ViewChildren(MapAdvancedMarker)
  advancedMarkers!: QueryList<MapAdvancedMarker>;

  salesmanList = signal<Salesman[]>([]);
  selectedSalesman = signal<Salesman | null>(null);

  options: google.maps.MapOptions = {
    center: { lat: 4.7, lng: -74.1 },
    zoom: 12,
    disableDefaultUI: true,
    mapId: 'f7dd442729fce353',
  };

  markerOptions: google.maps.marker.AdvancedMarkerElementOptions = {};

  ngOnInit(): void {
    this.getSalesmanList();

    this.salesmanService.selectedSalesman$.subscribe({
      next: (salesman) => {
        if (salesman) {
          this.infoWindowReference()?.close();
          let marker =
            this.advancedMarkers.toArray()[
              this.salesmanList().findIndex(
                (element) => element.id === salesman.id,
              )
            ];

          this.selectedSalesman.set(salesman);

          this.mapRef().panTo({
            lat: salesman.coordinates.latitude,
            lng: salesman.coordinates.longitude,
          });

          this.infoWindowReference()?.open(marker);
        }
      },
    });
  }

  getSalesmanList() {
    this.salesmanService.getSalesman().subscribe({
      next: (response: Salesman[]) => {
        this.salesmanList.set(response);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  onMarkerClick(salesman: Salesman) {
    this.selectedSalesman.set(salesman);
    this.salesmanService.setSelectedSalesman(salesman);
  }

  getMarkerContent(salesman: Salesman) {
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.width = '30px';

    const icon = `icons/${salesman.vehicle}.svg`;
    const imgTag = document.createElement('img');
    imgTag.src = icon;
    imgTag.style.position = 'absolute';
    imgTag.style.top = '0';
    imgTag.style.left = '0';
    imgTag.style.width = '100%';
    imgTag.style.height = 'auto';
    imgTag.style.zIndex = '1';
    container.appendChild(imgTag);

    if (salesman.id === this.selectedSalesman()?.id) {
      const backgroundImg = document.createElement('img');
      backgroundImg.src = 'icons/pinselected.svg';
      backgroundImg.style.position = 'absolute';
      backgroundImg.style.top = '0';
      backgroundImg.style.left = '0';
      backgroundImg.style.width = '100%';
      backgroundImg.style.height = 'auto';
      container.appendChild(backgroundImg);
    }

    return container;
  }
}
