import { Component, OnInit } from '@angular/core';
import { User } from './user/models/user';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'color-game-angular';
   username: string
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.user$.subscribe((user: User) =>{
      this.username= user.username;
    })
    
  }

}
