import { Routes } from '@angular/router';
import { BalanceGeneralComponent } from './balance-general/balance-general.component';
import { ExistenciaArticuloComponent } from './existencia-articulo/existencia-articulo.component';
import { EstadoResultadoComponent } from './estado-resultado/estado-resultado.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent
      },{
        path: 'balance-general',
        component: BalanceGeneralComponent,
        data: {
          title: 'Balance general',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Balance General' }]
        }
      },{
        path: 'existencia-articulo',
        component: ExistenciaArticuloComponent,
        data: {
          title: 'Existencia de articulos',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Existencia De Articulos' }]
        }
      },{
        path: 'estado-resultado',
        component: EstadoResultadoComponent,
        data: {
          title: 'Estado resultado',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Estado Resultado' }]
        }
      }
    ]
  }
];
