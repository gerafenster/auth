import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {
  chave: String;
  public urlQR: String = "https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=";
  constructor(private navpar: NavParams,
    ) {
      this.chave = navpar.get('chave');
    }

  ngOnInit() {
    this.urlQR = this.urlQR +""+ this.chave;
    console.log(this.urlQR);
  }

}
