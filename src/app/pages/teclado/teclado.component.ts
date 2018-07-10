import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VelocidadCortePage } from '../velocidad-corte/velocidad-corte.component';
import { RevolucionesMinutoPage } from "../revoluciones-minuto/revoluciones-minuto.component";
import { VolumenVirutaPage } from "../volumen-viruta/volumen-viruta.component";
import { TiempoCortePage } from '../tiempo-corte/tiempo-corte.component';
import { PotenciaRequeridaPage } from '../potencia-requerida/potencia-requerida.component';
import { FuerzaEspecificaCortePage } from '../fuerza-especifica-corte/fuerza-especifica-corte.component';
import { RugosidadMaximaPage } from '../rugosidad-maxima/rugosidad-maxima.component';
import { EspesorVirutaPlacasRedondasPage } from '../espesor-viruta-placas-redondas/espesor-viruta-placas-redondas.component';
import { EspesorVirutaFiloRectoPage } from '../espesor-viruta-filo-recto/espesor-viruta-filo-recto.component';

@Component({
  selector: 'teclado-page',
  templateUrl: 'teclado.component.html'
})
export class TecladoPage {

  constructor(public navCtrl: NavController) {

  }

  goToVelocidadCorte() {
    this.navCtrl.push(VelocidadCortePage);
  }

  goToRevolucionesMinuto() {
    this.navCtrl.push(RevolucionesMinutoPage);
  }

  goToVolumenViruta() {
    this.navCtrl.push(VolumenVirutaPage);
  }

  goToTiempoCorte() {
    this.navCtrl.push(TiempoCortePage);
  }

  goToPotenciaRequerida() {
    this.navCtrl.push(PotenciaRequeridaPage);
  }

  goToFuerzaEspecificaCorte() {
    this.navCtrl.push(FuerzaEspecificaCortePage);
  }

  goToRugosidadMaxima() {
    this.navCtrl.push(RugosidadMaximaPage);
  }

  goToEspesorVirutaPlacasRedondas() {
    this.navCtrl.push(EspesorVirutaPlacasRedondasPage);
  }

  goToEspesorVirutaFiloRecto() {
    this.navCtrl.push(EspesorVirutaFiloRectoPage);
  }

}
