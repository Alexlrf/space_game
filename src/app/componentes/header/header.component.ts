import { Component, OnInit } from '@angular/core';
import { Imagem } from '../../Imagem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  baseUrl: string = '../../../assets/imagens/'

  imagens: Imagem[] = [
    // {
    //   url: `${this.baseUrl}carneiro.png`,
    //   descricao: 'carneiro'
    // },
    // {
    //   url: `${this.baseUrl}zebra.png`,
    //   descricao: 'zebra'
    // },
    // {
    //   url: `${this.baseUrl}jacare.png`,
    //   descricao: 'jacare'
    // }
  ]

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  irParaHome() {
    this.router.navigate(['/home'])
  }

}
