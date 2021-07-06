import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  loading = false;
  values: any;

  constructor(private fb:FormBuilder, private _snackbar: MatSnackBar, private router: Router,private ApiService: ApiService) { 
    this.form = this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresso() {
    const username = this.form.value.username;
    const password = this.form.value.password;
    let messaggio1='';
  
    const values='';
     this.ApiService.login(username,password).subscribe( data => {
      
      this.values = data.messaggio;
      messaggio1=this.values;
      if(messaggio1 == 'ciao' ) {
        //vai nella dashboard
        this.fintoCaricamento()
      }else {
        //errore non valido
        this.errore();
        this.form.reset();
      } 
      
     });

     
   
  }
  
  errore() {
    this._snackbar.open('Username o Password non valida','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

  fintoCaricamento() {
    this.loading = true;

    setTimeout(() => {
      this.router.navigate(['dashboard/libri'])
    }, 1500);
  }

}
