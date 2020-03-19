import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { DetailComponent } from './person/detail/detail.component';
import { ListComponent } from './person/list/list.component';
import { PeopleService } from './services/people-service.service';
import { SearchComponent } from './person/search/search.component';
import { CreateComponent } from './person/create/create.component'

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent,
    SearchComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }


