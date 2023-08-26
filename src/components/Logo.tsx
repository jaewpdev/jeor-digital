import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-mono tracking-tighter text-4xl font-light hover-blue ${className}`}
    >
      A.DS
    </Link>
  );
}
