import { Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormComponent } from './form/form.component';
import { CountComponent } from './count/count.component';

export const routes: Routes = [
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'count', component: CountComponent },
  { path: 'form', component: FormComponent }
];
