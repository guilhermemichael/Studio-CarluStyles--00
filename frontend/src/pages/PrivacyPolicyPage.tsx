import { pageMetadata } from "../features/seo/metadata";
import { Seo } from "../features/seo/Seo";

export function PrivacyPolicyPage() {
  return (
    <>
      <Seo {...pageMetadata.privacy} />
      <section className="bg-pearl px-4 py-16 text-black sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="font-ui text-sm font-semibold text-roseGold">Privacidade</p>
          <h1 className="mt-3 font-display text-5xl leading-tight">Política de privacidade</h1>
          <div className="mt-8 grid gap-5 font-body text-sm leading-7 text-black/68">
            <p>
              A Studio Carlu Styles coleta dados enviados voluntariamente em formulários
              de contato e agendamento, como nome, WhatsApp, serviço desejado, mensagem,
              histórico químico e consentimento de contato.
            </p>
            <p>
              Esses dados são usados apenas para avaliação, atendimento, agendamento e
              continuidade do relacionamento solicitado pela cliente.
            </p>
            <p>
              Fotos enviadas, quando habilitadas, devem ser usadas apenas para avaliação
              capilar e precisam passar por processamento seguro antes de armazenamento.
            </p>
            <p>
              A cliente pode solicitar correção ou remoção dos dados entrando em contato
              pelo canal oficial de WhatsApp da Studio Carlu Styles.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
