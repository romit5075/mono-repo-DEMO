import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tableData = [
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Tom Brown', age: 40, city: 'Chicago' },
    { id: 4, name: 'Emily Davis', age: 35, city: 'San Francisco' },
    { id: 5, name: 'Michael Wilson', age: 28, city: 'Seattle' }
  ];
}
