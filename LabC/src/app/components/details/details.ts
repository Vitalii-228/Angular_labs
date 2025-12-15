import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonService } from '../../services/person';
import { Person } from '../../services/person.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css'
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
