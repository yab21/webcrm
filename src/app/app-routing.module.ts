import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './theme/layouts/default/default.component';
import { AdminLayoutComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { CustomerCareComponent } from './theme/layouts/admin-layout/customer-care/customer-care.component';
import { TransactionsComponent } from './theme/layouts/admin-layout/customer-care/billing/transactions/transactions.component';
import { ChangeSubscriberDetailsComponent } from './theme/layouts/admin-layout/customer-care/change-subscriber-details/change-subscriber-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: DefaultComponent
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'customercare',
        pathMatch: 'full'
      },
      {
        path: 'customercare',
        component: CustomerCareComponent,
        data: { breadcrumb: 'Subscribers' }
      },
      {
        path: 'billing/transactions', 
        component: TransactionsComponent,
        data: { breadcrumb: 'Transactions' }
      },
      {
        path: 'client/changesubscriberdetails',
        component: ChangeSubscriberDetailsComponent,
        data: { breadcrumb: 'Client - Change Subscriber Details' }
      }
  
      // {
      //   path: 'crm',
      //   loadChildren: () => import('./theme/layouts/admin-layout/crm/crm.module').then(m => m.CrmModule)
      // }
    ]
  },
  {
    path: '**',
    redirectTo: '/landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
