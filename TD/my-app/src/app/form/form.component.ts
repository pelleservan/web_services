import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  constructor(private logger: LoggerService) {}

  ngOnInit(): void {}

  validate(): void {
    this.logger.log('hello world')
  }

}
