import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../Services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  ngOnInit() {
  }
}
