import { Component, inject } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { PeopleService } from '../services/people.service';
import { PeopleResult } from '../services/interfaces';
import { PersonDetailsComponent } from '../person-details/person-details.component';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [MatDialogModule, PersonDetailsComponent],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  private peopleService = inject(PeopleService)
  public people: PeopleResult[] = []

  constructor(private dialog: MatDialog) {
    this.loadPeople()
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig()

    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true

    this.dialog.open(PersonDetailsComponent, dialogConfig)
  }
  
  loadPeople() {
    this.peopleService.getPeople().subscribe((people: any) => {
      console.log(people.results)
      this.people = people.results
    })
  }

}
