"use client";

import { Animate } from "@/hooks/Animate";
import Logo from "./Logo";
import NavMenu, { MobileNavMenu } from "./NavMenu";
import Hamburger from "./Hamburger";
import { useState } from "react";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <div className="h-[72px] py-4">
      <Animate
        className="container mx-auto flex justify-between items-center bg-white z-10 top-0 left-0"
        variant="fadeUp"
      >
        <Logo className="z-20" />
        <Hamburger
          setMobileMenuIsOpen={setMobileMenuIsOpen}
          mobileMenuIsOpen={mobileMenuIsOpen}
        />
        <NavMenu />
        <MobileNavMenu mobileMenuIsOpen={mobileMenuIsOpen} />
      </Animate>
    </div>
  );
}
