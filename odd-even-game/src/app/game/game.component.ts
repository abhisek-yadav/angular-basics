import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output() num = new EventEmitter<number>();
  interval;
  n: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval =  setInterval(() => {
      this.num.emit(this.n + 1);
      this.n += 1;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}
