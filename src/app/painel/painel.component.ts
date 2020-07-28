import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from './../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public instrucao: string = 'Traduza a frase: '
  //variável chamada frase será um array de frase e receberá como valor o mock de frases
  public frases: Frase[] = FRASES
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit(): void {
  }

  //método para recuperar o valor digitado no input
  public atualizaResposta(resposta: Event): void {
    //o valor digitado no input no HTML passa para a variavel resposta
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(resposta)  
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePt == this.resposta) {
      //para aumentar o progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      //poderia ser assim: this.progresso = this.progresso + 20

      //para trocar a pergunta
      this.rodada++

      //
      if (this.rodada === this.frases.length) {
        this.encerrarJogo.emit('vitoria')
      }

      //para atualizar com outra frase
      this.atualizaRodada()
    }
    else {
      this.tentativas--

      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota')
      }
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]

    //para ficar com o campo vazio
    this.resposta = ''
  }

  ngOnDestroy(){
  }
  
}