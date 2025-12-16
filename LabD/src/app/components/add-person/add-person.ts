import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PersonService } from '../../services/person';
import { Person } from '../../services/person.model';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-person.html',
  styleUrl: './add-person.css'
})
export class AddPersonComponent {

  person: Person = {};

  constructor(
    private personService: PersonService,
    private router: Router
  ) {}

  save() {
    this.personService.add(this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
