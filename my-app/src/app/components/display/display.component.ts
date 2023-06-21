import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  users: User[] = [];
  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
}
