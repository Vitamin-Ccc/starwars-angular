import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://swapi.dev/api/planets'

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  private http = inject(HttpClient)

  constructor() { }

  getPlanets(page = 1) {
    return this.http.get(`${BASE_URL}/?page=${page}`)
  }

  getPlanetsDetails(id: string) {
    return this.http.get(`${BASE_URL}/${id}`)
  }

}
