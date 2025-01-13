import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MenuItemBottomComponent } from './sidebar/sidebar-content/menu-item-bottom/menu-item-bottom.component';
import { ItemBottomComponent } from './sidebar/sidebar-content/item-bottom/item-bottom.component';
import { MenuBottomComponent } from './sidebar/sidebar-content/menu-bottom/menu-bottom.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    MenuItemBottomComponent,
    ItemBottomComponent,
    MenuBottomComponent
  ]
})
export class AdminLayoutModule { } 