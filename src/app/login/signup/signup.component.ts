import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  name: string = "";
  email: string = "";
  pass: string = "";
  precios = {
    "cursor": 10,
    "cliente": 15,
    "banquero": 20,
    "granja": 25,
    "mina": 30
  }
  
  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    
    this.authService.createUser(this.email, this.name, this.pass, this.precios).subscribe(() => {
        //Redirige al usuario a la pantalla de /login despues de registrarse:
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
        
      }
    );
  }

}
