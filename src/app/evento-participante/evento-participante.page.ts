import { EventosService, Eventos } from './../services/eventosService.service';
import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Time } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-evento-participante',
  templateUrl: './evento-participante.page.html',
  styleUrls: ['./evento-participante.page.scss'],
})
export class EventoParticipantePage implements OnInit {

  idEvento: String;
  evento: Eventos;
  titulo: String;
  descricao: String;
  dataIni: Date;
  dataFim: Date;
  horaIni: Time;
  horaFim: Time;
  quantidadePar: number;
  local: String;
  pageTitulo: String;
  

  constructor(
    private acRoute: ActivatedRoute,
    private navCT: NavController,
    private modalCrtl: ModalController,
    private service: EventosService,

    ) { }

  ngOnInit() {
    this.acRoute.params.subscribe((data: any)=>{
      this.idEvento= data.idEvento;
    });
    this.service.get(this.idEvento).subscribe((response) => {
      this.evento = response;
      this.titulo = this.evento.titulo;
      this.descricao = this.evento.descricao;
      this.local = this.evento.local;
      this.dataIni = this.evento.dataIni;
      this.dataFim = this.evento.dataFim;
      this.horaIni = this.evento.horaIni;
      this.horaFim = this.evento.horaFim;
      this.quantidadePar = this.evento.quantidadePar;
    });
  }
  addParticipantes(){
      this.pageTitulo="Adicionar participantes"
      console.log(this.idEvento);
      this.navCT.navigateForward('/novos-participantes/'+this.idEvento + '/' + this.pageTitulo);
  }
  listParticipantes(){
    this.pageTitulo="Lista de participantes"
    console.log(this.idEvento);
    this.navCT.navigateForward('/novos-participantes/'+this.idEvento + '/' + this.pageTitulo);
}
fechar(){
  this.navCT.navigateBack('/eventos');
}



}
