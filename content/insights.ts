import type { Lang } from "@/lib/i18n/LangContext";

type Bi = { en: string; es: string };
type BiList = { en: string[]; es: string[] };

export type Insight = {
  slug: string;
  title: Bi;
  excerpt: Bi;
  category: Bi;
  date: string;
  readTime: Bi;
  externalUrl?: string; // for Medium/Substack articles
  body: BiList;
};

// Insight hierarchy per reviewer recommendation:
// Level 1 (primary): Payments thought leadership
// Level 2 (differentiators): AI in fintech, Digital Assets/Web3
// Level 3 (supporting): Transformation, Product Strategy
// Note: "Hacking the Interview"-type content excluded — wrong audience signal.

export const insights: Insight[] = [

  // ─── PAYMENTS & BANKING ──────────────────────────────────────────────────────

  {
    slug: "payment-orchestration-strategy",
    title: {
      en: "Payment Orchestration Is a Strategy Decision, Not a Technology Choice",
      es: "La Orquestación de Pagos Es una Decisión Estratégica, No una Elección Tecnológica",
    },
    excerpt: {
      en: "Organizations that treat payment orchestration as a procurement decision consistently underestimate its strategic implications. The real question is not which orchestrator to choose — it is what your payments architecture says about your business model.",
      es: "Las organizaciones que tratan la orquestación de pagos como una decisión de compra subestiman sistemáticamente sus implicaciones estratégicas. La pregunta real no es qué orquestador elegir, sino qué dice tu arquitectura de pagos sobre tu modelo de negocio.",
    },
    category: { en: "Payments & Banking", es: "Pagos y Banca" },
    date: "2026-05-08",
    readTime: { en: "6 min", es: "6 min" },
    body: {
      en: [
        "Payment orchestration has become one of the most consequential infrastructure decisions a digital business can make — and most organizations make it wrong by treating it as a technology selection rather than a strategic question.",
        "The choice of orchestration layer determines which payment methods you can offer, how you handle failures and retries, what your settlement timelines look like, and how you manage regulatory exposure across markets. These are business design decisions, not procurement ones.",
        "The most common failure mode I observe is organizations building orchestration layers optimized for today's transaction volume and payment mix, without accounting for the markets they intend to enter, the regulatory frameworks they will encounter, or the PSP relationships they will need to maintain.",
        "Payment orchestration decisions also lock in data architecture. The reconciliation challenge — matching payment processor settlements against bank deposits against merchant sales data — becomes exponentially harder with each orchestration layer added without a corresponding data governance strategy.",
        "The organizations that get this right share one characteristic: they involve product, finance, compliance, and technology in the orchestration decision simultaneously. Not sequentially. The payment architecture is too consequential to design in technical isolation.",
      ],
      es: [
        "La orquestación de pagos se ha convertido en una de las decisiones de infraestructura más determinantes que puede tomar un negocio digital — y la mayoría de las organizaciones se equivocan al tratarla como una selección tecnológica en lugar de una cuestión estratégica.",
        "La elección de la capa de orquestación determina qué métodos de pago puedes ofrecer, cómo gestionas los fallos y reintentos, cómo son tus plazos de liquidación, y cómo gestionas la exposición regulatoria en distintos mercados. Son decisiones de diseño de negocio, no de compra.",
        "El fallo más habitual que observo es que las organizaciones construyen capas de orquestación optimizadas para el volumen de transacciones y la combinación de pagos de hoy, sin tener en cuenta los mercados en los que planean entrar, los marcos regulatorios que encontrarán, o las relaciones con PSP que necesitarán mantener.",
        "Las decisiones de orquestación de pagos también condicionan la arquitectura de datos. El reto de la conciliación —cotejar las liquidaciones del procesador de pagos con los ingresos bancarios y con los datos de venta del comercio— se vuelve exponencialmente más difícil con cada capa de orquestación añadida sin una estrategia de gobierno de datos correspondiente.",
        "Las organizaciones que lo hacen bien comparten una característica: involucran a producto, finanzas, cumplimiento y tecnología en la decisión de orquestación de forma simultánea. No secuencial. La arquitectura de pagos es demasiado determinante como para diseñarla en aislamiento técnico.",
      ],
    },
  },

  {
    slug: "digital-banking-transformation-lessons",
    title: {
      en: "What 12 Countries Taught Me About Digital Banking Transformation",
      es: "Lo Que 12 Países Me Enseñaron Sobre la Transformación de la Banca Digital",
    },
    excerpt: {
      en: "The technology is usually the least complicated part. The things that actually determine whether a banking transformation succeeds are organizational, regulatory, and political — and they are almost never in the project plan.",
      es: "La tecnología suele ser la parte menos complicada. Lo que realmente determina si una transformación bancaria tiene éxito es organizativo, regulatorio y político — y casi nunca aparece en el plan de proyecto.",
    },
    category: { en: "Payments & Banking", es: "Pagos y Banca" },
    date: "2026-03-20",
    readTime: { en: "7 min", es: "7 min" },
    body: {
      en: [
        "I led the digital banking migration of 2.5 million users across 12 Latin American countries. The technology worked. What nearly derailed it had nothing to do with technology.",
        "The first lesson is about regulatory sequencing. Every country had different compliance requirements, different authentication standards, different data residency rules. The organizations that treat regulatory compliance as a gate at the end of delivery — rather than a design input from day one — consistently hit the most expensive delays.",
        "The second lesson is about what NPS actually measures in banking. We improved NPS by 183%. That number sounds impressive, but what it actually reflected was the removal of specific friction points that customers had learned to live with. The improvements were not about features. They were about reliability, speed, and the absence of failure.",
        "The third lesson is about multi-country governance. Twelve countries means twelve sets of stakeholders, twelve regulatory environments, and twelve different definitions of 'urgent'. The only thing that kept the program coherent was a shared dashboard that made progress — and problems — visible to everyone simultaneously.",
        "The fourth lesson, and the most important, is that digital banking transformation is a change management program that happens to involve technology. The technology is almost always the least complicated part.",
      ],
      es: [
        "Lideré la migración de banca digital de 2,5 millones de usuarios en 12 países de Latinoamérica. La tecnología funcionó. Lo que estuvo a punto de descarrilar el proyecto no tuvo nada que ver con la tecnología.",
        "La primera lección tiene que ver con la secuenciación regulatoria. Cada país tenía requisitos de cumplimiento distintos, estándares de autenticación distintos, normas de residencia de datos distintas. Las organizaciones que tratan el cumplimiento regulatorio como una barrera al final de la ejecución —en lugar de como un input de diseño desde el primer día— sufren sistemáticamente los retrasos más costosos.",
        "La segunda lección tiene que ver con lo que el NPS realmente mide en banca. Mejoramos el NPS un 183%. Esa cifra suena impresionante, pero lo que realmente reflejaba era la eliminación de puntos de fricción concretos que los clientes habían aprendido a soportar. Las mejoras no trataban de funcionalidades. Trataban de fiabilidad, velocidad y ausencia de fallos.",
        "La tercera lección tiene que ver con la gobernanza multi-país. Doce países significan doce conjuntos de stakeholders, doce entornos regulatorios y doce definiciones distintas de 'urgente'. Lo único que mantuvo el programa coherente fue un dashboard compartido que hacía visible el progreso —y los problemas— para todos simultáneamente.",
        "La cuarta lección, y la más importante, es que la transformación de banca digital es un programa de gestión del cambio que da la casualidad de que involucra tecnología. La tecnología casi siempre es la parte menos complicada.",
      ],
    },
  },

  // ─── AI & FINTECH ────────────────────────────────────────────────────────────

  {
    slug: "generative-ai-in-fintech",
    title: {
      en: "Generative AI in Fintech: From Experimentation to Business Value",
      es: "IA Generativa en Fintech: De la Experimentación al Valor de Negocio",
    },
    excerpt: {
      en: "Most fintech AI initiatives are still in the experimentation phase — impressive demos, limited production deployment, unclear ROI. The gap between pilot and value is not a technology problem. It is a strategy and operating model problem.",
      es: "La mayoría de las iniciativas de IA en fintech siguen en fase de experimentación — demos impresionantes, despliegue en producción limitado, ROI poco claro. La brecha entre el piloto y el valor no es un problema de tecnología. Es un problema de estrategia y modelo operativo.",
    },
    category: { en: "AI & Innovation", es: "IA e Innovación" },
    date: "2026-04-15",
    readTime: { en: "6 min", es: "6 min" },
    externalUrl: "https://medium.com/@mfmora/generative-ai-in-fintech-transforming-customer-experience-and-risk-management-9e8ff6ac415b",
    body: {
      en: [
        "Generative AI has moved from curiosity to strategic imperative for financial services organizations faster than almost any technology in recent memory. The pressure to deploy is real. The clarity about where to deploy — and how — is much less developed.",
        "The most valuable applications I have seen in fintech share a common characteristic: they are not trying to replicate what humans do. They are changing the shape of the process itself. Fraud pattern analysis, regulatory document processing, customer communication at scale — the value comes from redesigning the workflow, not automating the existing one.",
        "Risk management is where the deployment discipline matters most. Financial services organizations operate in environments where model errors have regulatory and financial consequences. The governance question — who owns the AI decision, what the escalation path looks like, how errors are detected and corrected — is not a compliance formality. It is a product design requirement.",
        "The organizations that are extracting genuine value from AI in fintech are the ones that started with the business outcome and worked backward to the technology. Not the ones that started with the model and looked for applications.",
        "The gap between pilot and production in fintech AI is almost never a model quality problem. It is an operating model problem: unclear ownership, undefined quality thresholds, absent feedback loops, and measurement systems that track activity rather than business outcomes.",
      ],
      es: [
        "La IA generativa ha pasado de ser una curiosidad a un imperativo estratégico para las organizaciones de servicios financieros más rápido que casi cualquier otra tecnología reciente. La presión por desplegarla es real. La claridad sobre dónde desplegarla —y cómo— está mucho menos desarrollada.",
        "Las aplicaciones más valiosas que he visto en fintech comparten una característica común: no intentan replicar lo que hacen las personas. Cambian la forma del proceso en sí. El análisis de patrones de fraude, el procesamiento de documentación regulatoria, la comunicación con el cliente a escala — el valor viene de rediseñar el flujo de trabajo, no de automatizar el existente.",
        "La gestión del riesgo es donde más importa la disciplina en el despliegue. Las organizaciones de servicios financieros operan en entornos donde los errores del modelo tienen consecuencias regulatorias y financieras. La cuestión de gobernanza —quién es responsable de la decisión de la IA, cómo es el proceso de escalado, cómo se detectan y corrigen los errores— no es un formalismo de cumplimiento. Es un requisito de diseño de producto.",
        "Las organizaciones que están extrayendo un valor genuino de la IA en fintech son las que partieron del resultado de negocio y trabajaron hacia atrás hasta la tecnología. No las que partieron del modelo y buscaron aplicaciones.",
        "La brecha entre el piloto y la producción en la IA fintech casi nunca es un problema de calidad del modelo. Es un problema de modelo operativo: propiedad poco clara, umbrales de calidad indefinidos, ausencia de ciclos de feedback, y sistemas de medición que rastrean actividad en lugar de resultados de negocio.",
      ],
    },
  },

  // ─── DIGITAL ASSETS & WEB3 ───────────────────────────────────────────────────

  {
    slug: "future-of-tokenization",
    title: {
      en: "The Future of Tokenization: Beyond Real Estate to Global Asset Classes",
      es: "El Futuro de la Tokenización: Más Allá del Inmobiliario, Hacia Clases de Activos Globales",
    },
    excerpt: {
      en: "Real estate tokenization proved the concept. The next phase is not about adding more asset classes — it is about solving the infrastructure, liquidity, and regulatory questions that determine whether tokenized assets become a mainstream financial instrument.",
      es: "La tokenización inmobiliaria demostró el concepto. La siguiente fase no consiste en añadir más clases de activos — consiste en resolver las cuestiones de infraestructura, liquidez y regulación que determinarán si los activos tokenizados se convierten en un instrumento financiero mainstream.",
    },
    category: { en: "Digital Assets", es: "Activos Digitales" },
    date: "2026-02-12",
    readTime: { en: "5 min", es: "5 min" },
    externalUrl: "https://medium.com/@mfmora/the-future-of-tokenization-beyond-real-estate-to-global-asset-classes-8b1fcd1433c8",
    body: {
      en: [
        "I spent 17 months at IOBuilders working on tokenization infrastructure — launching a €470M real estate tokenization platform and delivering a wholesale CBDC proof-of-concept for the European Central Bank. The technical foundations for asset tokenization are mature enough. The limiting factors are now different.",
        "Real estate became the first major tokenization use case for good reasons: illiquid assets with high unit value, fragmented ownership structures, slow settlement cycles, and regulatory frameworks that could accommodate security tokens through existing legislation. It was a tractable problem.",
        "The next wave of tokenization — private equity, infrastructure, commodities, trade finance — faces harder problems. Liquidity is the central one. A tokenized asset is only as liquid as the secondary market infrastructure that supports it. Building that infrastructure requires coordinated action across custodians, exchanges, regulators, and institutional investors.",
        "Settlement is the second hard problem. The 94% settlement time reduction we achieved on the real estate platform — from 72 hours to 4 hours — was possible because we were operating within a controlled, permissioned environment with pre-agreed counterparties. Public market settlement requires different infrastructure entirely.",
        "The organizations best positioned for the next phase of tokenization are not the ones with the most sophisticated smart contracts. They are the ones that have solved the compliance, custody, and liquidity questions — because those are the actual barriers to institutional adoption.",
      ],
      es: [
        "Pasé 17 meses en IOBuilders trabajando en infraestructura de tokenización — lanzando una plataforma de tokenización inmobiliaria de 470M€ y entregando una prueba de concepto de CBDC mayorista para el Banco Central Europeo. Los cimientos técnicos para la tokenización de activos ya son lo bastante maduros. Los factores limitantes ahora son otros.",
        "El inmobiliario se convirtió en el primer caso de uso relevante de tokenización por buenas razones: activos ilíquidos de alto valor unitario, estructuras de propiedad fragmentadas, ciclos de liquidación lentos, y marcos regulatorios que podían acomodar security tokens dentro de la legislación existente. Era un problema abordable.",
        "La siguiente ola de tokenización —private equity, infraestructura, materias primas, trade finance— se enfrenta a problemas más difíciles. La liquidez es el central. Un activo tokenizado es tan líquido como la infraestructura de mercado secundario que lo sustenta. Construir esa infraestructura exige una acción coordinada entre custodios, exchanges, reguladores e inversores institucionales.",
        "La liquidación es el segundo problema difícil. La reducción del 94% en el tiempo de liquidación que logramos en la plataforma inmobiliaria —de 72 horas a 4 horas— fue posible porque operábamos en un entorno controlado y permisionado con contrapartes pre-acordadas. La liquidación en mercados públicos requiere una infraestructura completamente distinta.",
        "Las organizaciones mejor posicionadas para la siguiente fase de la tokenización no son las que tienen los smart contracts más sofisticados. Son las que han resuelto las cuestiones de cumplimiento, custodia y liquidez — porque esas son las verdaderas barreras para la adopción institucional.",
      ],
    },
  },

  {
    slug: "cbdc-financial-institutions",
    title: {
      en: "What CBDCs Mean for Commercial Banks and Payment Infrastructure",
      es: "Qué Significan las CBDC para la Banca Comercial y la Infraestructura de Pagos",
    },
    excerpt: {
      en: "Central Bank Digital Currencies are not a threat to commercial banking or a replacement for existing payment infrastructure. They are a settlement layer upgrade that will reshape the architecture of financial services over the next decade.",
      es: "Las monedas digitales de banco central no son una amenaza para la banca comercial ni un sustituto de la infraestructura de pagos existente. Son una mejora de la capa de liquidación que remodelará la arquitectura de los servicios financieros en la próxima década.",
    },
    category: { en: "Digital Assets", es: "Activos Digitales" },
    date: "2026-01-18",
    readTime: { en: "5 min", es: "5 min" },
    body: {
      en: [
        "Having delivered the wholesale CBDC proof-of-concept for the European Central Bank on Hyperledger Besu, I have a more specific perspective on CBDCs than most of the commentary suggests. The debate about whether CBDCs will 'replace' banks or 'disrupt' payment networks misses the more consequential question: how will they change the settlement infrastructure that everything else is built on?",
        "Wholesale CBDCs — the version that central banks are actually deploying first — are about interbank settlement efficiency, not retail banking disruption. The use case we demonstrated for the ECB was Delivery vs. Payment settlement: the simultaneous exchange of securities and cash across distributed ledger networks that currently require T+2 settlement cycles and significant counterparty risk.",
        "The implications for commercial banks are real but not existential. The banks that will be most affected are those whose current revenue models depend on the friction in cross-border settlement — the float, the correspondent banking fees, the FX conversion margins. Those revenue streams will compress as CBDC-enabled settlement becomes more efficient.",
        "For payment infrastructure operators, the more interesting question is interoperability. The HTLC protocol we implemented for the ECB proof-of-concept enables settlement finality across heterogeneous networks. That capability, at scale, changes what is possible in cross-border retail payments — not by replacing existing rails, but by enabling new settlement arrangements between them.",
        "The organizations that are investing now in understanding CBDC architecture — not as a speculative technology, but as a settlement layer that will exist alongside existing infrastructure — will be better positioned when deployment accelerates beyond the proof-of-concept phase.",
      ],
      es: [
        "Habiendo entregado la prueba de concepto de CBDC mayorista para el Banco Central Europeo sobre Hyperledger Besu, tengo una perspectiva más concreta sobre las CBDC que la que sugiere la mayor parte del debate público. La discusión sobre si las CBDC 'sustituirán' a los bancos o 'disrumpirán' las redes de pago pasa por alto la pregunta más determinante: ¿cómo cambiarán la infraestructura de liquidación sobre la que se construye todo lo demás?",
        "Las CBDC mayoristas —la versión que los bancos centrales están desplegando primero en la práctica— tratan sobre la eficiencia de la liquidación interbancaria, no sobre la disrupción de la banca minorista. El caso de uso que demostramos para el BCE fue la liquidación Delivery vs. Payment: el intercambio simultáneo de valores y efectivo entre redes de registro distribuido que hoy requieren ciclos de liquidación T+2 y un riesgo de contraparte significativo.",
        "Las implicaciones para la banca comercial son reales, pero no existenciales. Los bancos más afectados serán aquellos cuyos modelos de ingresos actuales dependen de la fricción en la liquidación transfronteriza — el float, las comisiones de banca corresponsal, los márgenes de conversión de divisas. Esos flujos de ingresos se comprimirán a medida que la liquidación habilitada por CBDC gane eficiencia.",
        "Para los operadores de infraestructura de pagos, la pregunta más interesante es la interoperabilidad. El protocolo HTLC que implementamos para la prueba de concepto del BCE habilita la finalidad de la liquidación entre redes heterogéneas. Esa capacidad, a escala, cambia lo que es posible en los pagos minoristas transfronterizos — no sustituyendo los raíles existentes, sino habilitando nuevos acuerdos de liquidación entre ellos.",
        "Las organizaciones que están invirtiendo ahora en entender la arquitectura de las CBDC —no como una tecnología especulativa, sino como una capa de liquidación que existirá junto a la infraestructura actual— estarán mejor posicionadas cuando el despliegue se acelere más allá de la fase de prueba de concepto.",
      ],
    },
  },

  // ─── TRANSFORMATION & PRODUCT STRATEGY ──────────────────────────────────────

  {
    slug: "transformation-is-an-alignment-problem",
    title: {
      en: "Transformation Is an Alignment Problem, Not a Technology Problem",
      es: "La Transformación Es un Problema de Alineación, No un Problema de Tecnología",
    },
    excerpt: {
      en: "Every failed transformation I have observed had adequate technology. None of them had adequate alignment. The technology was never the bottleneck.",
      es: "Todas las transformaciones fallidas que he observado tenían tecnología adecuada. Ninguna tenía alineación adecuada. La tecnología nunca fue el cuello de botella.",
    },
    category: { en: "Transformation", es: "Transformación" },
    date: "2025-12-10",
    readTime: { en: "7 min", es: "7 min" },
    body: {
      en: [
        "Organizations invest heavily in the technology layer of transformation — new platforms, automation tools, AI capabilities, cloud migration — and underinvest systematically in the alignment layer. This is a predictable failure mode.",
        "Alignment is not agreement. You can run a room-full-of-nods workshop and leave with zero alignment. Alignment means that when someone in a delivery team faces a decision about trade-offs — speed vs. quality, scope vs. timeline, customer need vs. internal constraint — they know what to choose because the strategy has been made explicit.",
        "The most expensive symptom of misalignment is rework. A delivery team builds something technically correct but strategically wrong. The rework is treated as a technical failure when it is actually a communication failure. The cost is not just time and money. It is motivation.",
        "What I have found works across organizations of different sizes and maturity levels is establishing a small number of explicit strategic bets — three to five at most — and ensuring that every initiative can be traced to one of them. If it cannot, the initiative needs a different justification or a different home.",
        "Transformation programs that succeed share one characteristic that has nothing to do with technology: leadership that is willing to say clearly what they will stop doing, not only what they will start doing. That clarity is the actual foundation of alignment.",
      ],
      es: [
        "Las organizaciones invierten fuertemente en la capa tecnológica de la transformación —nuevas plataformas, herramientas de automatización, capacidades de IA, migración a la nube— e invierten sistemáticamente poco en la capa de alineación. Este es un patrón de fallo predecible.",
        "Alineación no es lo mismo que acuerdo. Puedes salir de un workshop lleno de asentimientos con cero alineación. Alineación significa que cuando alguien de un equipo de ejecución se enfrenta a una decisión sobre trade-offs —velocidad frente a calidad, alcance frente a plazo, necesidad del cliente frente a restricción interna— sabe qué elegir porque la estrategia se ha hecho explícita.",
        "El síntoma más costoso de la desalineación es el retrabajo. Un equipo de ejecución construye algo técnicamente correcto pero estratégicamente equivocado. El retrabajo se trata como un fallo técnico cuando en realidad es un fallo de comunicación. El coste no es solo tiempo y dinero. Es motivación.",
        "Lo que he comprobado que funciona en organizaciones de distintos tamaños y niveles de madurez es establecer un número reducido de apuestas estratégicas explícitas —tres a cinco como máximo— y asegurar que cada iniciativa pueda vincularse a alguna de ellas. Si no puede, la iniciativa necesita una justificación distinta o un lugar distinto.",
        "Los programas de transformación que tienen éxito comparten una característica que no tiene nada que ver con la tecnología: una dirección dispuesta a decir con claridad qué va a dejar de hacer, no solo qué va a empezar a hacer. Esa claridad es el verdadero cimiento de la alineación.",
      ],
    },
  },

  {
    slug: "product-strategy-is-not-roadmap-management",
    title: {
      en: "Product Strategy Is Not Roadmap Management",
      es: "La Estrategia de Producto No Es Gestión de Roadmap",
    },
    excerpt: {
      en: "A roadmap is a communication tool. Strategy is a set of choices about where to compete and how to win. Confusing the two is one of the most expensive mistakes a product organization can make.",
      es: "Un roadmap es una herramienta de comunicación. La estrategia es un conjunto de decisiones sobre dónde competir y cómo ganar. Confundir ambas cosas es uno de los errores más costosos que puede cometer una organización de producto.",
    },
    category: { en: "Product Strategy", es: "Estrategia de Producto" },
    date: "2025-11-05",
    readTime: { en: "5 min", es: "5 min" },
    body: {
      en: [
        "The most common misdiagnosis in product organizations is treating a prioritization problem as a strategy problem, or a strategy problem as a roadmap problem. The three are related but distinct, and solving the wrong one first is expensive.",
        "A roadmap is a communication tool. It shows stakeholders what the team is building and approximately when. Done well, it creates alignment. Done poorly, it creates the illusion of alignment while actual disagreements about priorities remain unresolved.",
        "Strategy is a different thing entirely. It is a set of explicit choices: which customers to serve, which problems to solve, which capabilities to build, and — critically — which opportunities to decline. The hardest strategic decisions are not what to add. They are what to say no to.",
        "The signal that a team is roadmapping instead of strategizing is usually visible in the review meeting. If every stakeholder's request ends up on the roadmap somewhere, the team has not made choices. It has made a list.",
        "Good product strategy requires leadership to accept constraint. To say: we will not pursue that market this year. We will not build that feature. We will not serve that customer segment. Those constraints are not failures of ambition. They are the foundation that makes execution possible.",
      ],
      es: [
        "El diagnóstico erróneo más habitual en las organizaciones de producto es tratar un problema de priorización como un problema de estrategia, o un problema de estrategia como un problema de roadmap. Los tres están relacionados pero son distintos, y resolver el equivocado primero sale caro.",
        "Un roadmap es una herramienta de comunicación. Muestra a los stakeholders qué está construyendo el equipo y aproximadamente cuándo. Bien hecho, genera alineación. Mal hecho, crea la ilusión de alineación mientras los desacuerdos reales sobre prioridades siguen sin resolverse.",
        "La estrategia es algo completamente distinto. Es un conjunto de decisiones explícitas: a qué clientes atender, qué problemas resolver, qué capacidades construir y —de forma crítica— qué oportunidades declinar. Las decisiones estratégicas más difíciles no son qué añadir. Son a qué decir que no.",
        "La señal de que un equipo está haciendo roadmapping en lugar de estrategia suele verse en la reunión de revisión. Si la petición de cada stakeholder acaba apareciendo en algún punto del roadmap, el equipo no ha tomado decisiones. Ha hecho una lista.",
        "Una buena estrategia de producto exige que la dirección acepte la restricción. Decir: no vamos a abordar ese mercado este año. No vamos a construir esa funcionalidad. No vamos a atender ese segmento de cliente. Esas restricciones no son fallos de ambición. Son el cimiento que hace posible la ejecución.",
      ],
    },
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}

export function localizeInsight(insight: Insight, lang: Lang) {
  return {
    slug: insight.slug,
    externalUrl: insight.externalUrl,
    date: insight.date,
    title: insight.title[lang],
    excerpt: insight.excerpt[lang],
    category: insight.category[lang],
    readTime: insight.readTime[lang],
    body: insight.body[lang],
  };
}
