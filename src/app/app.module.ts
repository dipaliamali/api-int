import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { UserdataComponent } from './userdata/userdata.component';
import { RegformComponent } from './regform/regform.component';
import { DeleteComponent } from './delete/delete.component';
@NgModule({
  declarations: [
  AppComponent,
    LoginComponent,
    UserdataComponent,
    RegformComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
