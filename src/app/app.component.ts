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
   isAuthenticated= false;
  constructor(private userService: UserService){}

  ngOnInit(): void {
    // let observable= this.auth.user$.subscribe( () => {
    //   this.isAuthenticated= true
    // }),
    
    let observable =this.userService.user$.subscribe((user: User) =>{
      this.username= user.username;
      this.isAuthenticated= true;
      observable.unsubscribe();
    },(err) => {
      this.username= null;
      this.isAuthenticated= false;
      observable.unsubscribe();
    })
    
  }

}
