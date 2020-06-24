import { Component, EventEmitter, Output, OnInit, Inject, forwardRef } from '@angular/core';

import { DestinoViaje } from '../models/destino-viaje.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  fg: FormGroup;

  constructor(fb: FormBuilder) { 
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
        nombre: ['', Validators.required],
        url: ['']
      });

      this.fg.valueChanges.subscribe( (form: any) =>{
        console.log('cambio el formulario: ' + form);
      } );
  }

  ngOnInit(): void {
  }

  guardar(nombre: string, url: string): boolean{
    const d = new DestinoViaje(nombre, url);
    this.onItemAdded.emit(d);
    return false; 
  }

}
