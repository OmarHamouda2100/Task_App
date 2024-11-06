import { Component, inject } from '@angular/core';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  private taskService = inject(TaskService)

  Tasks = this.taskService.readTasks()

  onComplated(index: number) {
    this.Tasks().splice(index , 1)
     this.taskService.addToLOcalStorage()
  }
}
