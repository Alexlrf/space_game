import { Component, OnInit } from '@angular/core';
import { Imagem } from 'src/app/Imagem';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  baseUrl: string = '../../../assets/imagens/'

  imagens: Imagem[] = [
    {
      url: `${this.baseUrl}carneiro.png`,
      descricao: 'carneiro'
    },
    {
      url: `${this.baseUrl}zebra.png`,
      descricao: 'zebra'
    },
    {
      url: `${this.baseUrl}jacare.png`,
      descricao: 'jacare'
    }
  ]

  constructor() {}

  ngOnInit(): void {
  }

}
