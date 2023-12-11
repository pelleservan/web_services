import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent {
  counter: number = 0;
  disableIncrementButton: boolean = false;

  incrementCounter(): void {
    this.counter++;
  }

  toggleIncrementButton(): void {
    this.disableIncrementButton = !this.disableIncrementButton;
  }
}
