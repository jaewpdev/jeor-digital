"use client";

import { useRef, useState } from "react";
import IconAccordionArrow from "/public/icon--accordion-arrow.svg";

export default function Accordion({
  heading,
  className,
  children,
}: {
  heading: React.ReactNode | string;
  className?: string;
  children: React.ReactNode | string;
}) {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("transform duration-300 ease");

  const accordionRef = useRef<HTMLButtonElement>(null);
  const contentSpace = useRef<HTMLDivElement>(null);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    
    // We'll initiate the height change first so it happens simultaneously with the scroll
    // @ts-ignore
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    
    setRotate(
      active
        ? "transform duration-300 ease"
        : "transform duration-300 ease rotate-180"
    );
  
    setTimeout(() => {
      if (!active && accordionRef.current) {
        const accordionBottomPosition = accordionRef.current.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;
  
        if (viewportHeight - accordionBottomPosition <= 200) {
          window.scrollBy({
            top: 300,
            behavior: "smooth"
          });
        }
      }
    }, 10); // Give a short delay to ensure the updated height starts transitioning
  }
  

  return (
    <button
      ref={accordionRef}
      className={`flex flex-col box-border appearance-none cursor-pointer focus:outline-none w-full ${className}`}
      onClick={toggleAccordion}
    >
      <div className="flex items-center justify-between w-full">
        {heading}
        <IconAccordionArrow height={20} className={rotate} />
      </div>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-hidden transition-max-height duration-300 ease-in-out"
      >
        <div className="">{children}</div>
      </div>
    </button>
  );
}
