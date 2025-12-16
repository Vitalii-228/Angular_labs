import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from './person.model';

@Injectable({ providedIn: 'root' })
export class PersonService {

  private api = 'http://localhost:8080/api/persons';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Person[]>(this.api);
  }

  getById(id: number) {
    return this.http.get<Person>(`${this.api}/${id}`);
  }

  add(person: Person) {
    return this.http.post<Person>(this.api, person);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
