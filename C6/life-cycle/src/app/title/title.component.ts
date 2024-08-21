import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() nome: string = 'felipe';

  constructor() {
    console.log(`Construtor ${this.nome}`);
  }
  ngOnChanges(): void {
    console.log(`OnChange ${this.nome}`);
  }

  ngOnInit(): void {
    this.nome = this.nome + 'x';
    console.log(`OnInit ${this.nome}`);
  }
}
