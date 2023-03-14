import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})


export class CardsComponent {

  @Input() nombre : string = '';
  @Input() imagen : string = '';
  @Input() conBoton: boolean = false;
  @Input() id: number = 0;
  @Output() newItemEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem() {
    this.newItemEvent.emit(this.id);
  }
}
