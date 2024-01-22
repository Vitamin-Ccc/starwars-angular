import { Component, Input, WritableSignal, inject, signal } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { PeopleResult } from '../services/interfaces';

@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent{
  private personService = inject(PeopleService)

  public person: WritableSignal<PeopleResult | null> = signal(null)

  @Input()
  set id(personId: string) {
    this.personService.getPersonDetails(personId).subscribe((person) => {
      console.log(person)

      this.person.set(person)
    })
  }


  constructor() {}
}
