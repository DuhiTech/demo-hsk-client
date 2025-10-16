import Tooltip from '@/components/custom/tooltip';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { type LucideProps } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export interface NavigationItem {
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
  title: string;
  href: string;
}

interface SidebarNavigationProps {
  items: NavigationItem[];
  collapsed: boolean;
}

const SidebarNavigation = ({ items = [], collapsed }: SidebarNavigationProps) => {
  return (
    <div className={cn('flex h-full flex-col gap-2', { 'items-center justify-center': collapsed })}>
      {items.map(({ Icon, href, title }, index) => (
        <NavigationButton key={index} Icon={Icon} title={title} collapsed={collapsed} href={href} />
      ))}
    </div>
  );
};

interface NavigationButtonProps extends NavigationItem {
  collapsed: boolean;
}

const NavigationButton = ({ Icon, title, href, collapsed }: NavigationButtonProps) => {
  const { pathname } = useLocation();
  const active = pathname.startsWith(href);

  return (
    <Tooltip content={title} contentProps={{ hidden: !collapsed, side: 'right' }}>
      <Button
        variant={active ? 'default' : collapsed ? 'secondary' : 'ghost'}
        size="lg"
        className={collapsed ? 'size-12 justify-center rounded-full' : 'justify-start'}
        asChild
      >
        <Link to={href}>
          <Icon className="size-5" />
          {!collapsed && title}
        </Link>
      </Button>
    </Tooltip>
  );
};

export default SidebarNavigation;
