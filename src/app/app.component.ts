import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  radioChecked = '';

  constructor(private translate: TranslateService){
    let ls = localStorage.getItem('lenguage')
    if(ls!=null){
      this.translate.setDefaultLang(ls)
      this.radioChecked = ls;
    }else{
      let userLang = navigator.language.split('-')[0];
      console.log(userLang)
      if(userLang == 'es'){
        this.translate.setDefaultLang('es');
        localStorage.setItem('lenguage','es');
        this.radioChecked = 'es';
      }else{
        this.translate.setDefaultLang('en')
        localStorage.setItem('lenguage','en');
        this.radioChecked = 'en';
      }
    }
  }

  switchLenguage(lenguage: string){
    this.translate.use(lenguage) 
    localStorage.setItem('lenguage',lenguage);

  }

  title = 'AnthonyGS_Portafolio';
}
