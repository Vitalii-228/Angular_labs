import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PersonService } from '../../services/person';
import { Person } from '../../services/person.model';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './add-person.html',
  styleUrls: ['./add-person.css']
})
export class AddPersonComponent {

  person: Person = {
    address: {}
  };

  constructor(
    private personService: PersonService,
    private router: Router
  ) {}

  save() {
    this.personService.add(this.person);
    this.router.navigateByUrl('/');
  }
}
