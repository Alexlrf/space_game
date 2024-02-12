import { Component, Input } from '@angular/core';
import { Imagem } from '../../Imagem';

@Component({
  selector: 'app-imagem-header',
  templateUrl: './imagem-header.component.html',
  styleUrls: ['./imagem-header.component.css']
})
export class ImagemHeaderComponent {

  @Input() imagem: Imagem = {
    url:'',
    descricao: ''
  }

}
