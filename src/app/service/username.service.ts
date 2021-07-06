import { Injectable } from '@angular/core';
import { Username } from '../interface/username';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  listaUsername: Username[] = [
    {username: "luigi@gmail.com", nome: "Luigi", cognome:"Gualano",sesso: "Uomo"},
    {username: "umberto@gmail.com", nome: "Umberto", cognome:"Giuliani",sesso: "Uomo"},
    {username: "carol@gmail.com", nome: "Carola", cognome:"ciaociao",sesso: "Donna"},
    {username: "tony@gmail.com", nome: "Angelo", cognome:"Raimondo",sesso: "Uomo"},
    {username: "mari@gmail.com", nome: "prova", cognome:"prova2",sesso: "Donna"},
    {username: "giuly@gmail.com", nome: "Giulia", cognome:"prova1",sesso: "Donna"},
    {username: "frodo@gmail.com", nome: "Gandalf", cognome:"Himir",sesso: "Uomo"},
  ];

  constructor() { }

  getUsername(){
   return this.listaUsername.slice()
  }

  eliminaUsernameService(index: number) {
    this.listaUsername.splice(index,1);
  }

  aggiungereUsername(username: Username){
    this.listaUsername.unshift(username);
  }
}
