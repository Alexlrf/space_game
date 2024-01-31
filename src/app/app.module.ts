import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ImagemHeaderComponent } from './componentes/imagem-header/imagem-header.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ClassificacaoJogadoresComponent } from './componentes/classificacao-jogadores/classificacao-jogadores.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClassificacaoJogadoresComponent,
    ImagemHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
