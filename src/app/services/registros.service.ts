import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

export interface Registro{
  idRegistro: String;
  part_idUser: String;
  part_idEvento: String;
  part_chave: String;
  dataRegistro: Date;
  Acesso: String;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  private url = 'http://192.168.0.113/ionic/Api/apiRegistros.php';
  //private urllogin = 'http://192.168.0.113/ionic/Api/login.php';
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Registro]>(this.url);
  }
  /*getLiberado(){
    return this.http.get<[Registro]>(this.url);
  }

  getNegado(id: String){
    return this.http.get<Registro>(this.url + '?id=' + id);
  }*/
}
