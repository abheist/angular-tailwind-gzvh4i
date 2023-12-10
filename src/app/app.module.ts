import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SvgComponent } from './svg.component';

@NgModule({
  imports: [BrowserModule, FormsModule, SvgComponent],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
