import { pageMetadata } from "../features/seo/metadata";
import { Seo } from "../features/seo/Seo";
import { buildWhatsAppUrl } from "../lib/whatsapp";

export function PrivacyPolicyPage() {
  return (
    <>
      <Seo {...pageMetadata.privacy} />
      <section className="bg-pearl px-4 py-24 text-black sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="font-ui text-sm font-semibold text-roseGold">Privacidade</p>
          <h1 className="mt-3 font-display text-5xl leading-tight">
            Política de privacidade
          </h1>
          <p className="mt-4 font-body text-sm text-black/54">
            Atualizada em 21 de junho de 2026.
          </p>

          <div className="mt-10 grid gap-8 font-body text-sm leading-7 text-black/68">
            <section>
              <h2 className="font-display text-3xl text-black">Quem controla os dados</h2>
              <p className="mt-3">
                A Studio Carlu Styles usa os dados enviados voluntariamente neste site para
                atendimento, avaliação capilar, retorno comercial e organização de agenda.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-black">Dados coletados</h2>
              <ul className="mt-3 grid gap-2">
                <li>Nome, WhatsApp e consentimento de contato.</li>
                <li>Serviço de interesse, comprimento, volume, objetivo e mensagem.</li>
                <li>Histórico químico informado pela cliente.</li>
                <li>Dados técnicos mínimos, como data, origem do envio e endereço IP.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl text-black">Finalidade e base legal</h2>
              <p className="mt-3">
                O tratamento ocorre para executar medidas solicitadas pela própria cliente,
                responder contatos, estimar serviços, prevenir abuso dos formulários e cumprir
                obrigações legais quando aplicável. O consentimento é solicitado antes do envio
                de dados pelos formulários do site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-black">Compartilhamento</h2>
              <p className="mt-3">
                O site pode direcionar a cliente para WhatsApp, Instagram e Google Maps. Esses
                serviços possuem políticas próprias e podem tratar dados conforme seus termos.
                A Studio Carlu Styles não vende dados pessoais.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-black">Retenção e segurança</h2>
              <p className="mt-3">
                Os registros são mantidos apenas pelo tempo necessário para atendimento,
                histórico de relacionamento, prevenção de abuso e obrigações administrativas.
                Dados sensíveis enviados fora do necessário podem ser descartados.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-black">Direitos da cliente</h2>
              <p className="mt-3">
                Você pode solicitar confirmação de tratamento, correção, atualização, exclusão
                ou revogação de consentimento pelo canal oficial de WhatsApp.
              </p>
              <a
                href={buildWhatsAppUrl({
                  message: "Olá, quero falar sobre meus dados pessoais no site Studio Carlu Styles.",
                })}
                className="mt-4 inline-flex min-h-12 items-center justify-center rounded-md bg-black px-6 font-ui text-sm font-semibold text-pearl transition hover:bg-graphite"
              >
                Solicitar pelo WhatsApp
              </a>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
