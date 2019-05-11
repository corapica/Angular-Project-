import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { AsidenavbarComponent } from './asidenavbar/asidenavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';
import { SettingsnavbarComponent } from './settingsnavbar/settingsnavbar.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './layout.route';
import { UsersComponent } from '../users/users/users.component';
import { FormsModule } from '@angular/forms';
import { AsidenavbarUserComponent } from './asidenavbar-user/asidenavbar-user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    FormsModule

  ],
  declarations: [
      TopnavbarComponent,
      AsidenavbarComponent,
      FooternavbarComponent,
      SettingsnavbarComponent,
      UsersComponent,
      AsidenavbarUserComponent

  ],
    exports: [
        TopnavbarComponent,
        AsidenavbarComponent,
        FooternavbarComponent,
        SettingsnavbarComponent,
        AsidenavbarUserComponent
    ]
})
export class LayoutModule { }
