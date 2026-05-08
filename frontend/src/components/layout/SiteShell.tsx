import { Menu, MessageCircle, Scissors, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import { buildWhatsAppUrl } from "../../lib/whatsapp";

const links = [
  { to: "/", label: "Home" },
  { to: "/servicos", label: "Serviços" },
  { to: "/precos", label: "Preços" },
  { to: "/galeria", label: "Galeria" },
  { to: "/sobre", label: "Sobre" },
  { to: "/localizacao", label: "Localização" },
];

export function SiteShell() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian text-pearl">
      <header className="sticky top-0 z-50 border-b border-pearl/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Studio Carlu Styles">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/45 bg-gold/10 text-gold">
              <Scissors size={18} aria-hidden="true" />
            </span>
            <span className="font-display text-2xl text-pearl">Studio Carlu Styles</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  [
                    "font-ui text-sm text-pearl/68 transition hover:text-gold",
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
            className="hidden min-h-11 items-center gap-2 rounded-full bg-gold px-5 font-ui text-sm font-semibold text-black transition hover:bg-champagne lg:inline-flex"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Agendar
          </a>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-pearl/15 text-pearl lg:hidden"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-pearl/10 bg-black px-4 py-5 lg:hidden">
            <nav className="grid gap-1" aria-label="Navegação mobile">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 font-ui text-sm text-pearl/76 hover:bg-pearl/8 hover:text-gold"
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-pearl/10 bg-black px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-display text-3xl text-pearl">Studio Carlu Styles</p>
            <p className="mt-3 max-w-xl font-body text-sm leading-7 text-pearl/62">
              Beleza técnica com sofisticação e cuidado premium.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:justify-end">
            <Link to="/politica-de-privacidade" className="font-ui text-sm text-pearl/62 hover:text-gold">
              Política de privacidade
            </Link>
            <a href={buildWhatsAppUrl({})} className="font-ui text-sm text-gold hover:text-champagne">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
