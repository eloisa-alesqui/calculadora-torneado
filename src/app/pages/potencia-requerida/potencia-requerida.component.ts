import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'potencia-requerida-page',
  templateUrl: 'potencia-requerida.component.html'
})
export class PotenciaRequeridaPage {

  formgroup: FormGroup;
  resultado: string;
  formula: string;

  constructor(private formBuilder: FormBuilder) {
    this.formgroup = this.formBuilder.group({
      velocidad_corte: ['', Validators.required],
      profundidad_pasada: ['', Validators.required],
      avance_revolucion: ['', Validators.required],
      fuerza_especifica_corte_referencia: ['', Validators.required]
    });
    this.formula = '$kW = \\frac{v \\cdot a \\cdot s \\cdot k_{sm} }{6120}$';
  }

  calcular() {
    var potenciaRequerida;
    potenciaRequerida = Number(this.formgroup.get('velocidad_corte').value * this.formgroup.get('profundidad_pasada').value * this.formgroup.get('avance_revolucion').value * this.formgroup.get('fuerza_especifica_corte_referencia').value / 6120).toFixed(3);
    this.resultado = 'kW = ' + potenciaRequerida + ' kW';
  }

}