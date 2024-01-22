import { Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { StarshipsComponent } from './starships/starships.component';
import { AppComponent } from './app.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

export const routes: Routes = [
  // { path: '', component: AppComponent},
  { path: 'people', component: PeopleComponent},
  { path: 'people/:id', component: PersonDetailsComponent},
  { path: 'planets', component: PlanetsComponent},
  { path: 'starships', component: StarshipsComponent}
];
