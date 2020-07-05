import { CustomAsyncPipe } from './impure-pipe/pipe/custom-async-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImpurePipeComponent } from './impure-pipe/impure-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ImpurePipeComponent,
    CustomAsyncPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
