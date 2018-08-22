import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'dashboard',
                component: ECommerceComponent
            },
            {
                path: 'iot-dashboard',
                component: DashboardComponent
            },
            {
                path: 'ui-features',
                loadChildren: () =>
                    new Promise(resolve => {
                        (require as any).ensure([], require => {
                            resolve(require('./ui-features/ui-features.module').UiFeaturesModule);
                        });
                    })
            },
            {
                path: 'components',
                loadChildren: () =>
                    new Promise(resolve => {
                        (require as any).ensure([], require => {
                            resolve(require('./components/components.module').ComponentsModule);
                        });
                    })
            },
            {
                path: 'maps',
                loadChildren: () =>
                    new Promise(resolve => {
                        (require as any).ensure([], require => {
                            resolve(require('./maps/maps.module').MapsModule);
                        });
                    })
            },
            {
                path: 'charts',
                loadChildren: () =>
                    new Promise(resolve => {
                        (require as any).ensure([], require => {
                            resolve(require('./charts/charts.module').ChartsModule);
                        });
                    })
            },
            {
                path: 'editors',
                loadChildren: () =>
                    new Promise(resolve => {
                        (require as any).ensure([], require => {
                            resolve(require('./editors/editors.module').EditorsModule);
                        });
                    })
            },
            {
                path: 'forms',
                loadChildren: () =>
                    new Promise(resolve => {
                        (require as any).ensure([], require => {
                            resolve(require('./forms/forms.module').FormsModule);
                        });
                    })
            },
            {
                path: 'tables',
                loadChildren: () =>
                    new Promise(resolve => {
                        (require as any).ensure([], require => {
                            resolve(require('./tables/tables.module').TablesModule);
                        });
                    })
            },
            {
                path: 'miscellaneous',
                loadChildren: () =>
                    new Promise(resolve => {
                        (require as any).ensure([], require => {
                            resolve(require('./miscellaneous/miscellaneous.module').MiscellaneousModule);
                        });
                    })
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: '**',
                component: NotFoundComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
