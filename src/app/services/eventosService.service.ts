import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Time } from '@angular/common';

export interface Eventos{
  idEvento: String;
  titulo: String;
  descricao: String;
  dataIni: Date;
  dataFim: Date;
  horaIni: Time;
  horaFim: Time;
  quantidadePar: number;
  local: String;
}

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private url = 'http://192.168.0.113/ionic/Api/apiEvento.php';
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Eventos]>(this.url);
  }
  getMeusEventos(idUser: String){
    return this.http.get<[Eventos]>(this.url+ '?idUser=' + idUser);
  }
  get(id: String){
    return this.http.get<Eventos>(this.url + '?idEvento=' + id);
  }
  create(body){
    console.log("Criando");
    return this.http.post(this.url,body);
  }
  update(body){
    console.log("Alterando");
    return this.http.put(this.url, body);
  }
  delete(id: String){
    console.log(id);
    return this.http.delete(this.url + '?idEvento=' + id);
  }
}
