import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuthenticated = false;

  constructor(public auth: UserService, protected router: Router) { }

  ngOnInit(): void {
    // let observable= this.auth.user$.subscribe( () => {
    //   this.isAuthenticated= true
    // }),
    
    let observable =this.auth.user$.subscribe(() =>{
      this.isAuthenticated= true;
      observable.unsubscribe();
    },(err) => {
      this.isAuthenticated= false;
      observable.unsubscribe();
    })
    
  }

}
