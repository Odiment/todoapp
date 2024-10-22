import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { FooterComponent } from './todos/components/footer/footer.component';
import { MainComponent } from './todos/components/main/main.component';
import { HeaderComponent } from './todos/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodosComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todoapp';
}
