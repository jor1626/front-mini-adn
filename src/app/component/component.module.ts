import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentsRoutes } from './component.routing';
import { NotifierModule } from 'angular-notifier';
import { HttpClientModule } from '@angular/common/http';
import { BalanceGeneralComponent } from './balance-general/balance-general.component';
import { EstadoResultadoComponent } from './estado-resultado/estado-resultado.component';
import { ExistenciaArticuloComponent } from './existencia-articulo/existencia-articulo.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ComponentsRoutes),
  ],
  declarations: [
    DashboardComponent,
    BalanceGeneralComponent,
    EstadoResultadoComponent,
    ExistenciaArticuloComponent
  ]
})
export class ComponentsModule {}
