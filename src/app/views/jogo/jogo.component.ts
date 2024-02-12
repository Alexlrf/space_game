import { Component, OnInit } from '@angular/core';
import { Imagem } from 'src/app/Imagem';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  baseUrl: string = '../../../assets/imagens/'

  // simbolos: string[] =  ['terra', 'terra', 'terra']
  simbolos: string[] =  ['lua', 'marte', 'saturno', 'terra']
  imagens: Imagem[] = []
  imagemLoader: Imagem = {url: `${this.baseUrl}satelite.gif`, descricao: 'satelite'}
  imagensLoader: Imagem[] = [this.imagemLoader, this.imagemLoader, this.imagemLoader]

  constructor() {}

  ngOnInit(): void {
    this.apresentarSimbolosSorteados('lua', 'saturno', 'terra')
  }

  iniciarSorteioSimbolos() {
    this.imagens = this.imagensLoader
    let primeiroSimbolo = this.sortearSimbolo();
    let segundoSimbolo  = this.sortearSimbolo();
    let terceiroSimbolo = this.sortearSimbolo();
    setTimeout(()=> {
      this.apresentarSimbolosSorteados(primeiroSimbolo, segundoSimbolo, terceiroSimbolo)
      let ganhou = this.verificarAcerto(primeiroSimbolo, segundoSimbolo, terceiroSimbolo)
      if (ganhou) {
          setTimeout(()=> {alert('Ganhou!')
              //this.definirImagemBackground('teste', this.montarUrlImagem('chuva_moedas'))
             // this.realizarProcessoGanhou()
          }, 2400)
      } else {
        //alert('Verificou Perdeu!')
          //setTimeout(this.habilitarBotaoAposta, 2200)
      }
    }, 2400)
}

  verificarAcerto(primeiroSimboloParam: string, segundoSimboloParam: string, terceiroSimboloParam: string) {
    return (primeiroSimboloParam.localeCompare(segundoSimboloParam)  == 0
         && primeiroSimboloParam.localeCompare(terceiroSimboloParam) == 0
         && segundoSimboloParam.localeCompare(terceiroSimboloParam)  == 0)
  }

  sortearSimbolo() {
    return this.simbolos[Math.floor(Math.random() * 4)]
  }

  apresentarSimbolosSorteados(primeiroSimboloParam: string, segundoSimboloParam: string, terceiroSimboloParam: string) {
    let tempos = [2100, 1400, 1800, 1200, 2500]
    let tempo = tempos[Math.floor(Math.random() * tempos.length)]
    setTimeout(()=> {
      this.definirImagemBackground(primeiroSimboloParam, this.montarUrlImagem(primeiroSimboloParam))
    }, tempo)
    setTimeout(()=> {
      this.definirImagemBackground(segundoSimboloParam, this.montarUrlImagem(segundoSimboloParam))
    }, tempo + 900)
    setTimeout(()=> {
      this.definirImagemBackground(terceiroSimboloParam, this.montarUrlImagem(terceiroSimboloParam))
    }, tempo + 1800)
    this.imagens = []
  }

  montarUrlImagem(simboloParam: string) {
    if(simboloParam.endsWith('satelite')) {
      return `${this.baseUrl}${ simboloParam }.gif`
    }
    return `${this.baseUrl}${ simboloParam }.png`
  }

  loadMudaSimbolos() {
    this.apresentarSimbolosSorteados('satelite', 'satelite', 'satelite')
    this.imagens = this.imagensLoader
  }

  definirImagemBackground(descricaoParam: string, imagemParam: string) {
    if(descricaoParam.endsWith('satelite')) {
      let img = {
        url: imagemParam,
        descricao: descricaoParam
      }
      this.imagens.push(img)
      return
    }

    let img = {
      url: imagemParam,
      descricao: descricaoParam
    }
    this.imagens.push(img)
  }

  realizarProcessoGanhou() {
    // this.lucro = calcularGanho()
    setTimeout(()=> {
        // atribuirLucroParaUsuario()
    }, 3300)
  }

  realizarProcessoPerdeu() {
    setTimeout(()=> {
        // alternarModal()
    }, 1000)
  }

  desabilitarBotaoAposta() {
  }

  habilitarBotaoAposta() {

  }

  // calcularGanho() {
  //   let valorLucro = parseInt(valorAposta) * (parseInt(multiplicadorHtml.val()) + 1)
  //   $('#valor_lucro').html(valorLucro)
  //   return valorLucro
  // }

  // atribuirLucroParaUsuario() {
  //   for(i = 0; i <= parseInt($('#valor_lucro').html()); i++) {
  //       setTimeout(transferirValorParaUsuario, i * (1000 - 999))
  //   }
  //   resetarInterface()
  //   this.lucro = 0
  // }

  // transferirValorParaUsuario() {
  //   let lucro = $('#valor_lucro').html()
  //   console.log(lucro)
  //   if(lucro == 0) {
  //       console.log(lucro)
  //       $('#valor_lucro').html('')
  //       return
  //   }
  //   $('#valor_lucro').html(parseInt(lucro) - 1)
  //   valorUsuarioHtml.html(parseInt(valorUsuarioHtml.text()) + 1)
  // }

  // resetarInterface() {
  //   apagarImagemBackground([label1, label2, label3, formHtml])
  //   valorApostaHtml.val("")
  //   multiplicadorHtml.val(10)
  //   setTimeout(habilitarBotaoAposta, 1500)
  // }

  // apagarImagemBackground(elementoParam) {
  //   elementoParam.forEach(element => {
  //       element.css('backgroundImage', '')
  //   });
  // }

}
