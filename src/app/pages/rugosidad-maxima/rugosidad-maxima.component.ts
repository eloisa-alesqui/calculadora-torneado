import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'rugosidad-maxima-page',
  templateUrl: 'rugosidad-maxima.component.html'
})
export class RugosidadMaximaPage {

  formgroup: FormGroup;
  resultado: string;
  formula: string;

  constructor(private formBuilder: FormBuilder) {
    this.formgroup = this.formBuilder.group({
      avance_revolucion: ['', Validators.required],
      radio_placa: ['', Validators.required]
    });
    this.formula = '$H = \\frac{s^2 \\cdot 1000}{8 \\cdot r}$';
  }

  calcular() {
    var rugosidadMaxima;
    rugosidadMaxima = Number((Math.pow(this.formgroup.get('avance_revolucion').value, 2) * 1000) / (8 * this.formgroup.get('radio_placa').value)).toFixed(3);
    this.resultado = 'H = ' + rugosidadMaxima + ' μm';
  }

}