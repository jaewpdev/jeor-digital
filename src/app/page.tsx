import Hero from './sections/Hero';
import Problem from './sections/Problem';
import ServiceAndImpact from './sections/ServiceAndImpact';

export default function Home() {
  return (
    <main className="overflow-hidden -mt-[72px]">
      <Hero />
      <Problem />
      <ServiceAndImpact />
    </main>
  );
}
