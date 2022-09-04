import { Component, OnInit } from '@angular/core';
import { SedesService } from './Services/sedes.service';
import { GLOBAL } from '../global';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css'],
})
export class SedesComponent implements OnInit {
  //sedes:string[]=["pepe", "cucu", "mato", "tata" ];
  ruta: any;
  ciudad: string[] = [];
  imagen: string[] = [];
  capacidad: string[] = [];
  nombreEstadio:string[]=[];
 
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _sedes: SedesService
  ) {
    this.ruta = GLOBAL.url;
  }

  ngOnInit(): void {
    this.getSedes();
  }

  getSedes() {
    this._route.params.forEach(() => {
      this._sedes.getSedes().subscribe(
        (response: any) => {
          //console.log(response);

          if (!response.data) {
            this._router.navigate(['/']);
          } else {
            let camino = response.data;

            Object.keys(camino).map((key) => {
              this.ciudad.push(camino[key].ciudad);
              console.log(this.ciudad);
              
              //this.imagen.push(camino[key].imagen);
              this.nombreEstadio.push(camino[key].nombreestadio);
              this.capacidad.push(camino[key].capacidad);
              this.imagen.push(camino[key].foto)
              console.log(camino[key]);
              
            });
          }
        },
        (error: any) => {
          var errorMessage = <any>error;
          if (errorMessage != null) {
            var body = JSON.parse(error._body);

            console.log(error);
          }
        }
      );
    });
  }
}
