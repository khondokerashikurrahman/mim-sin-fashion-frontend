import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-storefront-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './storefront-layout.component.html',
  styleUrl: './storefront-layout.component.scss'
})
export class StorefrontLayoutComponent {
  menuOpen = false;

  toggleMobileMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMobileMenu(): void {
    this.menuOpen = false;
  }
}
