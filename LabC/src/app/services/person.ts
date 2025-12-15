import { Injectable } from '@angular/core';
import { Person } from './person.model';

const STORAGE_KEY = 'persons';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private read(): Person[] {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  }

  private write(data: Person[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  getAll(): Person[] {
    return this.read();
  }

  getByIndex(i: number): Person | null {
    const items = this.read();
    return items[i] ?? null;
  }

  add(person: Person) {
    const items = this.read();
    items.push(person);
    this.write(items);
  }

  delete(i: number) {
    const items = this.read();
    items.splice(i, 1);
    this.write(items);
  }
}
