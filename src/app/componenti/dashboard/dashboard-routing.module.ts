import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InizioComponent } from './inizio/inizio.component';
import { ReportComponent } from './report/report.component';
import { AggiungiUtenteComponent } from './utente/aggiungi-utente/aggiungi-utente.component';
import { UtenteComponent } from './utente/utente.component';

const routes: Routes = [
  { path:'', component: DashboardComponent, children:[
    { path: '', component: InizioComponent},
    { path: 'libri', component: UtenteComponent},
    { path: 'report', component: ReportComponent},
    { path: 'aggiungi-utente', component: AggiungiUtenteComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
