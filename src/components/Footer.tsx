import Link from "next/link";
import { Camera, MessageCircle, Users, Sparkles } from "lucide-react";

const sitemap = [
  { heading: "Studio", links: [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]},
  { heading: "Work With Us", links: [
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/order", label: "Start a Project" },
  ]},
  { heading: "Your Account", links: [
    { href: "/dashboard", label: "Client Dashboard" },
    { href: "/admin", label: "Artist Dashboard" },
  ]},
];

export default function Footer() {
  return (
    <footer className="border-t-4 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display text-2xl text-white">
              <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-sunshine text-ink">
                <Sparkles className="h-4 w-4" aria-hidden />
              </span>
              Artsy Stories
            </Link>
            <p className="mt-4 max-w-sm text-sm text-paper/70">
              A premium graphic design and digital art studio — bold branding and
              original illustration, every piece finished by a human artist.
            </p>
            <div className="mt-5 flex gap-3">
              {[Camera, MessageCircle, Users].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Artsy Stories on social media"
                  className="grid h-9 w-9 place-items-center rounded-full border-2 border-paper/40 text-paper/80 transition hover:border-sunshine hover:text-sunshine"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {sitemap.map((col) => (
            <div key={col.heading}>
              <h3 className="font-utility text-xs uppercase tracking-widest text-sunshine">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-paper/80 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-utility text-xs uppercase tracking-widest text-sunshine">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
              <li>hello@artsystories.studio</li>
              <li>Mon–Fri, 9am–6pm (GMT+5)</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-paper/20 pt-6 text-xs text-paper/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Artsy Stories. All rights reserved.</p>
          <p>Made with ink, color, and a little bit of magic.</p>
        </div>
      </div>
    </footer>
  );
}
