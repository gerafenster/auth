import { RegistrosService, Registro } from './../services/registros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {

  registroslist: Registro[];
  libero: Boolean
 //registrosNegado: Registro[];
  constructor(
    private service: RegistrosService
  ) {  }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.registroslist = response
      console.log(this.registroslist);
    })
    //this.service.getNegado("1").subscribe((response: any) => {
     // this.registrosNegado = response
   // })
  }
  atualiza(){
    this.service.getAll().subscribe(response => {
      this.registroslist = response;
    });
  }
  dorefresh(event){
    setTimeout(() => {
      this.atualiza();
      event.target.complete();
    }, 500);
  }

}
