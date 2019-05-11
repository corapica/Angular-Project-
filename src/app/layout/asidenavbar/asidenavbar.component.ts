import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asidenavbar',
  templateUrl: './asidenavbar.component.html',
  styleUrls: ['./asidenavbar.component.scss']
})
export class AsidenavbarComponent implements OnInit {
  public loginuser: any = {};
  constructor() {

    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.loginuser['user']['firstName']);
   }

  ngOnInit() {
  }

}
