import { Component } from '@angular/core';
import { TypewriterComponent } from '../typewriter/typewriter.component';
import { NgOptimizedImage } from '@angular/common'
import { ScrollToDirective } from './diretiva.directive';
import { ThirdSectionComponent } from '../third-section/third-section.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TypewriterComponent,
    NgOptimizedImage,
    ScrollToDirective,
    ThirdSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})

export class HomeComponent {

  
  image = '../../../assets/img/perfil-1.png';


}



