import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionariosListagemComponent } from './funcionarios-listagem/funcionarios-listagem.component';
import { FuncionarioService } from './funcionario.service';
import { HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import {LayoutModule} from '@angular/cdk/layout';
import {MatDividerModule} from "@angular/material/divider";
import {FormsModule} from "@angular/forms";
import {FuncionarioModel} from "./funcionario.model";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    AppComponent,
    FuncionariosListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  providers: [HttpClientModule ,FuncionarioService, FuncionarioModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
