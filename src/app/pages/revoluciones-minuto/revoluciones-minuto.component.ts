import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'revoluciones-minuto-page',
  templateUrl: 'revoluciones-minuto.component.html'
})
export class RevolucionesMinutoPage {

  formgroup: FormGroup;
  resultado: string;
  formula: string;

  constructor(private formBuilder: FormBuilder) {
    this.formgroup = this.formBuilder.group({
      diametro: ['', Validators.required],
      velocidad_corte: ['', Validators.required]
    });
    this.formula = '$n = \\frac{v \\cdot 1000}{\\pi \\cdot D}$';
  }

  calcular() {
    var revolucionesMinuto;
    revolucionesMinuto = Number((this.formgroup.get('velocidad_corte').value * 1000) / (Math.PI * this.formgroup.get('diametro').value)).toFixed(3);
    this.resultado = 'n = ' + revolucionesMinuto + ' rpm';
  }

}
