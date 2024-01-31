import { Component, Input } from '@angular/core';
import { ImagemHeader } from './ImagemHeader';

@Component({
  selector: 'app-imagem-header',
  templateUrl: './imagem-header.component.html',
  styleUrls: ['./imagem-header.component.css']
})
export class ImagemHeaderComponent {

  @Input() imagem: ImagemHeader = {
    url:'',
    descricao: ''
  }

}
