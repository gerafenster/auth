import { UsuariosPage } from './../usuarios/usuarios.page';
import { async } from '@angular/core/testing';
import { UserService, User } from './../services/user.service';
import { ToastController, LoadingController, AlertController, NavParams} from '@ionic/angular'
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';



@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.page.html',
  styleUrls: ['./new-user.page.scss'],
})


export class NewUserPage implements OnInit {
    titulo: String;
    id: number=0 ;
    nome: String ;
    login: String;
    genero: String;
    email: String;
    datanasc: Date;
    senha: String;
    Csenha: String;
    usuario: User;
    admin: Boolean;
    ocultaButton;
  
  constructor(
    private modal: ModalController,
    private toastCT: ToastController,
    private loadingCT: LoadingController,
    private alertCT: AlertController,
    private navpar: NavParams,
    private service: UserService) {
      this.titulo = navpar.get('titulo');
      this.nome = navpar.get('nome');
      this.login = navpar.get('login');
      this.senha = navpar.get('senha');
      this.datanasc = navpar.get('datanasc');
      this.genero = navpar.get('genero');
      this.email = navpar.get('email');
      this.id = navpar.get('id');
      this.admin= navpar.get('admin');
      console.log(this.admin);
     }

  ngOnInit() {
  }
  desativaButton(){
    this.ocultaButton = false;
  }
  async validaCampos(){
    if(this.nome == ""){
      this.presentToast("Nome é obrigatório!");
    }else if(this.login == ""){
      this.presentToast("Login é obrigatório!");
    }else if(this.email == ""){
      this.presentToast("Email é obrigatório!");
    }else if(this.datanasc == null){
      this.presentToast("Data de nascimento é obrigatório!");
    }else if(this.genero == ""){
      this.presentToast("Genero é obrigatório!");
    }else if(this.senha == ""){
      this.presentToast("Senha é obrigatório!");
    }else if(this.Csenha == ""){
      this.presentToast("Confirme a senha!");
    }else if(this.Csenha != this.senha){
      this.presentToast("Senhas diferentes!");
    }else{
      if(this.admin != true){
        this.admin=false;
      }
      this.ocultaButton = true;
      const loader = await this.loadingCT.create({
        message: 'Por favor aguarde...',
      });
      loader.present();
      if(this.id>=1){
        this.updateUser();
      }else {
        this.addUser();
      }         
    }
  }
  private addUser(){
    let body = {
      nome: this.nome,
      email: this.email,
      genero: this.genero,
      datanasc: this.datanasc,
      login: this.login,
      senha: this.senha,
      admin: this.admin
    }
    console.log(body);
    this.service.create(body).subscribe( data =>{
      this.loadingCT.dismiss();
      if(data['result'] == 0){
        this.presentToast("Dados Incorretos");
      }else{
        this.presentAlert("Cadastrado com sucesso!","Sucesso!");
        this.fechar();
      }
    }); 
  }
  private updateUser(){
    let body = {
      id: this.id,
      nome: this.nome,
      email: this.email,
      genero: this.genero,
      datanasc: this.datanasc,
      login: this.login,
      senha: this.senha,
      admin: this.admin
    }
    this.service.update(body).subscribe( data =>{
      this.loadingCT.dismiss();
      this.presentAlert("Alterado com sucesso!","Sucesso!");
      this.fechar();
    }); 
  }
  async presentAlert(m,a) {
    const alert = await this.alertCT.create({
      header: a,
      message: m,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast(a){
    const toast = await this.toastCT.create({
      message: a,
      duration: 1500,
      position: 'middle'
    });
    toast.present();
  }
  fechar(){
    this.modal.dismiss();
  }
}
