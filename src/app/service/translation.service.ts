import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor() { }

  speakWord(word: string, language: string, speakingSpeed: number): void {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = language;
    utterance.rate = speakingSpeed; // Define a velocidade da fala
    speechSynthesis.speak(utterance);
  }
}
