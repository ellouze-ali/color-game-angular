import { Directive, ElementRef } from '@angular/core';
import { User } from '../user/models/user';
import { UserService } from '../user/user.service';

@Directive({
  selector: '[appIfUserDirective]'
})
export class IfUserDirective {

  constructor(private userService: UserService, private el: ElementRef) { 
    this.userService.user$.subscribe((user: User) =>{
      if (user){
        // show
      this.el.nativeElement.classList.remove("d-none")
      console.log( "remove d-none ", user);
    }else {
      // hide
      this.el.nativeElement.classList.add("d-none")
      console.log( "remove d-none ", user);
    }
    })
  }

}
