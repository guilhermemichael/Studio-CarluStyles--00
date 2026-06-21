import { ArrowDown, ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import { carluAssets } from "../../features/carlu/assets";
import { buildWhatsAppUrl } from "../../lib/whatsapp";
import { ButtonLink } from "../ui/Button";

export function HeroSection() {
  const [portraitSrc, setPortraitSrc] = useState(carluAssets.portraitScissors);

  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-obsidian text-pearl lg:min-h-screen">
      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(10,10,12,0.98),rgba(10,10,12,0.88)_46%,rgba(10,10,12,0.2))]" />
      <div className="relative mx-auto grid min-h-[92svh] max-w-[1440px] gap-12 px-6 pb-14 pt-28 lg:min-h-screen lg:grid-cols-12 lg:items-center lg:px-16">
        <div className="z-10 lg:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-ui text-xs font-semibold uppercase text-gold"
          >
            Studio de beleza em São Francisco, PB
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.06, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-6 max-w-4xl font-display text-4xl leading-[1.08] text-pearl sm:text-5xl lg:text-7xl"
          >
            Mais de 15 anos de técnica, cuidado e evolução profissional.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-7 max-w-xl font-body text-base leading-8 text-pearl/72"
          >
            Carlu une experiência, cursos anuais e olhar personalizado para entregar
            loiros, tratamentos, químicas e finalizações com segurança e sofisticação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href={buildWhatsAppUrl({})} icon={<MessageCircle size={18} aria-hidden="true" />}>
              Consultar horário disponível
            </ButtonLink>
            <ButtonLink href="/precos" tone="ghost" icon={<ArrowRight size={18} aria-hidden="true" />}>
              Ver serviços e valores
            </ButtonLink>
          </motion.div>

          <p className="mt-10 max-w-lg border-l border-gold/60 pl-5 font-ui text-xs uppercase leading-6 text-pearl/58">
            Especialista em loiros · tratamentos profissionais · atendimento local
          </p>
        </div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.82, delay: 0.16, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute inset-0 mx-auto w-full overflow-hidden bg-white/[0.035] opacity-35 lg:relative lg:inset-auto lg:col-span-7 lg:h-[82vh] lg:max-w-2xl lg:rounded-md lg:border lg:border-pearl/10 lg:opacity-100"
        >
          <img
            src={portraitSrc}
            alt="Carlu, profissional da Studio Carlu Styles, em atendimento técnico"
            className="h-full w-full object-cover contrast-110 saturate-90 lg:min-h-[520px]"
            onError={() => setPortraitSrc(carluAssets.logoFallback)}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,10,12,0.24))]" />
        </motion.figure>

        <a
          href="#manifesto"
          className="absolute bottom-5 left-6 z-20 inline-flex items-center gap-2 font-ui text-xs uppercase text-pearl/48 transition duration-500 ease-luxury hover:text-gold lg:left-16"
        >
          <ArrowDown size={15} aria-hidden="true" />
          Scroll
        </a>
      </div>
    </section>
  );
}
