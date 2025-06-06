import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Elegance Beauty Salon"
            width={40}
            height={40}
          />
          <span className="font-serif text-xl font-medium">Demo</span>
        </Link>
        <nav className="hidden md:flex md:gap-6">
          <Link
            href="#services"
            className="text-sm font-medium text-slate-700 hover:text-rose-500"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-slate-700 hover:text-rose-500"
          >
            About
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-slate-700 hover:text-rose-500"
          >
            Testimonials
          </Link>
          <Link
            href="#reservation"
            className="text-sm font-medium text-slate-700 hover:text-rose-500"
          >
            Book Now
          </Link>
        </nav>
        <Button
          asChild
          size="sm"
          className="hidden bg-rose-500 hover:bg-rose-600 md:inline-flex"
        >
          <Link href="#reservation">Book Appointment</Link>
        </Button>
        <Button variant="outline" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  );
}
