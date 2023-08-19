import Link from 'next/link';

interface INavItem {
  name: string;
  href: string;
}

const navItems: INavItem[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'Work',
    href: '/work',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export default function NavMenu() {
  return (
    <nav className="inline-flex gap-6 w-auto">
      {navItems.map(({ name, href }) => (
        <Link href={href} key={href} className="text-h6 hover-blue">
          {name}
        </Link>
      ))}
    </nav>
  );
}
