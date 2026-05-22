import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface HeaderMenuProps {
  items: HeaderMenuItem[];
}

export interface HeaderMenuItem {
  title: string;
  link: string;
  isActive?: boolean;
  onClick?: () => void;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({
  items
}) => {
  // Get Current Route
  const pathname = usePathname()

  return (
    <ul className='flex gap-12 items-center'>
      {items.map((item, index) => (
        <li key={index} className={twMerge(pathname === item.link.split('?')[0] ? 'font-extrabold' : '')}><Link href={item.link}>{item.title}</Link></li>
      ))}
    </ul>
  );
};

export default HeaderMenu;
