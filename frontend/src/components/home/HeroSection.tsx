import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import { ButtonLink } from "../ui/Button";
import { carluAssets } from "../../features/carlu/assets";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

const highlights = [
  { label: "Diagnóstico capilar", icon: ShieldCheck },
  { label: "Tratamentos profissionais", icon: Sparkles },
  { label: "Finalização premium", icon: ArrowRight },
];

export function HeroSection() {
  const [portraitSrc, setPortraitSrc] = useState(carluAssets.portraitScissors);

  return (
    <section className="relative min-h-[88svh] overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.98),rgba(8,8,8,0.9)_48%,rgba(36,51,35,0.55))]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      <div className="relative mx-auto grid min-h-[88svh] max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-ui text-sm font-semibold text-gold"
          >
            Luxury Beauty Lab
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.06 }}
            className="mt-5 max-w-3xl font-display text-5xl leading-none text-pearl sm:text-6xl lg:text-7xl"
          >
            Studio Carlu Styles
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.12 }}
            className="mt-6 max-w-2xl font-body text-lg leading-8 text-pearl/82"
          >
            Beleza técnica com sofisticação e cuidado premium em transformações
            capilares, tratamentos, luzes, mechas e finalizações profissionais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.18 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href={buildWhatsAppUrl({})} icon={<MessageCircle size={18} aria-hidden="true" />}>
              Agendar pelo WhatsApp
            </ButtonLink>
            <ButtonLink href="/precos" tone="ghost" icon={<ArrowRight size={18} aria-hidden="true" />}>
              Ver serviços e valores
            </ButtonLink>
          </motion.div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-lg border border-pearl/12 bg-black/45 px-4 py-3 backdrop-blur"
                >
                  <Icon className="text-gold" size={18} aria-hidden="true" />
                  <span className="font-ui text-sm text-pearl/72">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.82, delay: 0.16 }}
          className="relative mx-auto w-full max-w-xl overflow-hidden rounded-lg border border-pearl/10 bg-white/[0.035] shadow-goldGlow"
        >
          <img
            src={portraitSrc}
            alt="Carlu, profissional da Studio Carlu Styles, segurando ferramenta de cabelo"
            className="aspect-[4/5] w-full object-cover"
            onError={() => setPortraitSrc(carluAssets.logoFallback)}
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/78 to-transparent p-6">
            <p className="font-ui text-sm font-semibold text-gold">Carlu</p>
            <p className="mt-1 font-body text-sm text-pearl/72">
              assinatura profissional, cuidado tecnico e acabamento premium
            </p>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
