import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Username } from 'src/app/interface/username';
import { UsernameService } from 'src/app/service/username.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})
export class UtenteComponent implements OnInit {

  listaUsername:Username[] = [];

  displayedColumns: string[] = ['username', 'nome', 'cognome', 'sesso','azioni',];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _usernameService:UsernameService, private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.caricamentoUsername();
  }

  caricamentoUsername(){
    this.listaUsername = this._usernameService.getUsername();
    this.dataSource = new MatTableDataSource(this.listaUsername)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminaUsername(index: number) {
    console.log(index)

    this._usernameService.eliminaUsernameService(index);
    this.caricamentoUsername();

    this._snackbar.open('Utente eliminato con successo','',{
      duration:1500,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
}
