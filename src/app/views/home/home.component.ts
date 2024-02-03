import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  formulario!: FormGroup
  mensagemErro: string = ''
  niveisJogo: string[] = ['Fácil', 'Médio', 'Difícil']

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
    ) {
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nomeJogador: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])],
      nivel: ['', Validators.compose([
        Validators.required,
      ])]
    })
  }

  comecarJogo() {
    this.formulario.valid ?
      this.router.navigate(['/jogo']) : this.mensagemErro = 'Esqueceu de preencher algum dado?'
  }

  limparMensagemErro() {
    this.mensagemErro = ''
  }


}
