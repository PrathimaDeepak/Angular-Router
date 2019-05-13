import {Routes} from '@angular/router';
import {StudentComponent} from './student/student.component';
import {HomeComponent} from './home/home.component';

export const myroutes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'app-student',
    component : StudentComponent
  }
];
