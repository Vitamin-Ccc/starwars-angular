import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, expand, reduce } from 'rxjs';
import { PlanetsApiResult, PlanetsResult } from './interfaces';

const BASE_URL = 'https://swapi.dev/api/planets'

@Injectable({
  providedIn: 'root'
})

export class PlanetsService {
  private http = inject(HttpClient)

  constructor() { }

  getPlanets(page = 1) {
    return this.http.get<PlanetsApiResult>(`${BASE_URL}/?page=${page}`).pipe(
      expand(response => response.next ? this.http.get(response.next) : EMPTY),
      reduce((acc, current: any) => acc.concat(current.results), []),
    )
  }

  // getPlanets(page = 1):Observable<PlanetsApiResult> {
  //   return this.http.get<PlanetsApiResult>(`${BASE_URL}/?page=${page}`)
  // }

  getPlanetsDetails(id: string):Observable<PlanetsResult> {
    return this.http.get<PlanetsResult>(`${BASE_URL}/${id}`)
  }

}
