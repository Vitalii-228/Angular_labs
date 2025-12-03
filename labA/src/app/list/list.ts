import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  text = '';
  array: string[] = [];

  add() {
    if (this.text.trim().length > 0) {
      this.array.push(this.text);
      this.text = '';
    }
  }
  remove(i: number) {
    this.array.splice(i, 1);
  }
}
