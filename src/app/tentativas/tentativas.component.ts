import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from './../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number


  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() {
  }

  ngOnChanges(): void{
    //tentativas
    //coracoes.legth

    if(this.tentativas !== this.coracoes.length){ //3 !== 2
      //x= 3 - 2, x = 1
      let indice = this.coracoes.length - this.tentativas
      //1 - 1 = 0 (coracao da posicao 0 recebe o valor de false)
      this.coracoes[indice - 1].cheio = false
    }

  }

  ngOnInit(): void {
  }

}
