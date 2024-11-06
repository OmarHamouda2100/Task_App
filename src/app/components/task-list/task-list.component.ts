import { Component, inject } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
isAdd = false

onAdd() {
  this.isAdd = true

  console.log("add")
}

onClose() {
  this.isAdd = false
}
}
