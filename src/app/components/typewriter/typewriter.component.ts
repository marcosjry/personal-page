import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [],
  templateUrl: './typewriter.component.html',
  styleUrl: './typewriter.component.scss'
})
export class TypewriterComponent implements AfterViewInit {
  private texts: string[] = ['Information Systems Student', 'JavaScript', 'Python', 'C'];
  private i: number = 0;
  private k: number = 0;
  private elemento!: HTMLElement;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.escreverNoHtml("p");
  }

  escreverNoHtml(elementoId: string) {
    this.elemento = this.el.nativeElement.querySelector(elementoId);
    this.escrever();
  }

  escrever() {
    if (this.k < this.texts[this.i].length) {
      this.elemento.innerHTML += this.texts[this.i].charAt(this.k);
      this.k++;
      setTimeout(() => this.escrever(), 140); // Ajuste o tempo aqui
    } else {
      setTimeout(() => this.apagar(), 2000); // Chama a função apagar depois que a string for escrita e seta o tempo que a string pode ser visualizada
    }
  }
  apagar() {
    if (this.k > 0) {
      this.k--;
      this.elemento.innerHTML = this.texts[this.i].substring(0, this.k);
      setTimeout(() => this.apagar(), 75); // Ajusta o tempo aqui
    } else {
      this.i = (this.i + 1) % this.texts.length; // Vai para a próxima string no vetor
      setTimeout(() => this.escrever(), 140); // Começa a escrever a próxima string
    }
  }
}
