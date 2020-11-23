import { ParticipantesService, UserPart } from './../services/participantes.service';
import { QrcodePage } from './../qrcode/qrcode.page';
import { AlertController, ModalController, LoadingController, NavController } from '@ionic/angular';
import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-novos-participantes',
  templateUrl: './novos-participantes.page.html',
  styleUrls: ['./novos-participantes.page.scss'],
})
export class NovosParticipantesPage implements OnInit {

  users: UserPart[];
  idEvento: String;
  chave: String;
  pageTitulo: String;
  button:String;

  constructor(
    private service: ParticipantesService, 
    private alert: AlertController,
    private loadingCT: LoadingController,
    private servicePart: ParticipantesService,
    private alertCT: AlertController,
    private acRoute: ActivatedRoute,
    private navCT: NavController,

  ) { }

  ngOnInit() {
    this.acRoute.params.subscribe((data: any)=>{
      this.idEvento = data.idEvento;
      this.pageTitulo = data.pageTitulo; 
    });
    if(this.pageTitulo=="Lista de participantes"){
      this.button="Remover"
      this.service.getPart(this.idEvento,1).subscribe((response:any) => {
        this.users = response;
      })
    }else{
      this.button="Adicionar"
      this.service.getAll(this.idEvento).subscribe((response:any) => {
        this.users = response;
      })
    }
  }
  async Participante(idUser: String){
    if(this.button=="Adicionar"){
      const loader = await this.loadingCT.create({
        message: 'Por favor aguarde...',
      });
      loader.present();
      this.chave= this.generateID(20);
      let body ={
        chave: this.chave,
        idUser: idUser,
        idEvento: this.idEvento    
      }
      this.servicePart.create(body).subscribe( data =>{
        this.loadingCT.dismiss();
        if(data['result'] == 0){
          this.presentAlert("Dados Incorretos","Erro");
        }else{
          this.presentAlert("Usuário adicionado ao evento!","Sucesso!");
          this.atualiza();
        }
      });
    }else{
      this.alert.create({
        header: 'Apagar',
        message: 'Realmente deseja remover este participante ?',
        buttons:[{
          text: 'Sim',
          handler: () => {
              this.service.delete(idUser).subscribe(() => {
              this.users = this.users.filter(std => std.id !== idUser);
            });
          }
        },{text: 'Não'}]
      }).then(alertE1 => alertE1.present());
    }
  }

  async presentAlert(m,a) {
    const alert = await this.alertCT.create({
      header: a,
      message: m,
      buttons: ['OK']
    });

    await alert.present();
  }
  //funções para gerar chave aleartoria. Nao ficara aqui. Toda vez que clicar no botao ver qr do evento gerar nova chave.
  dec2hex(dec){
    return ('0'+ dec.toString(16)).substr(-2);
  }
  generateID(len){
    var arr = new Uint8Array((len || 40)/ 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr,this.dec2hex).join('');
  }

  //funções do grid.
  atualiza(){
    if(this.pageTitulo=="Lista de participantes"){
      this.service.getPart(this.idEvento,1).subscribe((response:any) => {
        this.users = response;
      })
    }else{
      this.service.getAll(this.idEvento).subscribe((response:any) => {
        this.users = response;
      })
    }
  }
  dorefresh(event){
    setTimeout(() => {
      this.atualiza();
      event.target.complete();
    }, 500);
  }
  fechar(){
    this.navCT.navigateBack('/evento-participante/'+this.idEvento);
  }
}
