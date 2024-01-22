import { Component, inject } from '@angular/core';
import { StarshipsService } from '../services/starships.service';
import { StarshipsResult } from '../services/interfaces';

@Component({
  selector: 'app-starships',
  standalone: true,
  imports: [],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.css'
})
export class StarshipsComponent {
  private starshipService = inject(StarshipsService)
  public starships: StarshipsResult[] = []

  constructor() {
    this.loadStarships()
  }
  
  loadStarships() {
    this.starshipService.getStarships().subscribe((starships) => {
      console.log(starships)
      this.starships = starships
    })
  }
}
