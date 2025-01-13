import { Component, OnInit } from '@angular/core';
import { SidebarItem, SidebarItems } from '../../sidebar';

@Component({
  selector: 'app-menu-item',
  standalone: false,
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent implements OnInit {
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
