import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showHomeLabel: boolean = false;
  showOuvirLabel: boolean = false;
  showFalarLabel: boolean = false;

  showLabel(label: string) {
    switch (label) {
      case 'home':
        this.showHomeLabel = true;
        this.showOuvirLabel = false;
        this.showFalarLabel = false;
        break;
      case 'ouvir':
        this.showHomeLabel = false;
        this.showOuvirLabel = true;
        this.showFalarLabel = false;
        break;
      case 'falar':
        this.showHomeLabel = false;
        this.showOuvirLabel = false;
        this.showFalarLabel = true;
        break;
      default:
        this.showHomeLabel = false;
        this.showOuvirLabel = false;
        this.showFalarLabel = false;
        break;
    }
  }
}


