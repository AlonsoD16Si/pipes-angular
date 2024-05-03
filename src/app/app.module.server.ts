import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { PrimerNgModule } from './primer-ng/primer-ng.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    PrimerNgModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
