import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboradComponent } from './dashborad/dashborad.component';
import {LayoutModule} from '../layout/layout.module';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  declarations: [DashboradComponent]
})
export class DashboardModule { }
