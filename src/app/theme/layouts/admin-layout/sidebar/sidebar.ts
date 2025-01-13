export interface SidebarItem {
  label: string;
  route?: string;
  icon?: string;
  children?: SidebarItem[];
  isExpandable?: boolean;
  isExpanded?: boolean;
}

export const SidebarItems: SidebarItem[] = [
  {
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
          { label: 'New Client', route: '/admin/crm/new-client' },
          { label: 'Shareholder Client', route: '/admin/crm/shareholder' },
          { label: 'Change Subscriber Details', route: '/admin/crm/change-subscriber' }
        ]
      },
      { label: 'Accounts', route: '/admin/crm/accounts' },
      { label: 'Services', route: '/admin/crm/services' },
      { label: 'Orange Money', route: '/admin/crm/orange-money' },
      { label: 'Contracts', route: '/admin/crm/contracts' },
      { label: 'Billing', route: '/admin/crm/billing' }
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
    route: '/admin/billing'
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
];