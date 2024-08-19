import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './components/menu.components';
import { Button } from './components/button.components';
import { EntryDataComponent } from './components/entry-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MenuComponent,
    Button,
    EntryDataComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
