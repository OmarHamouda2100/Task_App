import { Injectable, signal } from '@angular/core';
import { Task } from '../task.modal';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
tasks = signal<Task[]>([
// {
//   taskId : Math.random().toString(),
//   taskName : 'Learn HTML And CSS',
//   taskDiscription: 'Learn, Use And Master HTML And CSS TO Design Creative Applactions '
// },
// {
//   taskId : Math.random().toString(),
//   taskName : 'Learn JS',
//   taskDiscription: 'Learn, Use And Master JS TO Biuld Creative Applactions '
// },
// {
//   taskId : Math.random().toString(),
//   taskName : 'Learn Angular',
//   taskDiscription: 'Learn, Use And Master JS TO Biuld Creative Applactions '
// },
])
readTasks = this.tasks.asReadonly

constructor() {
const tasks = localStorage.getItem('tasks')

 if(tasks) {
  this.tasks.set(JSON.parse(tasks))
 }
}



addTask(newTask : Task) {
  this.tasks.update((task) => [...task, newTask])

  this.addToLOcalStorage()
}

removeTask(id : string , index : number) {
  if (id === this.tasks()[index].taskId) {
    this.tasks().splice(index , 1)
  }
}

addToLOcalStorage() {
  localStorage.setItem('tasks', JSON.stringify(this.tasks()))
}

}
