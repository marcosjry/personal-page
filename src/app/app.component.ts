import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TypewriterComponent } from './components/typewriter/typewriter.component';
import { Header2Component } from './components/header-2/header-2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    Header2Component,
    HomeComponent,
    TypewriterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landing-page';
}
