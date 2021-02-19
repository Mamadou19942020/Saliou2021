import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SaliouMbaymiSharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [SaliouMbaymiSharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent],
})
export class LogsModule {}
