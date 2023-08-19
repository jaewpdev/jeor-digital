import { Animate } from '@/hooks/Animate';
import Logo from './Logo';
import NavMenu from './NavMenu';

export default function Header() {
  return (
    <Animate
      className="container mx-auto py-4 flex justify-between items-center"
      variant="fadeUp"
    >
      <Logo />
      <NavMenu />
    </Animate>
  );
}
