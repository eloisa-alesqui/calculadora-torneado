import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'velocidad-corte-page',
  templateUrl: 'velocidad-corte.component.html'
})
export class VelocidadCortePage {

  formgroup: FormGroup;
  resultado: string;
  formula: string;

  constructor(private formBuilder: FormBuilder) {
    this.formgroup = this.formBuilder.group({
      diametro: ['', Validators.required],
      revoluciones: ['', Validators.required]
    });
    this.formula = '$v = \\frac{\\pi \\cdot D \\cdot n}{1000}$';
  }

  calcular() {
    var velocidadCorte;
    velocidadCorte = Number(Math.PI * this.formgroup.get('diametro').value * this.formgroup.get('revoluciones').value / 1000).toFixed(3);
    this.resultado = 'v = ' + velocidadCorte + ' m/min';
  }

}
