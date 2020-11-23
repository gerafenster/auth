import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface UserPart{
  id: String;
  nome: String;
  login: String;
  senha: String;
  genero: String;
  email: String;
  datanasc: Date;
  admin: Boolean;
}
export interface Participantes{
  idUser: String;
  idEvento: String;
  chave: String; 
}

@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {

  private url = 'http://192.168.0.113/ionic/Api/apiParticipantes.php';
  
  constructor(private http: HttpClient) { }

  getPart(idEvento: String, codigo: Number){
    return this.http.get<[UserPart]>(this.url+ '?idEvento=' +idEvento + "&codigo=" + codigo);
  }
  getAll(idEvento: String){
    return this.http.get<[UserPart]>(this.url+ '?idEvento=' + idEvento  + "&cod=1");
  }
  getQR(idEvento: String, idUser: String){
    return this.http.get<Participantes>(this.url+ '?idEvento=' +idEvento + "&idUser=" + idUser);
  }
  create(body){
    console.log("Criando");
    return this.http.post(this.url,body);
  }

  delete(id: String){
    return this.http.delete(this.url + '?id=' + id);
  }

}
