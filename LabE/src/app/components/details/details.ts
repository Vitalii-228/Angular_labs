import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { PersonService } from '../../services/person';
import { Person } from '../../services/person.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './details.html',
  styleUrls: ['./details.css']
})
export class DetailsComponent implements OnInit {

  person: Person | null = null;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.person = this.personService.getByIndex(id);
    });
  }
}
