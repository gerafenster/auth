import { NewUserPage } from './../new-user/new-user.page';
import { UserService, User } from './../services/user.service';
import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-users',
  templateUrl: './home-users.page.html',
  styleUrls: ['./home-users.page.scss'],
})
export class HomeUsersPage implements OnInit {

  idUser: String;
  user: User;
  nome: String;

  constructor(
    private navCT: NavController,
    private acRoute: ActivatedRoute,
    private service: UserService,
    private modalCrtl: ModalController,

  ) { }

  ngOnInit() {
    this.acRoute.params.subscribe((data: any)=>{
      this.idUser= data.id;
    });
    this.service.get(this.idUser).subscribe((response) => {
      this.user = response;
      this.nome = this.user.nome;
    });
    
  }
  logout(){
    this.navCT.navigateRoot('/home');
  }
  meusDados(us: User){
      this.modalCrtl.create({
        component: NewUserPage,
        componentProps: {
          'id': us.id,
          'nome': us.nome,
          'login': us.login,
          'senha': us.senha,
          'genero': us.genero,
          'email': us.email,
          'datanasc': us.datanasc,
          'admin': us.admin,
          'titulo': "Alterar Usuário"
        }
      }).then( modal => modal.present());
  }
  meusEventos(){
    this.navCT.navigateForward('/meus-eventos/'+ this.idUser);
  }

}
