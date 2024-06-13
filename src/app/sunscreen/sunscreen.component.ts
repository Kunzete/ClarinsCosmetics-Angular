import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sunscreen',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './sunscreen.component.html',
  styleUrl: './sunscreen.component.css'
})
export class SunscreenComponent {

}
