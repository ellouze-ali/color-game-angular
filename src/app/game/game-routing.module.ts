import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [{ path: '', component: GameComponent, children:[
  {path: 'new', component: NewComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
