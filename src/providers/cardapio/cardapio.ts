import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the CardapioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardapioProvider {

  private baseApiPath = "http://localhost/webserviceCardapio";
  constructor(public http: Http) {
    console.log('Hello CardapioProvider Provider');
  }

  getCardapios(){
    return this.http.get(this.baseApiPath);
  }
}
