import { Component } from '@angular/core';
import { interval, Observable,tap} from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrl: './uncommon-pages.component.css'
})
export class UncommonPagesComponent {
//i18n Select
public name: string = 'Alonso';
public gender: 'male'| 'female' = 'male';
//Crear mapa
public invitationMap = {
  'male':'invitarlo',
  'female':'invitarla'
}

changeClient(): void{
  this.name = 'Lore';
  this.gender = 'female';
}
//i18nPlural
public clients: string[] =  ['María', 'Juan', 'Ana', 'Carlos', 'Laura', 'Pedro', 'Sofía', 'Diego', 'Valentina', 'Alejandro'];
public clientsMap = {
'=0' : 'no tenemos ningun cliente en la fila.',
'=1' : 'tenemos un cliente en la fila.',
'=2' : 'tenemos 2 clientes en la fila.',
'other' : 'tenemos # clientes en la fila.',
}
deleteClient():void{
  this.clients.shift();
}

//KeyValue Pipe
public person = {
  name: 'Alonso',
  age: 20,
  address: 'Leon GTO, Mexico',
}

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value ) ),
  );

public promiseValue: Promise<string> = new Promise((resolve, reject) =>{
  setTimeout(() =>{
    resolve('Tenemos data en la promesa.');
    console.log('Tenemos data en la promesa.');
    this.person.name='Otro nombre'
  }, 3500);
})

}
