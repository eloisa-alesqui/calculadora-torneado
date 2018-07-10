import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'tiempo-corte-page',
  templateUrl: 'tiempo-corte.component.html'
})
export class TiempoCortePage {

  formgroup: FormGroup;
  resultado: string;
  formula: string;

  constructor(private formBuilder: FormBuilder) {
    this.formgroup = this.formBuilder.group({
      longitud_corte: ['', Validators.required],
      avance_revolucion: ['', Validators.required],
      revoluciones: ['', Validators.required]
    });
    this.formula = '$t = \\frac{l}{s \\cdot n}$';
  }

  calcular() {
    var tiempoCorte;
    tiempoCorte = Number(this.formgroup.get('longitud_corte').value / (this.formgroup.get('avance_revolucion').value * this.formgroup.get('revoluciones').value)).toFixed(3);
    this.resultado = 't = ' + tiempoCorte + ' min';
  }

}