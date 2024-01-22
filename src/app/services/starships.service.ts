import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://swapi.dev/api/starships'


@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private http = inject(HttpClient)

  constructor() { }

  getStarships(page = 1) {
    return this.http.get(`${BASE_URL}/?page=${page}`)
  }

  getStarshipsDetails(id: string) {
    return this.http.get(`${BASE_URL}/${id}`)
  }

}
