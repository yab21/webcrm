import { Component } from '@angular/core';
import { SidebarItems } from '../../sidebar';
import { SidebarItem } from '../../sidebar';

@Component({
  selector: 'app-menu-bottom',
  standalone: false,
  
  templateUrl: './menu-bottom.component.html',
  styleUrl: './menu-bottom.component.scss'
})
export class MenuBottomComponent {
  sidebarItems: SidebarItem[] = [];

  ngOnInit() {
    this.sidebarItems = SidebarItems;
  }

  trackByFn(index: number, item: SidebarItem): number {
    return index; 
  }

  toggleExpand(item: SidebarItem, event: KeyboardEvent | null): void {
    if (event && event.key !== 'Enter' && event.key !== ' ') {
      return;
    }
    
    if (item.isExpandable) {
      item.isExpanded = !item.isExpanded;
    }
  }
}
