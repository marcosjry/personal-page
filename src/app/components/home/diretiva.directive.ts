import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive ({
    selector: '[appScrollTo]',
    standalone: true
})

export class ScrollToDirective {
    @Input('appScrollTo')
    scrollToElementId!: string;

    constructor(private el: ElementRef) {}

    @HostListener('click')
    onClick() {
        const element = document.getElementById(this.scrollToElementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'});
        }
    }
    
}