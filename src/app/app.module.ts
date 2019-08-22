import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OrderModule } from 'ngx-order-pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ListService } from './services/list/list.service';
import { ConfigService, initializeApp } from './services/config/config.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    OrderModule,
    ReactiveFormsModule
  ],
  providers: [ListService,ConfigService,{
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    deps:[ConfigService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
