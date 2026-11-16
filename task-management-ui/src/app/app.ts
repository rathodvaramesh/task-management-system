import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Default } from '../components/default/default';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Task Management System');
}
