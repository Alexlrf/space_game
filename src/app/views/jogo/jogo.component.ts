import { Component, OnInit } from '@angular/core';
import { Imagem } from 'src/app/Imagem';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  baseUrl: string = '../../../assets/imagens/'
  simbolos: string[] =  ['lua', 'marte', 'saturno', 'terra']
  imagens: Imagem[] = [
    // {
    //   url: `${this.baseUrl}terra.png`,
    //   descricao: 'terra'
    // },
    // {
    //   url: `${this.baseUrl}marte.png`,
    //   descricao: 'marte'
    // },
    // {
    //   url: `${this.baseUrl}saturno.png`,
    //   descricao: 'saturno'
    // },
    // {
    //   url: `${this.baseUrl}lua.png`,
    //   descricao: 'lua'
    // }
  ]

  constructor() {}

  ngOnInit(): void {
    this.iniciarSorteioSimbolos()
  }

  iniciarSorteioSimbolos() {
    let primeiroSimbolo = this.sortearSimbolo();
    let segundoSimbolo  = this.sortearSimbolo();
    let terceiroSimbolo = this.sortearSimbolo();
    // this.loadMudaSimbolos()
    this.apresentarSimbolosSorteados(primeiroSimbolo, segundoSimbolo, terceiroSimbolo)
    let ganhou = this.verificarAcerto(primeiroSimbolo, segundoSimbolo, terceiroSimbolo)
    if (ganhou) {
        setTimeout(()=> {
          // this.definirImagemBackground(formHtml, this.montarUrlImagem('chuva_moedas'))
          // this.realizarProcessoGanhou()
        }, 2400)
    } else {
        // setTimeout(this.habilitarBotaoAposta, 2200)
    }
}

  verificarAcerto(primeiroSimboloParam: string, segundoSimboloParam: string, terceiroSimboloParam: string) {
    let simbolosIguais = this.confirmarSimbolosIguais(primeiroSimboloParam, segundoSimboloParam, terceiroSimboloParam)
    return simbolosIguais
  }

  confirmarSimbolosIguais(primeiroSimboloParam: string, segundoSimboloParam: string, terceiroSimboloParam: string) {
    let comparaPrimeiroComSegundo  = primeiroSimboloParam.localeCompare(segundoSimboloParam)
    let comparaPrimeiroComTerceiro = primeiroSimboloParam.localeCompare(terceiroSimboloParam)
    let comparaSegundoComTerceiro  = segundoSimboloParam.localeCompare(terceiroSimboloParam)

    return comparaPrimeiroComSegundo  == 0
        && comparaPrimeiroComTerceiro == 0
        && comparaSegundoComTerceiro  == 0
}

  sortearSimbolo() {
    return this.simbolos[Math.floor(Math.random() * 4)]
  }

  apresentarSimbolosSorteados(primeiroSimboloParam: string, segundoSimboloParam: string, terceiroSimboloParam: string) {
    let tempos = [2015, 1480, 1710, 2000, 1550, 1620, 1815, 1900, 1690, 1880, 1499, 1680, 1510, 1790, 1950]
    setTimeout(()=> {
      this.definirImagemBackground(primeiroSimboloParam, this.montarUrlImagem(primeiroSimboloParam))
    }, tempos[Math.floor(Math.random() * tempos.length)])
    setTimeout(()=> {
      this.definirImagemBackground(segundoSimboloParam, this.montarUrlImagem(segundoSimboloParam))
    }, tempos[Math.floor(Math.random() * tempos.length)])
    setTimeout(()=> {
      this.definirImagemBackground(terceiroSimboloParam, this.montarUrlImagem(terceiroSimboloParam))
    }, tempos[Math.floor(Math.random() * tempos.length)])
  }

  montarUrlImagem(simboloParam: string) {
    console.log(`${this.baseUrl}${ simboloParam }.png`)
    return `${this.baseUrl}${ simboloParam }.png`
  }

  // loadMudaSimbolos() {
  //   this.definirImagemBackground(label1, imgAmpulhetaLoader)
  //   this.definirImagemBackground(label2, imgAmpulhetaLoader)
  //   this.definirImagemBackground(label3, imgAmpulhetaLoader)
  // }

  definirImagemBackground(descricaoParam: string, imagemParam: string) {
    let img = {
      url: imagemParam,
      descricao: descricaoParam
    }
    this.imagens.push(img)
  }

  // realizarProcessoGanhou() {
  //   this.lucro = calcularGanho()
  //   setTimeout(()=> {
  //       atribuirLucroParaUsuario()
  //   }, 3300)
  // }

  // realizarProcessoPerdeu() {
  //   setTimeout(()=> {
  //       alternarModal()
  //   }, 1000)
  // }

  // desabilitarBotaoAposta() {
  //   $("#btn").attr("disabled", true)
  // }

  // habilitarBotaoAposta() {
  //   $("#btn").attr("disabled", false)
  // }

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
