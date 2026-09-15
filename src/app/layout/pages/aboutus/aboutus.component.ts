import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  customersCount = 0;

ngOnInit(): void {
  const target = 2044;
  const duration = 1500; // 2 seconds
  const startTime = Date.now();

  const counter = setInterval(() => {

    const elapsed = Date.now() - startTime;

    const progress = Math.min(elapsed / duration, 1);

    this.customersCount = Math.floor(progress * target);

    if (progress === 1) {
      clearInterval(counter);
    }

  }, 10);
}

}
