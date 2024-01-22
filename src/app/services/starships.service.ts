import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, expand, reduce } from 'rxjs';
import { StarshipsApiResult, StarshipsResult } from './interfaces';


const BASE_URL = 'https://swapi.dev/api/starships'


@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  private http = inject(HttpClient)

  constructor() { }

  getStarships(page = 1) {
    return this.http.get<StarshipsApiResult>(`${BASE_URL}/?page=${page}`).pipe(
      expand(response => response.next ? this.http.get(response.next) : EMPTY),
      reduce((acc, current: any) => acc.concat(current.results), []),
    )
  }

  getStarshipsDetails(id: string):Observable<StarshipsResult> {
    return this.http.get<StarshipsResult>(`${BASE_URL}/${id}`)
  }

}
