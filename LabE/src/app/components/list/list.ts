import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PersonService } from '../../services/person';
import { Person } from '../../services/person.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class ListComponent implements OnInit {

  persons: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.persons = this.personService.getAll();
  }

  delete(index: number) {
    if (!confirm('Really delete?')) return;
    this.personService.delete(index);
    this.persons = this.personService.getAll();
  }
}
