import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'espesor-viruta-filo-recto-page',
  templateUrl: 'espesor-viruta-filo-recto.component.html'
})
export class EspesorVirutaFiloRectoPage {

  formgroup: FormGroup;
  resultado: string;
  formula: string;

  constructor(private formBuilder: FormBuilder) {
    this.formgroup = this.formBuilder.group({
      avance_revolucion: ['', Validators.required],
      angulo_posicion: ['', Validators.required]
    });
    this.formula = '$e_{2} = s \\cdot sin(λ)$';
  }

  calcular() {
    var espesorVirutaFiloRecto;
    espesorVirutaFiloRecto = Number(this.formgroup.get('avance_revolucion').value * Math.sin(this.formgroup.get('angulo_posicion').value * (Math.PI / 180))).toFixed(3);
    this.resultado = 'e<sub>2</sub> = ' + espesorVirutaFiloRecto + ' mm';
  }

}