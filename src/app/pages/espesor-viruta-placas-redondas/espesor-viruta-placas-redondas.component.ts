import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'espesor-viruta-placas-redondas-page',
  templateUrl: 'espesor-viruta-placas-redondas.component.html'
})
export class EspesorVirutaPlacasRedondasPage {

  formgroup: FormGroup;
  resultado: string;
  formula: string;

  constructor(private formBuilder: FormBuilder) {
    this.formgroup = this.formBuilder.group({
      avance_revolucion: ['', Validators.required],
      profundidad_pasada: ['', Validators.required],
      radio_placa: ['', Validators.required]
    });
    this.formula = '$e_{1} = s \\cdot \\sqrt{\\frac{a}{2 \\cdot r}}$';
  }

  calcular() {
    var espesorVirutaPlacasRedondas;
    espesorVirutaPlacasRedondas = Number(this.formgroup.get('avance_revolucion').value * (Math.sqrt(this.formgroup.get('profundidad_pasada').value / (2 * this.formgroup.get('radio_placa').value)))).toFixed(3);
    this.resultado = 'e<sub>1</sub> = ' + espesorVirutaPlacasRedondas + ' mm';
  }

}