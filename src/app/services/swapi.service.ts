import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planet } from '../interfaces/planet';
import { People } from '../interfaces/people';
import { Starship } from '../interfaces/starship';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private apiUrl = environment.swapiUrl;

  constructor(private http: HttpClient) { }

  getPlanet(planetIndex: number): Observable<Planet> {
    return this.http.get<Planet>(`${this.apiUrl}/planets/${planetIndex}`)
  }

  getPeople(peopleIndex: number): Observable<People> {
    return this.http.get<People>(`${this.apiUrl}/people/${peopleIndex}`)
  }

  getStarships(starshipIndex: number): Observable<Starship> {
    return this.http.get<Starship>(`${this.apiUrl}/people/${starshipIndex}`)
  }
}
