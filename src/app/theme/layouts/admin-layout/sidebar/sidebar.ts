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
    children: [
      { label: 'New Client', route: '/crm/dashboard' },
      { label: 'Shareholder Client', route: '/crm/clients' },
      { label: 'Change Subscriber Details', route: '/crm/prospects' },
      { label: 'Accounts', route: '/crm/accounts' },
      { label: 'Services', route: '/crm/services' },
      { label: 'Orange Money', route: '/crm/orange-money' },
      { label: 'Contracts', route: '/crm/contracts' },
      { label: 'Billing', route: '/crm/billing' }
    ],
  },
  {
    label: 'Teams',
    icon: 'assets/icons/teams.svg',
    route: '/teams',
  },
  {
    label: 'Billing',
    icon: 'assets/icons/billing.svg',
    route: '/billing',
  },
  {
    label: 'Account',
    icon: 'assets/icons/account.svg',
  }
].map(item => ({
  ...item,
  isExpandable: !!item.children?.length,
}))
