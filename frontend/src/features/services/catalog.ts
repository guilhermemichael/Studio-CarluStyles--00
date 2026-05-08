export type HairLengthId = "short" | "medium" | "long" | "extra_long";

export type PriceMode = "fixed" | "by_length" | "evaluation" | "range";

export type ServiceCategoryId =
  | "quick"
  | "finishing"
  | "treatment"
  | "chemical"
  | "transformation";

export type PriceItem = {
  length: HairLengthId;
  value: number;
};

export type Service = {
  id: number;
  name: string;
  slug: string;
  category: ServiceCategoryId;
  shortDescription: string;
  priceMode: PriceMode;
  fixedPrice?: number;
  minPrice?: number;
  maxPrice?: number;
  prefix?: string;
  prices?: PriceItem[];
  requiresEvaluation?: boolean;
  featured?: boolean;
};

export const serviceCategories: Record<ServiceCategoryId, string> = {
  quick: "Serviços rápidos",
  finishing: "Finalização",
  treatment: "Tratamentos",
  chemical: "Químicas",
  transformation: "Transformações",
};

export const hairLengths: Array<{
  id: HairLengthId;
  label: string;
  description: string;
}> = [
  {
    id: "short",
    label: "Curto",
    description: "Até a linha do queixo.",
  },
  {
    id: "medium",
    label: "Médio",
    description: "Até a linha dos ombros.",
  },
  {
    id: "long",
    label: "Longo",
    description: "Abaixo dos ombros.",
  },
  {
    id: "extra_long",
    label: "Extra longo",
    description: "Abaixo do busto ou próximo à cintura.",
  },
];

export const services: Service[] = [
  {
    id: 1,
    name: "Lavagem especial",
    slug: "lavagem-especial",
    category: "quick",
    shortDescription: "Higienização cuidadosa com acabamento de salão.",
    priceMode: "fixed",
    fixedPrice: 15,
    featured: true,
  },
  {
    id: 2,
    name: "Corte",
    slug: "corte",
    category: "quick",
    shortDescription: "Corte com leitura de formato, textura e caimento.",
    priceMode: "fixed",
    fixedPrice: 25,
    prefix: "A partir de",
    featured: true,
  },
  {
    id: 3,
    name: "Escova",
    slug: "escova",
    category: "finishing",
    shortDescription: "Finalização polida com brilho, alinhamento e movimento.",
    priceMode: "by_length",
    prices: [
      { length: "short", value: 20 },
      { length: "medium", value: 25 },
      { length: "long", value: 30 },
      { length: "extra_long", value: 35 },
    ],
    featured: true,
  },
  {
    id: 4,
    name: "Prancha",
    slug: "prancha",
    category: "finishing",
    shortDescription: "Acabamento térmico controlado para fios alinhados.",
    priceMode: "by_length",
    prices: [
      { length: "short", value: 20 },
      { length: "medium", value: 25 },
      { length: "long", value: 30 },
      { length: "extra_long", value: 35 },
    ],
  },
  {
    id: 5,
    name: "Escova + prancha",
    slug: "escova-prancha",
    category: "finishing",
    shortDescription: "Pacote de finalização com polimento intenso.",
    priceMode: "by_length",
    prices: [
      { length: "short", value: 25 },
      { length: "medium", value: 30 },
      { length: "long", value: 35 },
      { length: "extra_long", value: 45 },
    ],
    featured: true,
  },
  {
    id: 6,
    name: "Tranças",
    slug: "trancas",
    category: "finishing",
    shortDescription: "Produção personalizada conforme estilo, técnica e volume.",
    priceMode: "evaluation",
    requiresEvaluation: true,
  },
  {
    id: 7,
    name: "Fitagem",
    slug: "fitagem",
    category: "finishing",
    shortDescription: "Definição de cachos com leitura de curvatura e densidade.",
    priceMode: "evaluation",
    requiresEvaluation: true,
  },
  {
    id: 8,
    name: "Penteados",
    slug: "penteados",
    category: "transformation",
    shortDescription: "Composições para eventos, fotos e ocasiões especiais.",
    priceMode: "evaluation",
    requiresEvaluation: true,
  },
  {
    id: 9,
    name: "Coloração",
    slug: "coloracao",
    category: "chemical",
    shortDescription: "Aplicação técnica com atenção ao histórico capilar.",
    priceMode: "fixed",
    fixedPrice: 25,
  },
  {
    id: 10,
    name: "Pintura",
    slug: "pintura",
    category: "chemical",
    shortDescription: "Cobertura e manutenção de cor com acabamento profissional.",
    priceMode: "fixed",
    fixedPrice: 20,
  },
  {
    id: 11,
    name: "Morena iluminada",
    slug: "morena-iluminada",
    category: "chemical",
    shortDescription: "Iluminação estratégica para contraste elegante e natural.",
    priceMode: "by_length",
    prices: [
      { length: "short", value: 130 },
      { length: "medium", value: 180 },
      { length: "long", value: 200 },
      { length: "extra_long", value: 250 },
    ],
    requiresEvaluation: true,
    featured: true,
  },
  {
    id: 12,
    name: "Luzes / mechas",
    slug: "luzes-mechas",
    category: "chemical",
    shortDescription: "Técnica de clareamento com diagnóstico e refinamento de tom.",
    priceMode: "by_length",
    prices: [
      { length: "short", value: 150 },
      { length: "medium", value: 200 },
      { length: "long", value: 250 },
      { length: "extra_long", value: 300 },
    ],
    requiresEvaluation: true,
    featured: true,
  },
  {
    id: 13,
    name: "Selagem orgânica",
    slug: "selagem-organica",
    category: "chemical",
    shortDescription: "Alinhamento com acabamento disciplinado e toque sofisticado.",
    priceMode: "by_length",
    prices: [
      { length: "short", value: 130 },
      { length: "medium", value: 160 },
      { length: "long", value: 200 },
      { length: "extra_long", value: 250 },
    ],
    requiresEvaluation: true,
  },
  {
    id: 14,
    name: "Selagem",
    slug: "selagem",
    category: "chemical",
    shortDescription: "Controle de frizz e alinhamento conforme estrutura do fio.",
    priceMode: "by_length",
    prices: [
      { length: "short", value: 130 },
      { length: "medium", value: 150 },
      { length: "long", value: 180 },
      { length: "extra_long", value: 200 },
    ],
  },
  {
    id: 15,
    name: "Definitiva Of Gold",
    slug: "definitiva-of-gold",
    category: "chemical",
    shortDescription: "Procedimento técnico com avaliação de resistência e histórico.",
    priceMode: "by_length",
    prices: [
      { length: "short", value: 150 },
      { length: "medium", value: 200 },
      { length: "long", value: 250 },
      { length: "extra_long", value: 300 },
    ],
    requiresEvaluation: true,
  },
  {
    id: 16,
    name: "Progressiva",
    slug: "progressiva",
    category: "chemical",
    shortDescription: "Alisamento e redução de volume com análise prévia do fio.",
    priceMode: "by_length",
    prices: [
      { length: "short", value: 150 },
      { length: "medium", value: 200 },
      { length: "long", value: 250 },
      { length: "extra_long", value: 300 },
    ],
    requiresEvaluation: true,
  },
  {
    id: 17,
    name: "APIOS SOS",
    slug: "apios-sos",
    category: "treatment",
    shortDescription: "Tratamento de suporte para fios que pedem recuperação imediata.",
    priceMode: "fixed",
    fixedPrice: 50,
  },
  {
    id: 18,
    name: "BRAÉ Divine ou BRAÉ Revival",
    slug: "brae-divine-revival",
    category: "treatment",
    shortDescription: "Tratamentos premium para reparação, brilho e toque sedoso.",
    priceMode: "fixed",
    fixedPrice: 80,
    featured: true,
  },
  {
    id: 19,
    name: "Hobety Banho de Ouro",
    slug: "hobety-banho-de-ouro",
    category: "treatment",
    shortDescription: "Ritual de brilho e maciez com assinatura luminosa.",
    priceMode: "fixed",
    fixedPrice: 60,
  },
  {
    id: 20,
    name: "Hobety Hidratação",
    slug: "hobety-hidratacao",
    category: "treatment",
    shortDescription: "Hidratação para reposição de água e maleabilidade.",
    priceMode: "fixed",
    fixedPrice: 50,
  },
  {
    id: 21,
    name: "Hobety Rose Gold",
    slug: "hobety-rose-gold",
    category: "treatment",
    shortDescription: "Tratamento com identidade rose gold e acabamento sofisticado.",
    priceMode: "fixed",
    fixedPrice: 60,
  },
  {
    id: 22,
    name: "Joico Moisture Recovery",
    slug: "joico-moisture-recovery",
    category: "treatment",
    shortDescription: "Hidratação profissional para fios secos e ásperos.",
    priceMode: "fixed",
    fixedPrice: 80,
  },
  {
    id: 23,
    name: "Joico Defy Damage",
    slug: "joico-defy-damage",
    category: "treatment",
    shortDescription: "Proteção e fortalecimento para cabelos sensibilizados.",
    priceMode: "fixed",
    fixedPrice: 80,
  },
  {
    id: 24,
    name: "Joico K-PAK",
    slug: "joico-k-pak",
    category: "treatment",
    shortDescription: "Reconstrução profissional para reposição de resistência.",
    priceMode: "fixed",
    fixedPrice: 80,
  },
  {
    id: 25,
    name: "Cronograma Joico",
    slug: "cronograma-joico",
    category: "treatment",
    shortDescription: "Cronograma premium com etapas combinadas conforme diagnóstico.",
    priceMode: "range",
    minPrice: 200,
    maxPrice: 220,
    featured: true,
  },
  {
    id: 26,
    name: "Keranza Hidratação Intensa",
    slug: "keranza-hidratacao-intensa",
    category: "treatment",
    shortDescription: "Hidratação concentrada para brilho, toque e recuperação estética.",
    priceMode: "fixed",
    fixedPrice: 60,
  },
  {
    id: 27,
    name: "Keranza Nutrição",
    slug: "keranza-nutricao",
    category: "treatment",
    shortDescription: "Reposição nutritiva para fios opacos, secos ou sem movimento.",
    priceMode: "fixed",
    fixedPrice: 60,
  },
  {
    id: 28,
    name: "MDK Hidratação Prime",
    slug: "mdk-hidratacao-prime",
    category: "treatment",
    shortDescription: "Tratamento essencial para revitalizar a fibra capilar.",
    priceMode: "fixed",
    fixedPrice: 40,
  },
  {
    id: 29,
    name: "MDK Hidratação Argan",
    slug: "mdk-hidratacao-argan",
    category: "treatment",
    shortDescription: "Hidratação com toque nutritivo para brilho e maciez.",
    priceMode: "fixed",
    fixedPrice: 40,
  },
  {
    id: 30,
    name: "MDK Cronograma Capilar",
    slug: "mdk-cronograma-capilar",
    category: "treatment",
    shortDescription: "Sequência de cuidado para hidratação, nutrição e reconstrução.",
    priceMode: "fixed",
    fixedPrice: 130,
  },
  {
    id: 31,
    name: "Olenka Especialidades",
    slug: "olenka-especialidades",
    category: "treatment",
    shortDescription: "Tratamentos selecionados conforme necessidade do fio.",
    priceMode: "fixed",
    fixedPrice: 70,
  },
  {
    id: 32,
    name: "Olenka Men's Care Detox Capilar",
    slug: "olenka-mens-care-detox-capilar",
    category: "treatment",
    shortDescription: "Detox capilar masculino com cuidado técnico do couro cabeludo.",
    priceMode: "fixed",
    fixedPrice: 70,
  },
  {
    id: 33,
    name: "Rêve Active Color",
    slug: "reve-active-color",
    category: "treatment",
    shortDescription: "Tratamento de manutenção e proteção de cor.",
    priceMode: "fixed",
    fixedPrice: 60,
  },
  {
    id: 34,
    name: "Rêve Cronograma Capilar",
    slug: "reve-cronograma-capilar",
    category: "treatment",
    shortDescription: "Cronograma com produtos profissionais Rêve.",
    priceMode: "fixed",
    fixedPrice: 150,
  },
  {
    id: 35,
    name: "Rêve Lótus Flower",
    slug: "reve-lotus-flower",
    category: "treatment",
    shortDescription: "Tratamento premium de alta percepção sensorial.",
    priceMode: "fixed",
    fixedPrice: 150,
  },
  {
    id: 36,
    name: "Rêve Terapia TRI-TR2",
    slug: "reve-terapia-tri-tr2",
    category: "treatment",
    shortDescription: "Terapia capilar para recuperação e disciplina do fio.",
    priceMode: "fixed",
    fixedPrice: 70,
  },
  {
    id: 37,
    name: "Smooth Line",
    slug: "smooth-line",
    category: "treatment",
    shortDescription: "Cuidado profissional para brilho e toque alinhado.",
    priceMode: "fixed",
    fixedPrice: 70,
  },
  {
    id: 38,
    name: "Wella Invigo Nutrição",
    slug: "wella-invigo-nutricao",
    category: "treatment",
    shortDescription: "Nutrição profissional com acabamento leve e luminoso.",
    priceMode: "fixed",
    fixedPrice: 60,
  },
  {
    id: 39,
    name: "Wella Fusion Reconstrução",
    slug: "wella-fusion-reconstrucao",
    category: "treatment",
    shortDescription: "Reconstrução para fortalecer fios sensibilizados.",
    priceMode: "fixed",
    fixedPrice: 70,
  },
];

export const productImages = Array.from({ length: 16 }, (_, index) => ({
  src: `/assets/products/product-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `Produto profissional Studio Carlu Styles ${index + 1}`,
}));

export const treatmentLines = [
  {
    name: "Rêve Active Color",
    category: "Coloração e brilho",
    description: "Linha técnica para manutenção de cor, matização e acabamento luminoso.",
  },
  {
    name: "Keranza",
    category: "Hidratação e nutrição",
    description: "Rituais de hidratação intensa, nutrição e recuperação estética do fio.",
  },
  {
    name: "Platinum",
    category: "Tratamentos especiais",
    description: "Máscaras pigmentadas e cuidados de alta presença visual.",
  },
  {
    name: "Olenka",
    category: "Especialidades",
    description: "Protocolos profissionais para necessidades específicas do couro e fibra.",
  },
];
