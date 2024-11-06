import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../../services/task.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  private taskService = inject(TaskService)

@Output() close  = new EventEmitter<void>()
taskName=  signal<string>("")
taskDiscription = signal("")


  onSubmit() {
    this.onAddTask()

    this.onClose()
  }

  onClose() {
    this.close.emit()
  }

  onAddTask() {
    this.taskService.addTask({
      taskId: Math.random().toString(),
      taskName: this.taskName(),
      taskDiscription : this.taskDiscription()
    })
  }

}
