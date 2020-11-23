import { UserService, User } from './../services/user.service';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { NovoEventoPage } from './../new-evento/novo-evento.page';
import { EventosService, Eventos } from '../services/eventosService.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  eventoslist: Eventos[];
  tituloPage: String;
  idUser: String;
  user: User;
  
  constructor(
    private service: EventosService, 
    private alert: AlertController,
    private modalCrtl: ModalController,
    private navCT: NavController,
    private acRoute: ActivatedRoute,
    private serviceUser: UserService,

  ) { }

  ngOnInit(){
    this.service.getAll().subscribe(response => {
      this.eventoslist = response;
    });
    this.acRoute.params.subscribe((data: any)=>{
      this.idUser= data.id;
    });
    this.serviceUser.get(this.idUser).subscribe((response) => {
      this.user = response;
    });
  }

  addEventos(){
    this.modalCrtl.create({
      component: NovoEventoPage,
      componentProps: {
        'tituloPage': "Novo Evento"
      }
    }).then( modal => modal.present());
  }
  editEventos(ev: Eventos){
    this.modalCrtl.create({
      component: NovoEventoPage,
      componentProps: {
        'idEvento': ev.idEvento,
        'titulo': ev.titulo,
        'descricao': ev.descricao,
        'local': ev.local,
        'dataIni': ev.dataIni,
        'dataFim': ev.dataFim,
        'horaIni': ev.horaIni,
        'horaFim': ev.horaFim,
        'quantidadePar': ev.quantidadePar,
        'tituloPage': "Alterar Evento",
      }


    }).then( modal => modal.present());
  }
  removeEventos(id: String){
    this.alert.create({
      header: 'Apagar',
      message: 'Realmente deseja apagar este usuário ?',
      buttons:[{
        text: 'Sim',
        handler: () => {
            this.service.delete(id).subscribe(() => {
            this.eventoslist = this.eventoslist.filter(std => std.idEvento !== id);
          });
        }
      },{text: 'Não'}]
    }).then(alertE1 => alertE1.present());
  }
  eventoPart(idEvento: String){
    console.log(idEvento);
    this.navCT.navigateForward('/evento-participante/'+idEvento);
  }
  voltar(){
    if(this.user.admin){
      this.navCT.navigateBack('/home-adm/'+ this.user.id);
    }else{
      this.navCT.navigateBack('/home-users/'+ this.user.id);
    }
  }
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
