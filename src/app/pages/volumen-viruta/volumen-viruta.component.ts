import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'volumen-viruta-page',
  templateUrl: 'volumen-viruta.component.html'
})
export class VolumenVirutaPage {

  formgroup: FormGroup;
  resultado: string;
  formula: string;

  constructor(private formBuilder: FormBuilder) {
    this.formgroup = this.formBuilder.group({
      velocidad_corte: ['', Validators.required],
      profundidad_pasada: ['', Validators.required],
      avance_revolucion: ['', Validators.required]
    });
    this.formula = '$V = v \\cdot a \\cdot s$';
  }

  calcular() {
    var volumenViruta;
    volumenViruta = Number(this.formgroup.get('velocidad_corte').value * this.formgroup.get('profundidad_pasada').value * this.formgroup.get('avance_revolucion').value).toFixed(3);
    this.resultado = 'V = ' + volumenViruta + ' cm<sup>3</sup>/min';
  }

}