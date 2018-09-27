import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'fuerza-especifica-corte-page',
  templateUrl: 'fuerza-especifica-corte.component.html'
})
export class FuerzaEspecificaCortePage {

  formgroup: FormGroup;
  resultado: string;
  formula: string;

  constructor(private formBuilder: FormBuilder) {
    this.formgroup = this.formBuilder.group({
      fuerza_especifica_corte_referencia: ['', Validators.required],
      espesor_viruta: ['', Validators.required]
    });
    this.formula = '$k_{sm} = k_{s} \\cdot ( \\frac{0.4}{e})^{0.29}$';
  }

  calcular() {
    var fuerzaEspecíficaCorte;
    fuerzaEspecíficaCorte = Number(this.formgroup.get('fuerza_especifica_corte_referencia').value * (Math.pow(0.4 / this.formgroup.get('espesor_viruta').value, 0.29))).toFixed(3);
    this.resultado = 'k<sub>sm</sub> = ' + fuerzaEspecíficaCorte + ' kg/mm<sup>2</sup>';
  }

}

