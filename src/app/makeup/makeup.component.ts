import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-makeup',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './makeup.component.html',
  styleUrl: './makeup.component.css'
})
export class MakeupComponent {

}
