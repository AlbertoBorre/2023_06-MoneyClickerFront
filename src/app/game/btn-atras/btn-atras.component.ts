import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-atras',
  templateUrl: './btn-atras.component.html',
  styleUrls: ['./btn-atras.component.css']
})
export class BtnAtrasComponent {

  constructor(private router: Router) { }

  inicio() {
    
    this.router.navigate(['/login']);//Redirige al login (inicio)
  }

}
