import { Component } from '@angular/core';
import { ImagemHeader } from '../imagem-header/ImagemHeader';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  baseUrl: string = '../../../assets/imagens/'

  imagens: ImagemHeader[] = [
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

}
