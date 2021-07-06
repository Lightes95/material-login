import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  loading = false;

  constructor(private fb:FormBuilder, private _snackbar: MatSnackBar, private router: Router) { 
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
    
    if(username == 'luigi' && password == 'luigi') {
      //vai nella dashboard
      this.fintoCaricamento()
    }else {
      //errore non valido
      this.errore();
      this.form.reset();
    } 
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
      this.router.navigate(['dashboard'])
    }, 1500);
  }

}
