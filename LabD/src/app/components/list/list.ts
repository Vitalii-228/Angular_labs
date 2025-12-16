import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { PersonService } from '../../services/person';
import { Person } from '../../services/person.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css']

})
export class ListComponent implements OnInit {

  persons: Person[] = [];

  constructor(private personService: PersonService,
              private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.personService.getAll().subscribe(data => {
      console.log(data);
      this.persons = data;
      this.cdr.detectChanges();
    });
  }


  delete(id: number) {
    if (!confirm('Confirm?')) {
      return;
    }

    this.personService.delete(id).subscribe(() => {
      this.persons = this.persons.filter(p => p.id !== id);
      this.cdr.detectChanges();
    });
  }
}
