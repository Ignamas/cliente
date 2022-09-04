import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
hoy:Date=new Date();
  final:Date= new Date('2022-11-21 7:00:00');
 diferencia=(this.final.getTime()-this.hoy.getTime());
  
  dias: number= Math.floor(this.diferencia/(24*60*60*1000));
  horas: number =  Math.floor(this.diferencia%(24*60*60*1000)/3.6e+6);
  minutos: number=Math.floor(((this.diferencia%(24*60*60*1000)/3.6e+6)%this.horas)*(60));
  segundos : number =Math.floor(((((this.diferencia%(24*60*60*1000)/3.6e+6)%this.horas)*(60)-this.minutos))*60) /* Math.floor(((this.diferencia%(24*60*60*1000)/3.6e+6)%this.horas)*(60))*60; */
  prueba:number = this.diferencia; 
  

  constructor() { }

  ngOnInit(): void {
   const contador= interval(1000);
   contador.subscribe((n)=>{
    //  console.log(`Cada ${n} segundos`);
      this.hoy=new Date();
      let diferencia=(this.final.getTime()-this.hoy.getTime())
  let dias= Math.floor(diferencia/(24*60*60*1000));
  this.dias= dias;
  let horas =  Math.floor(diferencia%(24*60*60*1000)/3.6e+6);
  
  let minutos=Math.floor(((diferencia%(24*60*60*1000)/3.6e+6)%horas)*(60));
  this.minutos = minutos
  let segundos = diferencia;
  this.segundos= Math.floor(((((diferencia%(24*60*60*1000)/3.6e+6)%horas)*(60)-minutos))*60);
   }) 
  
  }


  }


