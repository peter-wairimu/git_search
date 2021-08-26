import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import{ MatTabsModule} from '@angular/material/tabs'
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select';
import { SearchBarComponent } from './components/search-bar/search-bar.component'
import {FlexLayoutModule} from '@angular/flex-layout'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import { GithubComponent } from './components/github/github.component'


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
