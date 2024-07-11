import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { RouterModule } from '@angular/router';
import { BoardComponent } from '../board/board.component';



@NgModule({
  declarations: [
    TodoListComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoListComponent,
        pathMatch: 'full'
      }
    ])
  ]
})
export class TodoListModule { }
