import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {

  // http = inject(HttpClient)
  // people: any = []

  // ngOnInit(): void {
  //   this.fetchPeople()
  // }

  // fetchPeople() {
  //   this.http.get('https://swapi.dev/api/people')
  //   .subscribe((people: any) => {
  //     console.log(people.results)
  //     this.people = people.results
  //   })
  // }

  private peopleService = inject(PeopleService)
  constructor() {
    this.loadPeople()
  }
  
  loadPeople() {
    this.peopleService.getPeople().subscribe((people) => {
      console.log(people)
    })
  }

}
