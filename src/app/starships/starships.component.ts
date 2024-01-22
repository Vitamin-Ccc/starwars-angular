import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { StarshipsService } from '../services/starships.service';

@Component({
  selector: 'app-starships',
  standalone: true,
  imports: [],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.css'
})
export class StarshipsComponent {
  // http = inject(HttpClient)
  // starships: any = []

  // ngOnInit(): void {
  //   this.fetchStarships()
  // }

  // fetchStarships() {
  //   this.http.get('https://swapi.dev/api/starships')
  //   .subscribe((starships: any) => {
  //     console.log(starships.results)
  //     this.starships = starships.results
  //   })
  // }

  private starshipService = inject(StarshipsService)
  constructor() {
    this.loadPeople()
  }
  
  loadPeople() {
    this.starshipService.getStarships().subscribe((starships) => {
      console.log(starships)
    })
  }
}
