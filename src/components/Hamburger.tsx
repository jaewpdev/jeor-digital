import { Dispatch, SetStateAction } from "react";

export default function Hamburger({
  mobileMenuIsOpen,
  setMobileMenuIsOpen,
}: {
  mobileMenuIsOpen: boolean;
  setMobileMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <button
      className="p-4 -m-4 w-16 h-12 relative flex flex-col justify-between lg:hidden z-20"
      onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
    >
      {mobileMenuIsOpen ? (
        <>
          <div className="absolute w-full h-px bg-black transform rotate-45 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
          <div className="absolute w-full h-px bg-black transform -rotate-45 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
        </>
      ) : (
        <>
          <div className="w-full h-px bg-black" />
          <div className="w-full h-px bg-black" />
          <div className="w-full h-px bg-black" />
        </>
      )}
    </button>
  );
}
