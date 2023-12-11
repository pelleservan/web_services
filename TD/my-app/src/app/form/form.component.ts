import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  moduleId: module.id,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  ngOnInit(): void {
      
  }
  login: string = '';
  password: string = '';
  passwordConfirmation: string = '';

  submitForm() {
    console.log('ok')
    if (this.password === this.passwordConfirmation) {
      console.log('Formulaire soumis avec succès', {
        login: this.login,
        password: this.password
      });
    } else {
      alert('Les mots de passe ne correspondent pas');
    }
  }
}

