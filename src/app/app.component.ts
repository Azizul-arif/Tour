import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToursComponent } from './tours/tours.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToursComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tours';
}
