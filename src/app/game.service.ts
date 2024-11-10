import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  monedas: number = 0;
  monedasPorSegundo: number = 0;

  precios = {
    "cursor": 10,
    "cliente": 15,
    "banquero": 20,
    "granja": 25,
    "mina": 30
  }

  //Metodo para aumentar 1 moneda:
  aumentarMonedas(): void {
    this.monedas++;
  }

  //Metodo para restar las monedas al comprar y sumar las monedas por segundo:
  restarMonedas(valorRestado: number, valorSumado: number): boolean {
    if (this.monedas >= valorRestado) {
      this.monedas -= valorRestado;
      this.monedasPorSegundo += valorSumado;
      return true;
    }
    return false;
  }

  //Suma de monedas por segundo:
  IntervaloSegundos() {
    interval(1000).subscribe(() => {
      this.monedas += this.monedasPorSegundo;
    });
  }

}
