import {Component, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.elementRef.nativeElement.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(this.elementRef.nativeElement);
  }
}
