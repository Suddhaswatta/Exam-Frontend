import { CommunicationService } from './../../services/communication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private _comm:CommunicationService) { }

  ngOnInit(): void {

    this._comm.getHamburgerIconClick().subscribe(
      observer => {
        console.log(`Clicked ${observer}`)
        if(observer==true)
          this.toggleSideBar()
      }
    );

  }

  toggle(){
  
    this.toggleSideBar()

    

    
    
  }

  private toggleSideBar(){
    const sidenav : HTMLElement | null = document.getElementById("sidenav")
    if(sidenav!=null)
      sidenav.classList.toggle("hide")
  }

}
