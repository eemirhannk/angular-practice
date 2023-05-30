import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {

  cookieValue: any;
  name : any;
  isCookieExist : any ;

  constructor(private cookieService: CookieService) {

  }

  ngOnInit(): void {
    
  }

  setItem(value:any) {
    this.cookieService.set('name', value);
  }

  getItem() {
    this.cookieValue = this.cookieService.get('name')
  }
  clearItem() {
    this.cookieService.delete('name')
    this.cookieValue = ""
  }
  clearAll() {
    this.cookieService.deleteAll()
    this.cookieValue = ""
  }
  checkNameCookie() {
    this.isCookieExist = this.cookieService.check('name');
  }

}
