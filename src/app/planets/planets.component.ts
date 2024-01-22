import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { PlanetsService } from '../services/planets.service';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css'
})
export class PlanetsComponent {
  // http = inject(HttpClient)
  // planets: any = []

  // ngOnInit(): void {
  //   this.fetchPlanets()
  // }

  // fetchPlanets() {
  //   this.http.get('https://swapi.dev/api/planets')
  //   .subscribe((planets: any) => {
  //     console.log(planets.results)
  //     this.planets = planets.results
  //   })
  // }

  private planetsService = inject(PlanetsService)
  constructor() {
    this.loadPeople()
  }
  
  loadPeople() {
    this.planetsService.getPlanets().subscribe((planets) => {
      console.log(planets)
    })
  }

}
