import { Component } from '@angular/core';
import { GameService } from 'src/app/game.service';

import { Subscription, interval } from 'rxjs';
import { AuthService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent {

  constructor (private gameService: GameService, private authService: AuthService) {
  }

  //obtener las monedas:
  get monedas() {
    return this.gameService.monedas;
  }

  //Obtener las monedas por segundo:
  get monedasPorSegundo() {
    return this.gameService.monedasPorSegundo;
  }

  //Metodo para aumentar 1 moneda:
  aumentarMonedas(){
    this.gameService.aumentarMonedas();
  }

  interval!: Subscription;
  
  //Metodo para actualizar las monedas del usuario cada 1 segundos:
  ngOnInit() {

    this.interval = interval(1000).subscribe(() => {//Intervalo
      const coins = this.gameService.monedas;
      const coinsPorSegundo = this.gameService.monedasPorSegundo;

      //Llamo al metodo updateCoins del servicio:
      this.authService.updateCoins(coins, coinsPorSegundo).subscribe(
        () => {
          console.log('Monedas guardadas con éxito');
        },
        (error) => {
          console.log('Error al guardar las monedas:', error);
        }
      );
    });
  }

  //Destruccion del onInit anterior:
  ngOnDestroy(): void {
    this.interval.unsubscribe();
  }

}
