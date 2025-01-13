import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isOpen = new BehaviorSubject<boolean>(true);
  sidebarState = this.isOpen.asObservable();

  toggleSidebar() {
    this.isOpen.next(!this.isOpen.value);
  }
} 