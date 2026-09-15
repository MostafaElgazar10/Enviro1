import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  customersCount = 0;

ngOnInit(): void {
  const target = 2044;
  const duration = 2000; // 2 seconds
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
