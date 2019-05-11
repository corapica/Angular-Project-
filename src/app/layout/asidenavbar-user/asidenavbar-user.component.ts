import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-asidenavbar-user',
  templateUrl: './asidenavbar-user.component.html',
  styleUrls: ['./asidenavbar-user.component.scss']
})
export class AsidenavbarUserComponent implements OnInit {

  public loginuser: any = {};
  constructor() {

    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));

  }

  ngOnInit() {
  }

}
