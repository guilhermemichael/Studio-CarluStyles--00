const testimonials = [
  {
    quote: "Meu cabelo nunca teve tanta identidade.",
    author: "Cliente Studio Carlu Styles",
  },
  {
    quote: "A avaliação foi clara, cuidadosa e o resultado ficou exatamente dentro do que eu queria.",
    author: "Cliente de transformação",
  },
  {
    quote: "Dá para sentir que cada etapa tem técnica, calma e intenção.",
    author: "Cliente de tratamento",
  },
];

const metrics = [
  ["01", "diagnóstico antes da técnica"],
  ["04", "faixas de comprimento para orçamento"],
  ["24h", "mensagem pronta para confirmar disponibilidade"],
];

export function TestimonialsSection() {
  return (
    <section className="bg-carbon px-6 py-28 text-pearl lg:px-16 lg:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Confiança
          </p>
          <div className="mt-8 grid gap-6">
            {metrics.map(([value, label]) => (
              <div key={label} className="border-t border-pearl/10 pt-5">
                <p className="font-display text-5xl text-gold">{value}</p>
                <p className="mt-2 font-ui text-xs uppercase leading-5 tracking-[0.16em] text-pearl/48">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-7 lg:col-span-8">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.quote} className="border-b border-pearl/10 pb-7">
              <p className="font-accent text-4xl leading-tight text-pearl sm:text-5xl">
                “{testimonial.quote}”
              </p>
              <footer className="mt-5 font-ui text-xs uppercase tracking-[0.18em] text-gold">
                {testimonial.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
