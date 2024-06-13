import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-perfume',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './perfume.component.html',
  styleUrl: './perfume.component.css'
})
export class PerfumeComponent {

}
