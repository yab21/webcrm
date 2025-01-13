import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { TitleService } from '../../../shared/services/title.service';
import { SidebarService } from '../../../shared/services/sidebar.service';

@Component({
  selector: 'app-navigation',
  standalone: false,
  
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  isUserMenuOpen = false;
  moduleTitle: string = '';

  constructor(
    private eRef: ElementRef,
    private titleService: TitleService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit() {
    this.titleService.currentTitle.subscribe(title => {
      this.moduleTitle = title;
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  // Ferme le menu si on clique en dehors
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isUserMenuOpen = false;
    }
  }
}
