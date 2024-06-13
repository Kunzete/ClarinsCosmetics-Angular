import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-face',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './face.component.html',
  styleUrl: './face.component.css'
})
export class FaceComponent {

}
