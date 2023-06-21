import { Component } from '@angular/core';
import { User } from 'src/app/User';
import { Users } from 'src/app/socialUsers';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  users: User[] = Users;
}
