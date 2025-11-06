import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { ListaProductos } from "./components/lista.productos/lista.productos";
import { HomeComponent } from "./components/home.component/home.component";
import { PadrecochesComponent } from "./components/padrecoches.component/padrecoches.component";
import { PadredeportesComponent } from "./components/padredeportes.component/padredeportes.component";
import { LibreriaComponent } from "./components/libreria.component/libreria.component";

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "products", component: ListaProductos },
    { path: "coches", component: PadrecochesComponent },
    { path: "deportes", component: PadredeportesComponent },
    { path: "libreria", component: LibreriaComponent}
]

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);