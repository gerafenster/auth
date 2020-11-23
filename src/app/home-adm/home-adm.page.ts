import { NovoEventoPage } from './../new-evento/novo-evento.page';
import { NewUserPage } from './../new-user/new-user.page';
import { UserService, User } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.page.html',
  styleUrls: ['./home-adm.page.scss'],
})
export class HomeADMPage implements OnInit {

  id: String;
  user: User;
  nome: String;
  constructor(
    private acRoute: ActivatedRoute,
    private service: UserService,
    private navCT: NavController,
    private modalCrtl: ModalController,
    
     ) { }

  ngOnInit() {
    this.acRoute.params.subscribe((data: any)=>{
      this.id= data.id;
    });
    this.service.get(this.id).subscribe((response) => {
      this.user = response;
      this.nome=this.user.nome;
    });
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
  listUser(){
    this.navCT.navigateForward('/usuarios/'+ this.user.id);
  }
  addUser(){
    this.modalCrtl.create({
      component: NewUserPage,
      componentProps: {
        'titulo': "Novo Usuário"
      }
    }).then( modal => modal.present());
  }
  meusEventos(){
    this.navCT.navigateForward('/meus-eventos/'+ this.id);
  }
  listEvento(){
    this.navCT.navigateForward('/eventos/'+ this.user.id);
  }
  addEvento(){
    this.modalCrtl.create({
      component: NovoEventoPage,
      componentProps: {
        'tituloPage': "Novo Evento"
      }
    }).then( modal => modal.present());
  }
  logout(){
    this.navCT.navigateRoot('/home');
  }
  registros(){
    this.navCT.navigateForward('/registros');
  }
}
