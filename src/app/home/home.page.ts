import { async } from '@angular/core/testing';
import { UserService, User } from './../services/user.service';

import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

import { rejects } from 'assert';
import { NavController, ToastController, NavParams, AlertController, LoadingController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  login: String;
  senha: String;
  users: any;

  constructor(
    private navCT: NavController,
    private toastCT: ToastController,
    private modal: ModalController,
    private loadingCT: LoadingController,

    private service: UserService
  ) {}
  
  ngOnInit(){

  }
  async fazLogin(){
    
    if(this.login == ""){
      this.presentToast("Nome é obrigatório!");
    }else if(this.login == ""){
      this.presentToast("esqueceu da senha");
    }else{
      const loader = await this.loadingCT.create({
        message: 'Por favor aguarde...',
      });
      loader.present();
      
      this.service.login(this.login, this.senha).subscribe(response => {
        this.loadingCT.dismiss();
        this.users = response
        if(this.users != null){
          if(this.users.admin == 1){
            this.navCT.navigateRoot('/home-adm/'+ this.users.id);
          }else{
            this.navCT.navigateRoot('/home-users/'+ this.users.id);
          }  
        }
        })
      }
  }
  irUsuarios(){
    this.navCT.navigateRoot('/novos-participantes');
  }
  irEventos(){
    this.navCT.navigateRoot('/meus-eventos');
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
