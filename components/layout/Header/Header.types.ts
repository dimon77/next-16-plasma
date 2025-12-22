export interface NavItem {
  href: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface HeaderProps {
  className?: string;
  navItems?: NavItem[];
  logoText?: string;
  rightContent?: React.ReactNode;
  showAuthButton?: boolean;
  onAuthClick?: () => void;
  authButtonText?: string;
  isAuthenticated?: boolean;
}
