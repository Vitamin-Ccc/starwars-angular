import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PeopleService } from '../services/people.service';
import { PeopleResult } from '../services/interfaces';
import { PersonDetailsComponent } from '../person-details/person-details.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [
    MatButtonModule,
    PersonDetailsComponent,
  ],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  private peopleService = inject(PeopleService)
  public people: PeopleResult[] = []

  constructor(public dialog: MatDialog) {
    this.loadPeople()
  }

  loadPeople() {
    this.peopleService.getPeople().subscribe((people: any) => {
      console.log(people.results)
      this.people = people.results
    })
  }
  
  openDialog(people: PeopleResult[]): void {
    const dialogRef = this.dialog.open(PersonDetailsComponent, {
      width: '1000px',
      data: { people }
    });
    // console.log(people)
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
