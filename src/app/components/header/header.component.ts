import { CommunicationService } from './../../services/communication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _comm:CommunicationService) { }

  ngOnInit(): void
  {
  }

  clickHamburger(){

    this._comm.isHamburgerClicked(true)

  }

}
