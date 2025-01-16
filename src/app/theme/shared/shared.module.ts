import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { DefaultComponent } from '../layouts/default/default.component';
import { NavBarComponent } from '../layouts/default/nav-bar/nav-bar.component';
import { NavigationComponent } from '../layouts/admin-layout/navigation/navigation.component';
import { TuiButton } from '@taiga-ui/core';
import { SidebarComponent } from '../layouts/admin-layout/sidebar/sidebar.component';
import { CustomerCareComponent } from '../layouts/admin-layout/customer-care/customer-care.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SidebarContentComponent } from '../layouts/admin-layout/sidebar/sidebar-content/sidebar-content.component';
import { MenuItemComponent } from '../layouts/admin-layout/sidebar/sidebar-content/menu-item/menu-item.component';
import { TransactionsComponent } from '../layouts/admin-layout/customer-care/billing/transactions/transactions.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DefaultComponent,
    NavBarComponent,
    NavigationComponent,
    SidebarComponent,
    CustomerCareComponent,
    BreadcrumbComponent,
    SidebarContentComponent,
    MenuItemComponent,
    TransactionsComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    TuiButton
  ],
  exports: [
    AdminLayoutComponent,
    DefaultComponent,
    NavBarComponent,
    NavigationComponent,
    SidebarComponent,
    CustomerCareComponent,
    BreadcrumbComponent,
    SidebarContentComponent,
    MenuItemComponent,
    TransactionsComponent
  ]
})
export class SharedModule { }

