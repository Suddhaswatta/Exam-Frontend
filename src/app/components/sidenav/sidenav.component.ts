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

    this.hideSideBar()

    window.addEventListener("click",(e)=>{
      if(e.clientX>200){
        this.hideSideBar()
      }
      
    })

    this._comm.getHamburgerIconClick().subscribe(
      observer => {
        if(observer==true)
          this.showSideBar()
      }
    );

  }

  
  private showSideBar(){
    const sidenav : HTMLElement | null = document.getElementById("sidenav")
    if(sidenav!=null)
      sidenav.classList.remove("hide")
  }

  private hideSideBar() {
    const sidenav : HTMLElement | null = document.getElementById("sidenav")
    if(sidenav!=null)
      sidenav.classList.add("hide")

  }

}
