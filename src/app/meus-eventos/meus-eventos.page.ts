import { UserService, User } from './../services/user.service';
import { QrcodePage } from './../qrcode/qrcode.page';
import { EventosService, Eventos } from './../services/eventosService.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ParticipantesService, Participantes } from '../services/participantes.service';

@Component({
  selector: 'app-meus-eventos',
  templateUrl: './meus-eventos.page.html',
  styleUrls: ['./meus-eventos.page.scss'],
})
export class MeusEventosPage implements OnInit {

  eventoslist: Eventos[];
  chaveParcial: String= null;
  chave: String = null;
  id: String
  participante: Participantes;
  user: User;

  constructor(
    private service: EventosService,
    private modalCrtl: ModalController,
    private navPar: NavController,
    private acRoute: ActivatedRoute,
    private servicePart: ParticipantesService,
    private serviceUser: UserService,
    private navCT: NavController,

  ) { }
  ngOnInit() {
    this.acRoute.params.subscribe((data: any)=>{
      this.user = data; 
      this.id = data.idUser;
    });
    this.service.getMeusEventos(this.id).subscribe(response => {
    this.eventoslist = response;
    });
  }
  geraQR(idEvento: String){
    this.chave= this.generateID(10);
    this.servicePart.getQR(idEvento,this.id).subscribe(response => {
      this.chaveParcial =response.chave;
      this.participante = response;
      this.chave = this.chave+"_"+this.chaveParcial;
      console.log(this.chave);
      this.modalCrtl.create({
        component: QrcodePage,
        componentProps: {
          'chave': this.chave
      }
      }).then( modal => modal.present());
      });  
}
//funções paara gerar chave aleartoria.
dec2hex(dec){
  return ('0'+ dec.toString(16)).substr(-2);
}
generateID(len){
  var arr = new Uint8Array((len || 40)/ 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr,this.dec2hex).join('');
}

voltar(){
  if(this.user.admin){
    this.navCT.navigateBack('/home-adm/'+ this.id);
  }else{
    this.navCT.navigateBack('/home-users/'+ this.id);
  }
}


  //funções do grid.
  atualiza(){
    this.service.getAll().subscribe(response => {
      this.eventoslist = response;
    });
  }
  dorefresh(event){
    setTimeout(() => {
      this.atualiza();
      event.target.complete();
    }, 500);
  }


}
