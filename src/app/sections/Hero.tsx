"use client";

import { Animate } from "@/hooks/Animate";
import ImgAbstract1 from "../../../public/img--abstract-1.svg";

export default function Hero() {
  return (
    <section className="h-screen flex">
      <div className="w-screen flex flex-col lg:flex-row justify-between mt-auto mb-12 gap-4">
        <div>
          <Animate variant="slideUp">
            <h1>Ackermann</h1>
          </Animate>
          <Animate variant="slideUp">
            <h1>Digital</h1>
          </Animate>
          <Animate variant="slideUp">
            <h1>Solutions</h1>
          </Animate>
        </div>

        <Animate variant="fadeUp">
          <p className="max-w-[30ch] ml-auto">
            We build standout websites that genuinely reflect your brand. Our
            social media strategies are all about authentic engagement, and
            we&apos;re experts in turning casual clicks into loyal customers.
          </p>
        </Animate>
      </div>
    </section>
  );
}
