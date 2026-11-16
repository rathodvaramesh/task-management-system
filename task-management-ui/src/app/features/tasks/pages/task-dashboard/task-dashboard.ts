import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-dashboard.html',
  styleUrl: './task-dashboard.scss',
})
export class TaskDashboard {
  private taskService = inject(TaskService);
  private cdr = inject(ChangeDetectorRef);

  isEditMode = false;
  editingTaskId: number | null = null;

  tasks: Task[] = [];

  task: Task = {
    title: '',
    description: '',
    status: 'OPEN',
    priority: 'MEDIUM'
  };

  constructor() {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;

      this.cdr.detectChanges();

      console.log('Tasks loaded:', data);
      console.log('Tasks assigned:', this.tasks);
    });
  }

  saveTask(): void {

    if (this.isEditMode) {

      this.taskService
        .updateTask(
          this.editingTaskId!,
          this.task
        )
        .subscribe(() => {

          this.resetForm();

          this.loadTasks();

        });

    } else {

      this.taskService
        .createTask(this.task)
        .subscribe(() => {

          this.resetForm();

          this.loadTasks();

        });

    }
  }

  deleteTask(id: number): void {

    const confirmed =
      confirm('Delete this task?');

    if (!confirmed) {
      return;
    }

    this.taskService
      .deleteTask(id)
      .subscribe(() => {

        this.loadTasks();

      });
  }

  editTask(task: Task): void {

    this.isEditMode = true;

    this.editingTaskId = task.id!;

    this.task = {
      ...task
    };
  }

  resetForm(): void {

    this.isEditMode = false;

    this.editingTaskId = null;

    this.task = {
      title: '',
      description: '',
      status: 'OPEN',
      priority: 'MEDIUM'
    };
  }
}
