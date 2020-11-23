import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

export interface User{
  id: String;
  nome: String;
  login: String;
  senha: String;
  genero: String;
  email: String;
  datanasc: Date;
  admin: Boolean;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://192.168.0.113/ionic/Api/apiUser.php';
  private urllogin = 'http://192.168.0.113/ionic/Api/login.php';
  constructor(private http: HttpClient) { }


  getAll(){
    return this.http.get<[User]>(this.url);
  }

  get(id: String){
    return this.http.get<User>(this.url + '?id=' + id);
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
    return this.http.delete(this.url + '?id=' + id);
  }
// Função para login
login(login:String, senha:String){
  console.log("Login");
  return this.http.get<User>(this.urllogin+ '?login=' + login+ '&senha=' + senha);
}







}
