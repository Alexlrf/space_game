import { Component, Input } from '@angular/core';
import { Imagem } from '../../Imagem';

@Component({
  selector: 'app-imagem-jogo',
  templateUrl: './imagem-jogo.component.html',
  styleUrls: ['./imagem-jogo.component.css']
})
export class ImagemJogoComponent {

  @Input() imagem: Imagem = {
    url:'',
    descricao: ''
  }

}
