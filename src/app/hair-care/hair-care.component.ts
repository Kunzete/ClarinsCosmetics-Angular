import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-hair-care',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './hair-care.component.html',
  styleUrl: './hair-care.component.css'
})
export class HairCareComponent {

}
