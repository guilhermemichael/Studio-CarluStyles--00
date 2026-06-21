import { Instagram, MapPin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

import { env } from "../../lib/env";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

const links = [
  { to: "/servicos", label: "Serviços" },
  { to: "/galeria", label: "Galeria" },
  { to: "/precos", label: "Preços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/localizacao", label: "Contato" },
];

export function SiteShell() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const solidHeader = scrolled || !isHome || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-obsidian text-pearl">
      <header
        className={[
          "fixed top-0 z-50 w-full border-b transition duration-500",
          solidHeader
            ? "border-pearl/10 bg-obsidian/92 backdrop-blur-sm"
            : "border-transparent bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-6 py-5 lg:h-24 lg:px-16">
          <Link to="/" className="font-display text-2xl leading-none text-pearl" aria-label="Studio Carlu Styles">
            Studio Carlu Styles
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  [
                    "font-ui text-sm text-pearl/62 transition duration-500 hover:text-gold",
                    isActive ? "text-gold" : "",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <a
            href={buildWhatsAppUrl({})}
            className="hidden min-h-11 items-center rounded-md bg-gold px-5 font-ui text-sm font-semibold text-black transition duration-500 hover:bg-champagne lg:inline-flex"
          >
            Reservar horário
          </a>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-pearl/15 text-pearl transition duration-500 hover:border-gold hover:text-gold lg:hidden"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-pearl/10 bg-obsidian px-6 py-5 lg:hidden">
            <nav className="grid gap-1" aria-label="Navegação mobile">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 font-ui text-sm text-pearl/76 hover:bg-pearl/10 hover:text-gold"
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href={buildWhatsAppUrl({})}
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex min-h-11 items-center justify-center rounded-md bg-gold px-5 font-ui text-sm font-semibold text-black"
              >
                Reservar horário
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className={isHome ? "" : "pt-24"}>
        <Outlet />
      </main>

      <footer className="border-t border-pearl/10 bg-obsidian px-6 py-16 text-pearl lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-3xl">Studio Carlu Styles</p>
            <p className="mt-3 max-w-sm font-body text-sm leading-7 text-pearl/58">
              Beleza técnica com sofisticação e cuidado premium.
            </p>
          </div>

          <div>
            <p className="font-ui text-xs font-semibold uppercase text-gold">
              Navegação
            </p>
            <div className="mt-4 grid gap-3">
              {links.slice(0, 4).map((link) => (
                <Link key={link.to} to={link.to} className="font-ui text-sm text-pearl/62 hover:text-gold">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-ui text-xs font-semibold uppercase text-gold">
              Contato
            </p>
            <div className="mt-4 grid gap-3">
              <a href={buildWhatsAppUrl({})} className="font-ui text-sm text-pearl/62 hover:text-gold">
                WhatsApp
              </a>
              <a
                href={env.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-ui text-sm text-pearl/62 hover:text-gold"
              >
                <Instagram size={15} aria-hidden="true" />
                @studio_carlustyles
              </a>
              <a
                href={env.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-ui text-sm text-pearl/62 hover:text-gold"
              >
                <MapPin size={15} aria-hidden="true" />
                Como chegar
              </a>
            </div>
          </div>

          <div>
            <p className="font-ui text-xs font-semibold uppercase text-gold">
              Legal
            </p>
            <div className="mt-4 grid gap-3">
              <Link to="/politica-de-privacidade" className="font-ui text-sm text-pearl/62 hover:text-gold">
                Política de privacidade
              </Link>
              <span className="font-ui text-sm text-pearl/35">
                © 2026 Studio Carlu Styles
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
