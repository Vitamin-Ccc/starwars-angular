import { Component, inject } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { PeopleService } from '../services/people.service';
import { PeopleResult } from '../services/interfaces';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  private peopleService = inject(PeopleService)
  public people: PeopleResult[] = []

  constructor() {
    this.loadPeople()
  }
  
  loadPeople() {
    this.peopleService.getPeople().subscribe((people: any) => {
      console.log(people.results)
      this.people = people.results
    })
  }

}
