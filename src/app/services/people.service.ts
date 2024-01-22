import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const BASE_URL = 'https://swapi.dev/api/people'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private http = inject(HttpClient)

  constructor() { }

  getPeople(page = 1) {
    return this.http.get(`${BASE_URL}/?page=${page}`)
  }

  getPeopleDetails(id: string) {
    return this.http.get(`${BASE_URL}/${id}`)
  }
}
