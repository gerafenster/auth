import { EventosService } from './../services/eventosService.service';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { ModalController, ToastController, LoadingController, AlertController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-novo-evento',
  templateUrl: './novo-evento.page.html',
  styleUrls: ['./novo-evento.page.scss'],
})
export class NovoEventoPage implements OnInit {
  idEvento: number;
  titulo: String;
  tituloPage: String;
  descricao: String;
  dataIni: Date;
  dataFim: Date;
  horaIni: Time;
  horaFim: Time;
  quantidadePar: number;
  local: String;
  ocultaButton;
  constructor(
    private modal: ModalController,
    private toastCT: ToastController,
    private loadingCT: LoadingController,
    private alertCT: AlertController,
    private navpar: NavParams,
    private service: EventosService) { 
    this.tituloPage = navpar.get('tituloPage');
    this.titulo = navpar.get('titulo');
    this.descricao = navpar.get('descricao');
    this.local = navpar.get('local');
    this.dataFim = navpar.get('dataFim');
    this.dataIni = navpar.get('dataIni');
    this.horaFim = navpar.get('horaFim');
    this.horaIni = navpar.get('horaIni');
    this.quantidadePar = navpar.get('quantidadePar');
    this.idEvento = navpar.get('idEvento');
  }

  ngOnInit() {
  }

  async validaCampos(){
    if(this.titulo == ""){
      this.presentToast("Titulo é obrigatório!");
    }else if(this.descricao == ""){
      this.presentToast("Descrição é obrigatório!");
    }else if(this.local == ""){
      this.presentToast("Local é obrigatório!");
    }else if(this.dataFim == null){
      this.presentToast("Data final é obrigatório!");
    }else if(this.dataIni == null){
      this.presentToast("Data de inicio é obrigatório!");
    }else if(this.horaFim == null){
      this.presentToast("Hora final é obrigatório!");
    }else if(this.horaIni == null){
      this.presentToast("Hora inicial é obrigatório!");
    }else if(this.quantidadePar == null){
      this.presentToast("Quantidade de participantes é obrigatório!");
    }else{
      
      this.ocultaButton = true;
      const loader = await this.loadingCT.create({
        message: 'Por favor aguarde...',
      });
      loader.present();
     
      if(this.idEvento>=1){
        this.updateEvento();
      }else {
        this.addEvento();
        console.log(this.idEvento);
      }
    }
  }
    private addEvento(){
      let body = {
        titulo: this.titulo,
        descricao: this.descricao,
        local: this.local,
        dataIni: this.dataIni,
        dataFim: this.dataFim,
        horaIni: this.horaIni,
        horaFim: this.horaFim,
        quantidadePar: this.quantidadePar
      }
      //console.log(body);
      this.service.create(body).subscribe( data =>{
        //console.log(body);
        this.loadingCT.dismiss();
        if(data['result'] == 0){
          this.presentToast("Dados Incorretos");
        }else{
          this.presentAlert("Cadastrado com sucesso!","Sucesso!");
          this.modal.dismiss();
        }
      }); 
    }
    private updateEvento(){
      let body = {
        idEvento:this.idEvento,
        titulo: this.titulo,
        descricao: this.descricao,
        local: this.local,
        dataIni: this.dataIni,
        dataFim: this.dataFim,
        horaIni: this.horaIni,
        horaFim: this.horaFim,
        quantidadePar: this.quantidadePar
      }
      this.service.update(body).subscribe( data =>{
        console.log(body);
        this.loadingCT.dismiss();
        this.presentAlert("Alterado com sucesso!","Sucesso!");
        this.modal.dismiss();
      }); 
    }





  desativaButton(){
    this.ocultaButton = false;
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
