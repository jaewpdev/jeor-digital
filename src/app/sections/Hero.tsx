'use client';

import { Animate } from '@/hooks/Animate';
import ImgAbstractHomeHero from '../../../public/img--abstract-home-hero.svg';

export default function Hero() {
  return (
    <section className="pt-20">
      <Animate variant="slideUp">
        <h1>Ackermann</h1>
      </Animate>
      <Animate variant="slideUp">
        <h1>Digital</h1>
      </Animate>
      <Animate variant="slideUp">
        <h1>Solutions</h1>
      </Animate>

      <ImgAbstractHomeHero />
    </section>
  );
}
