import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-service.service';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
  pass: string = "";

  constructor(private authService: AuthService, private router: Router, private gameService: GameService) {}

  //Metodo para logearse con email y pass:
  login() {
    this.authService.loginUser(this.email, this.pass).subscribe((response) => {
        const token = response.token;
        //Devolucion de la respuesta de la BD:
        this.gameService.monedas = response.coins;
        this.gameService.monedasPorSegundo = response.coinsPorSegundo;
        this.gameService.precios = response.precios;

        localStorage.setItem('token', token);//Guardo el token en el local storage
        this.router.navigate(['/game']);//Redirige al usuario
      },
      (error) => {
        console.log(error);
      }
    );

  }
  
}
