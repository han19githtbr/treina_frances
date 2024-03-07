/*import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../../service/translation.service';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent {

  word: string = '';
  language: string = 'fr';
  speakingSpeed: number = 1; // Velocidade padrão de fala
  spokenWord: string = '';

  constructor(private translationService: TranslationService) { }

  speakWord(): void {
    this.translationService.speakWord(this.word, this.language, this.speakingSpeed);
  }

  speakDescription(description: string): void {
    this.translationService.speakWord(description, this.language, this.speakingSpeed);
    this.spokenWord = description; // Atualiza a palavra falada
  }

  onSpeedChange(event: any): void {
    this.speakingSpeed = event.target.value;
  }

  onImageClick(description: string): void {
    this.speakDescription(description);
  }

}*/
