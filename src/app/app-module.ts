import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProvider, routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { App } from './app';

import { ListaProductos } from './components/lista.productos/lista.productos';
import { MenuComponent } from './components/menu.component/menu.component';
import { HomeComponent } from './components/home.component/home.component';
import { HijococheComponent } from './components/hijocoche.component/hijocoche.component';
import { PadrecochesComponent } from './components/padrecoches.component/padrecoches.component';
import { PadredeportesComponent } from './components/padredeportes.component/padredeportes.component';
import { HijodeporteComponent } from './components/hijodeporte.component/hijodeporte.component';
import { ComicComponent } from './components/comic.component/comic.component';
import { LibreriaComponent } from './components/libreria.component/libreria.component';


@NgModule({
  declarations: [
    App,
    ListaProductos,
    MenuComponent,
    HomeComponent,
    HijococheComponent,
    PadrecochesComponent,
    PadredeportesComponent,
    HijodeporteComponent,
    ComicComponent,
    LibreriaComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
