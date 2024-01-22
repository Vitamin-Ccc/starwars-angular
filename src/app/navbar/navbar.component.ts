import { Component } from '@angular/core';
import { PeopleComponent } from '../people/people.component';
import { StarshipsComponent } from '../starships/starships.component';
import { PlanetsComponent } from '../planets/planets.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [PeopleComponent, StarshipsComponent, PlanetsComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
