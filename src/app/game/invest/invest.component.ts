import { Component } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { AuthService } from 'src/app/auth-service.service';
import { GameService } from 'src/app/game.service';


@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent {

  constructor(private gameService: GameService, private authService: AuthService) {

  }

  //GETTERS de mis investigaciones:
  get precioCursor() {
    return this.gameService.precios.cursor
  }

  get precioCliente() {
    return this.gameService.precios.cliente
  }

  get precioBanquero() {
    return this.gameService.precios.banquero
  }

  get precioGranja() {
    return this.gameService.precios.granja
  }

  get precioMina() {
    return this.gameService.precios.mina
  }


  addInvest(valorRestado: number, valorSumado: number, tipo: string): void {
    let resultadoOperacion: boolean = this.gameService.restarMonedas(valorRestado, valorSumado);

    if (resultadoOperacion) {
      switch (tipo) {
        case "cursor":
          this.gameService.precios.cursor += Math.trunc(this.precioCursor * 0.2);
          break;
        case "cliente":
          this.gameService.precios.cliente += Math.trunc(this.precioCliente * 0.2);
          break;
        case "banquero":
          this.gameService.precios.banquero += Math.trunc(this.precioBanquero * 0.2);
          break;
        case "granja":
          this.gameService.precios.granja += Math.trunc(this.precioGranja * 0.2);
          break;
        case "mina":
          this.gameService.precios.mina += Math.trunc(this.precioMina * 0.2);
          break;
      }
    } else {
    }
  }

  interval!: Subscription;

  ngOnInit(): void {
    this.gameService.IntervaloSegundos();
    this.interval = interval(3000).subscribe(() => {
      const precios = this.gameService.precios;

      this.authService.updatePrecios(precios).subscribe(
        () => {
          console.log('Precios guardados con éxito');
        },
        (error) => {
          console.log('Error al guardar los precios:', error);
        }
      );
    });
  }

  ngOnDestroy(): void {
    this.interval.unsubscribe();
  }

}
