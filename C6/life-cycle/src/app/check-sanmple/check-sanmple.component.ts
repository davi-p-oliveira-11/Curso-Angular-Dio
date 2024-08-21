import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-check-sanmple',
  templateUrl: './check-sanmple.component.html',
  styleUrls: ['./check-sanmple.component.css'],
})
export class CheckSanmpleComponent
  implements
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  quantidade: number = 0;

  constructor() {}

  adicionar() {
    this.quantidade += 1;
  }

  decrementar() {
    this.quantidade -= 1;
  }

  // checked -> content -> view

  // quanto o primeiro conteúdo é iniciado

  ngAfterContentInit(): void {
    console.log('ngAfterContentIni');
  }

  // depois da inicialização da view

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  // após alguma alteração verifica o conteudo

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  // apos alguma alteração verifica a view

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  //

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('So long and good night !');
  }
}
