
import {Component} from '@angular/core';

import {TranslateService} from '@ngx-translate/core';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
})
export class AppComponent{

constructor(
private translate: TranslateService,
){
  translate.addLangs(['en','ro']);
  translate.setDefaultLang('en');
  translate.use('en');
}
useLanguage(language: string): void {
  this.translate.use(language);
}

}
