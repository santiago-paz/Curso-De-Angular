import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planet } from '../interfaces/planet';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  apiUrl: string = environment.swapiUrl;
  constructor(private http: HttpClient) {

  }

  getPlanet(index: number): Observable<Planet> {
    return this.http.get<Planet>(`${this.apiUrl}/planets/${index}`)
  }
}
