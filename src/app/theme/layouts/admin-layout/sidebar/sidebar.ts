export interface SidebarItem {
  id?: string;
  label: string;
  route?: string;
  icon?: string;
  children?: SidebarItem[];
  isExpandable?: boolean;
  isExpanded?: boolean;
}

export const SidebarItems: SidebarItem[] = [ 
  {
    id: 'MAIN MENU',
    label: 'CRM',
    icon: '/ICONE/Groupe 20209.svg',
    isExpandable: true,
    isExpanded: true,
    children: [
      { 
        label: 'Client',
        isExpandable: true,
        isExpanded: false,
        children: [
          { label: 'New Client', route: '/admin/client/new-client' },
          { label: 'Shareholder Client', route: '/admin/crm/shareholder' },
          { label: 'Change Subscriber Details', route: '/admin/client/changesubscriberdetails' }
        ]
      },
      { label: 'Accounts', route: '/admin/crm/accounts' },
      { label: 'Services', route: '/admin/crm/services' },
      { label: 'Orange Money', route: '/admin/crm/orange-money' },
      { label: 'Contracts', route: '/admin/crm/contracts' },
      { 
        label: 'Billing',
        isExpandable: true,
        isExpanded: false,
        children: [
          { label: 'Call Details Prepaid', route: '/admin/billing/calldetailsprepaid' },
          { label: 'Call Details Postpaid', route: '/admin/billing/calldetailspostpaid' },
          { label: 'Call Details-Billed', route: '/admin/billing/calldetailsbilled' },
          { label: 'Transactions', route: '/admin/billing/transactions' },
          { label: 'Billed Transactions', route: '/admin/billing/billedtransactions' }
        ]
      },
    ]
  },
  {
    label: 'System',
    icon: '/ICONE/Groupe 20209.svg',
    route: '/admin/teams'
  },
  {
    label: 'Global',
    icon: '/ICONE/Groupe 20211.svg',
    route: '/admin/global'
  },
  {
    label: 'Reporting Manager',
    icon: '/ICONE/Layer 2.svg',
    route: '/admin/account'
  },
  {
    label: 'Exit',
    icon: '/ICONE/eXIT.svg',
    route: '/admin/account'
  },
  // SETTINGS
  {
    id: 'SETTINGS',
    label: 'Update',
    icon: '/ICONE/_icons.svg',
    route: '/admin/update'
  },
  {
    label: 'Impersonate',
    icon: '/ICONE/Impersanate.svg',
    route: '/admin/impersonate'
  },
  {
    label: 'Password Change',
    icon: '/ICONE/Tracé 23151.svg',
    route: '/admin/passwordchange'
  },
  {
    label: 'Help',
    icon: '/ICONE/Tracé 23152.svg',
    route: '/admin/help'
  },
  {
    label: 'LogOff',
    icon: '/ICONE/Groupe 20212.svg',
    route: '/admin/logoff'
  },
];