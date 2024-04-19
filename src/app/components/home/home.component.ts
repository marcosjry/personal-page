import { Component } from '@angular/core';
import { TypewriterComponent } from '../typewriter/typewriter.component';
import { NgOptimizedImage } from '@angular/common'
import { ScrollToDirective } from './diretiva.directive';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TypewriterComponent,
    NgOptimizedImage,
    ScrollToDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})

export class HomeComponent {

  
  image = '../../../assets/img/perfil-1.png';


}



