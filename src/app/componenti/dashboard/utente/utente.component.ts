import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {LibriService } from 'src/app/libri.service'

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

  Book:any = [];

  displayedColumns: string[] = ['id','titolo','luogo_edizione','anno_edizione','isbn','isbn13','copie','publisher_id','author_id','topic_id'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _snackbar: MatSnackBar,public LibriService: LibriService) { }

  ngOnInit(): void {
    
    this.caricamentoUsername();
  }
  
  
  fetchUsers() {
    return this.LibriService.index().subscribe((data: {}) => {
      this.Book = data;
    })
  }
  caricamentoUsername(){
     this.LibriService.index().subscribe((res: {}) => {
      this.Book =res;
      console.log(this.Book[0]);
      this.dataSource = new MatTableDataSource(this.Book);
    })
   
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


    this._snackbar.open('Utente eliminato con successo','',{
      duration:1500,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
}
