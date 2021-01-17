import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  
  private hamburger = new Subject();
  constructor() { }

  isHamburgerClicked(value:boolean){
    this.hamburger.next(value)
  }

  getHamburgerIconClick(){
    return this.hamburger.asObservable()
  }
}
