import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
/* miFormulario: FormGroup = new FormGroup({
  nombre: new FormControl('Sede1'),
  capacidad: new FormControl(40000),
  ciudad: new FormControl('Iquique'),


}) */

miFormulario: FormGroup = this.fb.group({
  nombre: ['Sede 1', [Validators.required, Validators.minLength(3) ] ],
  capacidad: [],
  ciudad: []
})

  constructor(private fb: FormBuilder) { }


}
