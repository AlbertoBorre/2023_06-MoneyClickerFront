import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // URL según configuración del servidor backend:
  private apiUrl = 'http://localhost:4000/api/auth/';

  constructor(private http: HttpClient) { }

  // Metodo para crear un usuario cuando se registra:
  createUser(email: string, name: string, pass: string, precios: any): Observable<any> {
    const url = this.apiUrl + 'new';
    const body = {
      "email": email,
      "name": name,
      "password": pass,
      "coins": 0,
      "coinsPorSegundo": 0,
      "precios": precios
    };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(url, body, httpOptions);
  }

  //Metodo para que el usuario haga login:
  loginUser(email: string, pass: string): Observable<any> {
    const url = this.apiUrl;
    const body = {
      "email": email,
      "password": pass
    };
    const httpOptions = {//cabecera
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(url, body, httpOptions);
  }

  //Metodo para enviar la peticion al back y actualizar las monedas del user:
  updateCoins(coins: number, coinsPorSegundo: number): Observable<any> {
    const url = this.apiUrl + 'coins';//ruta de mi api
    const body = {
      coins: coins,
      coinsPorSegundo: coinsPorSegundo
    };

    const token = localStorage.getItem('token');//Token del usuario
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token': `${token}`
      })
    };
    
    return this.http.patch(url, body, httpOptions);
  }

  //Metodo para actualizar los precios:
  updatePrecios(precios: any): Observable<any> {
    const url = this.apiUrl + 'precios';
    const body = {
      precios: precios
    };

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token': `${token}`
      })
    };
  
    return this.http.patch(url, body, httpOptions);
  }

  //Metodo para obtener las monedas del usuario:
  getUserCoins(): Observable<any> {
    const url = this.apiUrl + 'coins';
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token': `${token}`
      })
    };
  
    return this.http.get(url, httpOptions);
  }

  //Metodo para traerme el ranking de los 10 usuarios con mas monedas:
  getTopUsers(): Observable<any> {
    const url = this.apiUrl + 'rank';
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    return this.http.get(url, httpOptions);
  }

}
