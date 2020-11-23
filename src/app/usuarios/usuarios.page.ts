import { NewUserPage } from './../new-user/new-user.page';
import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../services/user.service';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  users: User[];
  user: User;
  idUser: String;

  constructor( 
    private service: UserService, 
    private alert: AlertController,
    private modalCrtl: ModalController,
    private navCT: NavController,
    private acRoute: ActivatedRoute,

    ) {}
  
  ngOnInit(){
    this.service.getAll().subscribe(response => {
      this.users = response;
      console.log(this.users);
    });
    this.acRoute.params.subscribe((data: any)=>{
      this.idUser= data.id;
    });
    this.service.get(this.idUser).subscribe((response) => {
      this.user = response;
    });
  }
  addUser(){
    this.modalCrtl.create({
      component: NewUserPage,
      componentProps: {
        'titulo': "Novo Usuário"
      }
    }).then( modal => modal.present());
    this.atualiza();
  }
  editUser(us: User){
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
    this.atualiza();
  }
  removeUser(id: String){
    this.alert.create({
      header: 'Apagar',
      message: 'Realmente deseja apagar este usuário ?',
      buttons:[{
        text: 'Sim',
        handler: () => {
            this.service.delete(id).subscribe(() => {
            this.users = this.users.filter(std => std.id !== id);
          });
        }
      },{text: 'Não'}]
    }).then(alertE1 => alertE1.present());
    this.atualiza();
  }
  voltar(){
    if(this.user.admin){
      this.navCT.navigateBack('/home-adm/'+ this.user.id);
    }else{
      this.navCT.navigateBack('/home-users/'+ this.user.id);
    }
  }
  public atualiza(){
    this.service.getAll().subscribe(response => {
      this.users = response;
    });
  }
  dorefresh(event){
    setTimeout(() => {
      this.atualiza();
      event.target.complete();
    }, 500);
  }
}
