import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
    private personService: PersonService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.personService.getById(+params['id']).subscribe({
        next: person => {
          this.person = person;
          this.cdr.detectChanges();
        },
      });
    });
  }

}
