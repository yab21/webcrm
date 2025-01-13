import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private moduleTitle = new BehaviorSubject<string>('');
  currentTitle = this.moduleTitle.asObservable();

  setTitle(title: string) {
    this.moduleTitle.next(title);
  }
} 