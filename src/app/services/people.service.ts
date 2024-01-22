import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { EMPTY, Observable, delay, expand, reduce } from 'rxjs';
import { PeopleApiResult, PeopleResult } from './interfaces';

const BASE_URL = 'https://swapi.dev/api/people'

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  private http = inject(HttpClient)

  constructor() { }

  // getPeople(page = 1) {
  //   return this.http.get<PeopleApiResult>(`${BASE_URL}/?page=${page}`).pipe(
  //     expand(response => response.next ? this.http.get(response.next) : EMPTY),
  //     reduce((acc, current: any) => acc.concat(current.results), []),
  //     delay(1000)
  //   )
  // }

  getPeople(page = 1):Observable<PeopleApiResult> {
    return this.http.get<PeopleApiResult>(`${BASE_URL}/?page=${page}`)
  }

  getPersonDetails(id: string):Observable<PeopleResult> {
    return this.http.get<PeopleResult>(`${BASE_URL}/${id}`)
  }
}
