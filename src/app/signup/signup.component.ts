import { CommonModule } from '@angular/common';
import { Component,HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-signup',
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.css' ],
  standalone: true,
  imports: [CommonModule, FormsModule]
})


export class SignupComponent  {

  top:any;
  left:any;
  expand=false;

  constructor() {}


  @HostListener('document:click', ['$event'])
  onClick($event:any) {
     this.expand=true;
     setTimeout(() => {
      this.expand=false;
     }, 500)
 }

@HostListener('document:mousemove', ['$event'])
  onMousemove($event:any) {
    this.top=($event.pageY - 10)+ "px";
    this.left= ($event.pageX - 10)+ "px";
 }


}