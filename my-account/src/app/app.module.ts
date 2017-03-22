import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './account/details/details.component';
import { DetailsService } from './account/details/details.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    HeaderComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
