import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SolarSystemComponent } from './demos/solar-system/solar-system.component';
import { AnimatedClockComponent } from './demos/animated-clock/animated-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    SolarSystemComponent,
    AnimatedClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
