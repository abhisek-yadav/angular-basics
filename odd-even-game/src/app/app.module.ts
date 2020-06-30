import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { GameComponent } from './game/game.component';
import { BasicHighlightDirective } from './directives/attribute/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/attribute/better-highlight.directive';
import { UnlessDirective } from './directives/structural/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    OddComponent,
    EvenComponent,
    GameComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
