import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InizioComponent } from './inizio/inizio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UtenteComponent } from './utente/utente.component';
import { ReportComponent } from './report/report.component';
import { AggiungiUtenteComponent } from './utente/aggiungi-utente/aggiungi-utente.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InizioComponent,
    NavbarComponent,
    UtenteComponent,
    ReportComponent,
    AggiungiUtenteComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
