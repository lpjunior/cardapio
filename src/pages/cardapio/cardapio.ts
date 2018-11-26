import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardapioProvider } from '../../providers/cardapio/cardapio';

/**
 * Generated class for the CardapioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
  providers: [
    CardapioProvider
  ]
})
export class CardapioPage {

  cardapios = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private cardapioProvider: CardapioProvider) {
  }

  ionViewDidLoad() {
    this.fillCard();
  }

  fillCard() {
    this.cardapioProvider.getCardapios().subscribe(
      data=>{
        const json = JSON.parse((data as any)._body);
        console.log(json);
        this.cardapios = json;
      }, error=>{
        console.log(error);
      }
    );
  }

}
