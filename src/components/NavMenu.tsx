import Link from "next/link";

interface INavItem {
  name: string;
  href: string;
}

const navItems: INavItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function NavMenu() {
  return (
    <nav className="gap-6 w-auto hidden lg:inline-flex">
      {navItems.map(({ name, href }) => (
        <Link href={href} key={href} className="text-h6 hover-blue">
          {name}
        </Link>
      ))}
    </nav>
  );
}

export function MobileNavMenu({
  mobileMenuIsOpen,
}: {
  mobileMenuIsOpen: boolean;
}) {
  return (
    <nav
      className={`w-screen h-screen flex flex-col items-center justify-center gap-2 bg-white z-[2] lg:hidden absolute top-0 transition-all duration-200 ease-in-out ${
        mobileMenuIsOpen ? "left-0" : "left-full"
      }`}
    >
      {navItems.map(({ name, href }) => (
        <Link href={href} key={href} className=" uppercase text-3xl p-3">
          {name}
        </Link>
      ))}
    </nav>
  );
}
