import { Injectable } from '@angular/core';
import { Emotions } from './emotions.model';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  public unknown = String.fromCodePoint(0x2753);

  constructor() { }

  public getEmoji(emotions: Emotions) {
    // TODO: Code here
  }

  public getDefaultEmoji() {
    return this.unknown;
  }
}
