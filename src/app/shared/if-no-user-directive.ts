import { Directive, ElementRef } from '@angular/core';
import { User } from '../user/models/user';
import { UserService } from '../user/user.service';

@Directive({
  selector: '[appIfNoUserDirective]'
})
export class IfNoUserDirective {

  constructor(private userService: UserService, private el: ElementRef){
    console.log("appIfNoUserDirective");
    
    this.userService.user$.subscribe((user: User) =>{
      if (user){
      this.el.nativeElement.classList.add("d-none")
      console.log( "remove d-none ", user);
    }else {
      this.el.nativeElement.classList.remove("d-none")
      console.log( "remove d-none ", user);
    }
    })
  }

}
