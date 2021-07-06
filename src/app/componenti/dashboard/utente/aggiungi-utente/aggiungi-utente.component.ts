import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Username } from 'src/app/interface/username';
import { UsernameService } from 'src/app/service/username.service';

@Component({
  selector: 'app-aggiungi-utente',
  templateUrl: './aggiungi-utente.component.html',
  styleUrls: ['./aggiungi-utente.component.css']
})
export class AggiungiUtenteComponent implements OnInit {

  sesso: any[] = ['Uomo','Donna'];

  form: FormGroup;

  constructor(private fb: FormBuilder, 
              private _usernameService: UsernameService,
              private router: Router,
              private _snackbar: MatSnackBar) { 
    this.form = this.fb.group({
      username: ['',Validators.required],
      nome: ['',Validators.required],  
      cognome: ['',Validators.required],
      sesso: ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  aggiungiUtente() {
    const user: Username = {
      username: this.form.value.username,
      nome: this.form.value.nome,
      cognome: this.form.value.cognome,
      sesso: this.form.value.sesso,
    }
    this._usernameService.aggiungereUsername(user);
    this.router.navigate(['/dashboard/utente']);

    this._snackbar.open('Utente creato con successo','',{
      duration:1500,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

  

}
