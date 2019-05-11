import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-key',
  templateUrl: './project-key.component.html',
  styleUrls: ['./project-key.component.scss']
})
export class ProjectKeyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';
  }

  ngOnDestroy(): void {
    document.body.className = '';
}

}
