import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {TecladoPage} from './pages/teclado/teclado.component';
import {VelocidadCortePage} from './pages/velocidad-corte/velocidad-corte.component';
import {RevolucionesMinutoPage} from './pages/revoluciones-minuto/revoluciones-minuto.component';
import {VolumenVirutaPage} from './pages/volumen-viruta/volumen-viruta.component';
import {TiempoCortePage} from './pages/tiempo-corte/tiempo-corte.component';
import {PotenciaRequeridaPage} from './pages/potencia-requerida/potencia-requerida.component';
import {FuerzaEspecificaCortePage} from './pages/fuerza-especifica-corte/fuerza-especifica-corte.component';
import {RugosidadMaximaPage} from './pages/rugosidad-maxima/rugosidad-maxima.component';
import {EspesorVirutaPlacasRedondasPage} from './pages/espesor-viruta-placas-redondas/espesor-viruta-placas-redondas.component';
import {EspesorVirutaFiloRectoPage} from './pages/espesor-viruta-filo-recto/espesor-viruta-filo-recto.component';

import { MathJaxDirective } from './directives/mathjax.directive';

@NgModule({
  declarations: [
    MyApp,
    TecladoPage,
    VelocidadCortePage,
    RevolucionesMinutoPage,
    VolumenVirutaPage,
    TiempoCortePage,
    PotenciaRequeridaPage,
    FuerzaEspecificaCortePage,
    RugosidadMaximaPage,
    EspesorVirutaPlacasRedondasPage,
    EspesorVirutaFiloRectoPage,
    MathJaxDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TecladoPage,
    VelocidadCortePage,
    RevolucionesMinutoPage,
    VolumenVirutaPage,
    TiempoCortePage,
    PotenciaRequeridaPage,
    FuerzaEspecificaCortePage,
    RugosidadMaximaPage,
    EspesorVirutaPlacasRedondasPage,
    EspesorVirutaFiloRectoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
