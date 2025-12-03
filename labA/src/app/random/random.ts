import {Component, Input} from '@angular/core';
import {RandomService} from '../random-service';

@Component({
  selector: 'app-random',
  imports: [],
  templateUrl: './random.html',
  styleUrl: './random.css',
})
export class Random {
  @Input() max = 10;
  value = 0;
  message = '';
  color = '';

  constructor(private randomService: RandomService) {}
  generate() {
    this.value = this.randomService.getRandom(this.max);

    if (this.value <= this.max * 0.5) {
      this.message = 'Liczba jest mniejsza';
      this.color = 'green';
    } else {
      this.message = 'Liczba jest większa';
      this.color = 'red';
    }
  }
}
