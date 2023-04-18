import { Component } from '@angular/core';
import { Col } from 'src/app/interface/cols';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  cols: Col[] = [
    { title: 'LOG CABIN', image: 'assets/images/cabin.png' },
    { title: 'TASTY CAKE', image: 'assets/images/cake.png' },
    { title: 'CIRCUS TENT', image: 'assets/images/circus.png' },
    { title: 'CONTROLLER', image: 'assets/images/game.png' },
    { title: 'LOCKED SAFE', image: 'assets/images/safe.png' },
    { title: 'SUBMARINE', image: 'assets/images/submarine.png' },
  ];

  model: any = {};
  showModal(data: any): void {
    this.model = data;
  }
}
