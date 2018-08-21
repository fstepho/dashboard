import { NgModule } from '@angular/core';

import { DashboardSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [DashboardSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [DashboardSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DashboardSharedCommonModule {}
