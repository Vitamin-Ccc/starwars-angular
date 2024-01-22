import { Component, inject } from '@angular/core';
import { PlanetsService } from '../services/planets.service';
import { PlanetsResult } from '../services/interfaces';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css'
})
export class PlanetsComponent {
  private planetsService = inject(PlanetsService)
  public planets: PlanetsResult[] = []

  constructor() {
    this.loadPlanets()
  }
  
  loadPlanets() {
    this.planetsService.getPlanets().subscribe((planets) => {
      console.log(planets)
      this.planets = planets
    })
  }

}
