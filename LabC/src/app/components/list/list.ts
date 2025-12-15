import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PersonService } from '../../services/person';
import { Person } from '../../services/person.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class ListComponent implements OnInit {

  persons: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.persons = this.personService.getAll();
  }

  delete(index: number) {
    if (!confirm('Видалити запис?')) return;
    this.personService.delete(index);
    this.persons = this.personService.getAll();
  }
}
