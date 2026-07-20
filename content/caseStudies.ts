import type { Lang } from "@/lib/i18n/LangContext";

type Bi = { en: string; es: string };
type BiList = { en: string[]; es: string[] };

export type CaseStudyMetric = {
  value: string;
  label: Bi;
  detail: Bi;
};

export type CaseStudy = {
  slug: string;
  title: Bi;
  headline: Bi;
  metric: string;
  metricLabel: Bi;
  industry: Bi;
  type: "featured" | "secondary";
  challenge: Bi;
  context?: Bi; // extended narrative before the approach
  approach: BiList;
  outcomes: BiList;
  lessons: BiList;
  tags: BiList;
  color: string;
  // Optional enrichment — used for deep-dive case studies
  keyMetrics?: CaseStudyMetric[];
  howItWorks?: { title: Bi; description: Bi }[];
  platformStats?: { value: string; label: Bi }[];
};

export const caseStudies: CaseStudy[] = [
  // ─── FEATURED ───────────────────────────────────────────────────────────────

  {
    slug: "mobile-banking",
    type: "featured",
    title: {
      en: "Mobile Banking Transformation",
      es: "Transformación de Banca Móvil",
    },
    headline: {
      en: "$2.5B Transaction Volume Across 12 Countries",
      es: "2.500 M$ en Volumen de Transacciones en 12 Países",
    },
    metric: "$2.5B",
    metricLabel: { en: "Transaction Volume", es: "Volumen de Transacciones" },
    industry: { en: "Digital Banking · LatAm", es: "Banca Digital · LatAm" },
    challenge: {
      en: "A major financial institution needed to migrate 2.5 million users across 12 Latin American countries to a new digital banking platform while maintaining 99.95% SLA, reducing time-to-market, and accelerating enterprise digital adoption at scale.",
      es: "Una gran institución financiera necesitaba migrar a 2,5 millones de usuarios en 12 países de Latinoamérica a una nueva plataforma de banca digital, manteniendo un SLA del 99,95%, reduciendo el time-to-market y acelerando la adopción digital a nivel enterprise.",
    },
    approach: {
      en: [
        "Defined a phased migration strategy with country-by-country rollout to minimize risk exposure and enable rapid feedback loops.",
        "Established cross-functional squads aligned to customer journey stages rather than technical layers, accelerating autonomous decision-making.",
        "Introduced a shared OKR framework connecting delivery teams to business KPIs including transaction volume, NPS, and activation rates.",
        "Implemented a real-time operations dashboard providing leadership visibility into rollout health across all 12 markets.",
        "Coordinated regulatory compliance and localization requirements in parallel with platform delivery, removing the traditional sequencing bottleneck.",
      ],
      es: [
        "Definí una estrategia de migración por fases, con despliegue país por país para minimizar la exposición al riesgo y habilitar ciclos de feedback rápidos.",
        "Establecí squads multifuncionales alineados a las etapas del customer journey en lugar de capas técnicas, acelerando la toma de decisiones autónoma.",
        "Introduje un marco de OKR compartido que conectaba a los equipos de ejecución con los KPI de negocio, incluyendo volumen de transacciones, NPS y tasas de activación.",
        "Implementé un dashboard operativo en tiempo real que daba visibilidad a la dirección sobre el estado del despliegue en los 12 mercados.",
        "Coordiné el cumplimiento regulatorio y los requisitos de localización en paralelo con la entrega de la plataforma, eliminando el cuello de botella tradicional de secuenciación.",
      ],
    },
    outcomes: {
      en: [
        "Successfully migrated 2.5M users across 12 countries with zero critical incidents",
        "$2.5B in digital transaction volume within the first year post-launch",
        "183% NPS improvement vs. previous digital experience",
        "99.95% platform availability maintained throughout migration",
        "50% reduction in time-to-market through enterprise-wide agile adoption",
      ],
      es: [
        "Migración exitosa de 2,5M de usuarios en 12 países sin incidentes críticos",
        "2.500 M$ en volumen de transacciones digitales durante el primer año tras el lanzamiento",
        "Mejora del 183% en el NPS frente a la experiencia digital anterior",
        "Disponibilidad de plataforma del 99,95% mantenida durante toda la migración",
        "Reducción del 50% en el time-to-market gracias a la adopción ágil a nivel enterprise",
      ],
    },
    lessons: {
      en: [
        "Outcome-aligned squads outperform capability-based teams in complex multi-market programs.",
        "Shared visibility into real-time metrics removes political friction from cross-border initiatives.",
        "Regulatory complexity is manageable when embedded into delivery design from day one rather than treated as a gate.",
      ],
      es: [
        "Los squads alineados a resultados superan a los equipos organizados por capacidades en programas complejos multi-mercado.",
        "La visibilidad compartida sobre métricas en tiempo real elimina la fricción política en iniciativas transfronterizas.",
        "La complejidad regulatoria es manejable cuando se integra en el diseño de la ejecución desde el primer día, en lugar de tratarse como una barrera al final.",
      ],
    },
    tags: {
      en: ["Digital Banking", "Transformation", "LatAm", "Agile at Scale"],
      es: ["Banca Digital", "Transformación", "LatAm", "Agile a Escala"],
    },
    color: "#14b8a6",
  },

  {
    slug: "damap-payments",
    type: "featured",
    title: {
      en: "Payments Ecosystem Growth Strategy",
      es: "Estrategia de Crecimiento del Ecosistema de Pagos",
    },
    headline: {
      en: "3.2× TAM Expansion Through Strategic Product Pivot",
      es: "Expansión del TAM x3,2 Mediante un Pivote Estratégico de Producto",
    },
    metric: "3.2×",
    metricLabel: { en: "TAM Expansion", es: "Expansión del TAM" },
    industry: { en: "Payments · Fintech · Spain", es: "Pagos · Fintech · España" },

    challenge: {
      en: "DaMap had built a strong automated reconciliation tool but was hitting a growth ceiling. The product worked well for a narrow use case — financial reconciliation — but the market opportunity was broader, and competitors were closing in. The question was whether to go deeper in reconciliation or expand the platform into a more strategic position within the payments data ecosystem.",
      es: "DaMap había construido una sólida herramienta de conciliación automatizada, pero estaba alcanzando un techo de crecimiento. El producto funcionaba bien para un caso de uso concreto — la conciliación financiera — pero la oportunidad de mercado era más amplia, y la competencia se acercaba. La pregunta era si profundizar en la conciliación o expandir la plataforma hacia una posición más estratégica dentro del ecosistema de datos de pagos.",
    },

    context: {
      en: "The Spanish payments market is one of the most dynamic in Europe, with a mature orchestration layer, growing PSP competition, and increasing regulatory complexity under PSD2. Payment orchestrators were sitting on a problem: their merchant clients had no visibility into whether settlements from processors matched what was actually landing in their bank accounts. That gap — between what PSPs reported and what banks confirmed — was generating support tickets, eroding merchant trust, and creating a differentiation problem in a commoditizing market. DaMap had the technical foundation to solve it. The strategic challenge was recognizing that the real buyer wasn't just the merchant — it was the orchestrator who needed to offer reconciliation as a value-added service to retain their merchant base.",
      es: "El mercado de pagos español es uno de los más dinámicos de Europa, con una capa de orquestación madura, una competencia creciente entre PSP y una complejidad regulatoria en aumento bajo PSD2. Los orquestadores de pagos tenían un problema pendiente: sus clientes comercios no tenían visibilidad sobre si las liquidaciones de los procesadores coincidían con lo que realmente llegaba a sus cuentas bancarias. Esa brecha — entre lo que reportaban los PSP y lo que confirmaban los bancos — generaba tickets de soporte, erosionaba la confianza del comercio y creaba un problema de diferenciación en un mercado cada vez más comoditizado. DaMap tenía la base técnica para resolverlo. El reto estratégico era reconocer que el comprador real no era solo el comercio — era el orquestador, que necesitaba ofrecer la conciliación como un servicio de valor añadido para retener su cartera de comercios.",
    },

    approach: {
      en: [
        "Conducted a comprehensive market analysis of the Spanish payments ecosystem, mapping the full chain from merchant to payment orchestrator to PSP to bank — identifying where data fragmentation created the most commercial pain.",
        "Led structured customer discovery across 8+ payment providers (including PSPs, orchestrators, and e-commerce platforms) to validate the pivot hypothesis, using PSD2, PISP, and AISP regulatory requirements as a framework for understanding integration opportunity.",
        "Identified payment orchestrators as the highest-leverage B2B distribution channel: rather than selling reconciliation to individual merchants, positioning DaMap as infrastructure that orchestrators could offer their entire merchant portfolio — multiplying reach without multiplying sales effort.",
        "Designed the 'Reconciliation as a Service' model specifically for orchestrators — enabling real-time visibility of sales vs. bank settlement vs. processor liquidation via API, with a dedicated orchestrator environment, configurable matching rules, and white-label data presentation.",
        "Led the product pivot from reconciliation tool to full data governance platform, defining the new architecture, integration model, and go-to-market narrative. Added capabilities: universal data conciliation, data transformation and enrichment, advanced analytics, data lineage visibility, and governance automation.",
        "Built and executed the Q1–Q3 2025 ML/GenAI product roadmap using RICE and WSJF prioritisation, achieving 90%+ execution rate. Delivered measurable improvements in customer retention trajectory and ARPU.",
      ],
      es: [
        "Realicé un análisis exhaustivo del mercado de pagos español, mapeando toda la cadena desde el comercio hasta el orquestador de pagos, pasando por el PSP y el banco — identificando dónde la fragmentación de datos generaba el mayor dolor comercial.",
        "Lideré un descubrimiento estructurado de clientes con más de 8 proveedores de pagos (incluyendo PSP, orquestadores y plataformas de e-commerce) para validar la hipótesis del pivote, utilizando los requisitos regulatorios de PSD2, PISP y AISP como marco para entender la oportunidad de integración.",
        "Identifiqué a los orquestadores de pagos como el canal de distribución B2B de mayor apalancamiento: en lugar de vender conciliación a comercios individuales, posicioné DaMap como infraestructura que los orquestadores podían ofrecer a toda su cartera de comercios — multiplicando el alcance sin multiplicar el esfuerzo comercial.",
        "Diseñé el modelo de 'Conciliación como Servicio' específicamente para orquestadores — habilitando visibilidad en tiempo real de ventas vs. liquidación bancaria vs. liquidación del procesador vía API, con un entorno dedicado para el orquestador, reglas de conciliación configurables y presentación de datos white-label.",
        "Lideré el pivote de producto de herramienta de conciliación a plataforma completa de gobierno de datos, definiendo la nueva arquitectura, el modelo de integración y el relato de go-to-market. Añadí capacidades: conciliación universal de datos, transformación y enriquecimiento de datos, analítica avanzada, visibilidad de linaje de datos y automatización de gobernanza.",
        "Construí y ejecuté el roadmap de producto ML/GenAI de Q1–Q3 de 2025 usando priorización RICE y WSJF, alcanzando una tasa de ejecución superior al 90%. Entregué mejoras medibles en la trayectoria de retención de clientes y en el ARPU.",
      ],
    },

    // Key metrics grid — shown as visual cards on the case study page
    keyMetrics: [
      {
        value: "3.2×",
        label: { en: "TAM Expansion", es: "Expansión del TAM" },
        detail: {
          en: "From single-use reconciliation to full data governance platform",
          es: "De una conciliación de uso único a una plataforma completa de gobierno de datos",
        },
      },
      {
        value: "16M+",
        label: { en: "Transactions / Month", es: "Transacciones / Mes" },
        detail: {
          en: "Reconciled monthly across active client deployments",
          es: "Conciliadas mensualmente en las implementaciones activas de clientes",
        },
      },
      {
        value: "95%+",
        label: { en: "Auto-Reconciliation", es: "Auto-Conciliación" },
        detail: {
          en: "Transactions reconciled automatically without manual intervention",
          es: "Transacciones conciliadas automáticamente sin intervención manual",
        },
      },
      {
        value: "1,000 TPS",
        label: { en: "Processing Speed", es: "Velocidad de Procesamiento" },
        detail: {
          en: "Transactions per second — outperforming generic ERPs and accounting tools",
          es: "Transacciones por segundo — superando a los ERP genéricos y herramientas contables",
        },
      },
      {
        value: "8 hrs → 8 min",
        label: { en: "Process Optimization", es: "Optimización de Procesos" },
        detail: {
          en: "Reconciliation processes that took 8 hours reduced to 8 minutes",
          es: "Procesos de conciliación que tardaban 8 horas, reducidos a 8 minutos",
        },
      },
      {
        value: "30K+",
        label: { en: "Hours Saved / Year", es: "Horas Ahorradas / Año" },
        detail: {
          en: "Manual reconciliation hours eliminated annually across client base",
          es: "Horas de conciliación manual eliminadas anualmente en toda la cartera de clientes",
        },
      },
    ],

    // How It Works — the Reconciliation as a Service model explained
    howItWorks: [
      {
        title: { en: "Merchant sales data ingested", es: "Ingesta de datos de venta del comercio" },
        description: {
          en: "Sales transactions, vouchers, and POS data flow from the merchant into DaMap via the orchestrator's existing infrastructure — no direct merchant integration required.",
          es: "Las transacciones de venta, vales y datos de TPV fluyen desde el comercio hacia DaMap a través de la infraestructura existente del orquestador — sin necesidad de integración directa con el comercio.",
        },
      },
      {
        title: { en: "Processor liquidations matched", es: "Conciliación de liquidaciones del procesador" },
        description: {
          en: "Payment processor settlement files are ingested and matched against merchant sales using DaMap's advanced reconciliation algorithms — identifying matched, pending, and unreconciled items in real time.",
          es: "Los ficheros de liquidación del procesador de pagos se ingieren y concilian contra las ventas del comercio usando los algoritmos avanzados de DaMap — identificando en tiempo real las partidas conciliadas, pendientes y no conciliadas.",
        },
      },
      {
        title: { en: "Bank deposits confirmed", es: "Confirmación de los ingresos bancarios" },
        description: {
          en: "Bank statements and deposit confirmations are cross-referenced against processor liquidations — giving the orchestrator a complete end-to-end view: sales → settlement → bank confirmation.",
          es: "Los extractos bancarios y las confirmaciones de ingreso se cruzan con las liquidaciones del procesador — dando al orquestador una visión completa de extremo a extremo: venta → liquidación → confirmación bancaria.",
        },
      },
      {
        title: { en: "Orchestrator dashboard and alerts", es: "Dashboard y alertas del orquestador" },
        description: {
          en: "The orchestrator sees their merchants' reconciliation status in a dedicated environment, with configurable rules, discrepancy alerts, and white-label reporting — all delivered via secure API with full encryption.",
          es: "El orquestador visualiza el estado de conciliación de sus comercios en un entorno dedicado, con reglas configurables, alertas de discrepancias e informes white-label — todo entregado mediante API segura y con cifrado completo.",
        },
      },
    ],

    // Platform stats — from DaMap PDFs
    platformStats: [
      { value: "300+", label: { en: "Active Users Daily", es: "Usuarios Activos Diarios" } },
      { value: "16M+", label: { en: "Transactions / Month", es: "Transacciones / Mes" } },
      { value: "95%+", label: { en: "Auto-Reconciliation Rate", es: "Tasa de Auto-Conciliación" } },
      { value: "30K+", label: { en: "Hours Saved / Year", es: "Horas Ahorradas / Año" } },
      { value: "8 min", label: { en: "vs. 8-Hour Manual Process", es: "vs. Proceso Manual de 8 Horas" } },
      { value: "1,000 TPS", label: { en: "Processing Throughput", es: "Throughput de Procesamiento" } },
    ],

    outcomes: {
      en: [
        "3.2× expansion of the total addressable market through the data governance platform pivot",
        "Payment orchestrator segment defined, validated, and positioned as primary B2B growth channel",
        "95%+ reconciliation automation rate across active client deployments",
        "16M+ transactions reconciled monthly on the platform",
        "30,000+ manual reconciliation hours eliminated per year across the client base",
        "8-hour manual reconciliation processes reduced to 8 minutes through automation",
        "300+ daily active users on the platform with growing enterprise adoption",
        "Projected 40% improvement in customer retention through roadmap execution",
      ],
      es: [
        "Expansión x3,2 del mercado total direccionable gracias al pivote hacia la plataforma de gobierno de datos",
        "Segmento de orquestadores de pagos definido, validado y posicionado como canal de crecimiento B2B principal",
        "Tasa de automatización de conciliación superior al 95% en las implementaciones activas de clientes",
        "Más de 16M de transacciones conciliadas mensualmente en la plataforma",
        "Más de 30.000 horas de conciliación manual eliminadas al año en toda la cartera de clientes",
        "Procesos de conciliación manual de 8 horas reducidos a 8 minutos mediante automatización",
        "Más de 300 usuarios activos diarios en la plataforma, con adopción enterprise creciente",
        "Mejora proyectada del 40% en la retención de clientes gracias a la ejecución del roadmap",
      ],
    },

    lessons: {
      en: [
        "In mature payments markets, data transparency is a retention and differentiation lever — not just an operational tool. Orchestrators that give merchants visibility into settlement gaps retain accounts that would otherwise migrate on price alone.",
        "Positioning a data product as infrastructure for orchestrators rather than a tool for merchants changes the unit economics entirely: one orchestrator integration reaches an entire merchant portfolio.",
        "The most powerful pivots are not technology changes — they are buyer changes. DaMap's technology barely changed. What changed was who we were selling to, why it mattered to them commercially, and how it fit into their existing distribution model.",
      ],
      es: [
        "En mercados de pagos maduros, la transparencia de datos es una palanca de retención y diferenciación — no solo una herramienta operativa. Los orquestadores que dan a sus comercios visibilidad sobre las brechas de liquidación retienen cuentas que de otro modo migrarían solo por precio.",
        "Posicionar un producto de datos como infraestructura para orquestadores, en lugar de como herramienta para comercios, cambia por completo la economía unitaria: una sola integración con un orquestador llega a toda su cartera de comercios.",
        "Los pivotes más potentes no son cambios de tecnología — son cambios de comprador. La tecnología de DaMap apenas cambió. Lo que cambió fue a quién le vendíamos, por qué les importaba comercialmente, y cómo encajaba en su modelo de distribución existente.",
      ],
    },

    tags: {
      en: ["Payments", "Product Strategy", "Fintech", "Data Governance", "PSD2", "Payment Orchestration"],
      es: ["Pagos", "Estrategia de Producto", "Fintech", "Gobierno de Datos", "PSD2", "Orquestación de Pagos"],
    },
    color: "#6366f1",
  },

  {
    slug: "cbdc-innovation",
    type: "featured",
    title: { en: "CBDC Innovation Initiative", es: "Iniciativa de Innovación en CBDC" },
    headline: {
      en: "Wholesale CBDC Proof-of-Concept for the European Central Bank",
      es: "Prueba de Concepto de CBDC Mayorista para el Banco Central Europeo",
    },
    metric: "ECB",
    metricLabel: { en: "wCBDC with Iberclear", es: "wCBDC con Iberclear" },
    industry: { en: "Digital Assets · Central Banking · Europe", es: "Activos Digitales · Banca Central · Europa" },
    challenge: {
      en: "The European Central Bank and Iberclear required a proof-of-concept demonstrating wholesale CBDC interoperability across heterogeneous distributed ledger networks, with full Delivery vs. Payment (DvP) settlement capability. The initiative needed to satisfy institutional-grade security, regulatory traceability, and multi-party coordination requirements.",
      es: "El Banco Central Europeo e Iberclear necesitaban una prueba de concepto que demostrara la interoperabilidad de un CBDC mayorista entre redes de registro distribuido heterogéneas, con capacidad de liquidación Delivery vs. Payment (DvP) completa. La iniciativa debía satisfacer requisitos de seguridad de nivel institucional, trazabilidad regulatoria y coordinación multi-parte.",
    },
    approach: {
      en: [
        "Led product definition and delivery coordination for the wCBDC MVP built on Hyperledger Besu, working across IOBuilders, ECB, Iberclear, and partner institutions.",
        "Implemented HTLC (Hash Time-Locked Contracts) protocol enabling full DvP interoperability between heterogeneous distributed ledger networks — resolving the core technical and regulatory challenge.",
        "Coordinated four institutions through a single technical whitepaper, achieving 100% stakeholder approval before any development commenced.",
        "Defined the product architecture around regulatory compliance, auditability, and settlement finality as first-class requirements rather than constraints applied after design.",
        "Managed delivery of the proof-of-concept within institutional research timelines, maintaining alignment between the technical team and senior stakeholders at the ECB and Iberclear.",
      ],
      es: [
        "Lideré la definición de producto y la coordinación de la ejecución del MVP de wCBDC construido sobre Hyperledger Besu, trabajando junto a IOBuilders, el BCE, Iberclear e instituciones asociadas.",
        "Implementé el protocolo HTLC (Hash Time-Locked Contracts), que habilita una interoperabilidad DvP completa entre redes de registro distribuido heterogéneas — resolviendo el principal reto técnico y regulatorio.",
        "Coordiné a cuatro instituciones en torno a un único whitepaper técnico, logrando la aprobación del 100% de los stakeholders antes de iniciar cualquier desarrollo.",
        "Definí la arquitectura de producto en torno al cumplimiento regulatorio, la auditabilidad y la finalidad de la liquidación como requisitos de primer orden, en lugar de restricciones aplicadas después del diseño.",
        "Gestioné la entrega de la prueba de concepto dentro de los plazos de investigación institucional, manteniendo la alineación entre el equipo técnico y los stakeholders senior del BCE e Iberclear.",
      ],
    },
    outcomes: {
      en: [
        "Successfully delivered the wCBDC MVP on Hyperledger Besu for ECB and Iberclear",
        "Full DvP interoperability demonstrated across heterogeneous distributed networks",
        "100% stakeholder approval secured across all four participating institutions",
        "Platform cited in ECB wholesale CBDC research as a reference implementation",
        "Settlement finality reduced from T+2 to near-instant confirmation in the proof-of-concept environment",
      ],
      es: [
        "Entrega exitosa del MVP de wCBDC sobre Hyperledger Besu para el BCE e Iberclear",
        "Interoperabilidad DvP completa demostrada entre redes distribuidas heterogéneas",
        "Aprobación del 100% de los stakeholders asegurada en las cuatro instituciones participantes",
        "Plataforma citada en la investigación del BCE sobre CBDC mayorista como implementación de referencia",
        "Finalidad de la liquidación reducida de T+2 a confirmación casi instantánea en el entorno de la prueba de concepto",
      ],
    },
    lessons: {
      en: [
        "In institutional blockchain initiatives, stakeholder alignment at the architecture phase is more valuable than technical sophistication — misaligned institutions derail delivery faster than technical complexity.",
        "Regulatory traceability is not a feature to add at the end; it must be the architectural foundation that everything else is built on.",
        "Central bank innovation programs move at institutional speed — delivery credibility comes from consistency, documentation quality, and formal stakeholder management, not agile velocity.",
      ],
      es: [
        "En iniciativas institucionales de blockchain, la alineación de los stakeholders en la fase de arquitectura vale más que la sofisticación técnica — las instituciones desalineadas descarrilan la ejecución más rápido que la complejidad técnica.",
        "La trazabilidad regulatoria no es una funcionalidad que se añade al final; debe ser el cimiento arquitectónico sobre el que se construye todo lo demás.",
        "Los programas de innovación de bancos centrales avanzan a ritmo institucional — la credibilidad en la ejecución proviene de la consistencia, la calidad de la documentación y la gestión formal de stakeholders, no de la velocidad ágil.",
      ],
    },
    tags: {
      en: ["CBDC", "Blockchain", "Digital Assets", "ECB", "Iberclear"],
      es: ["CBDC", "Blockchain", "Activos Digitales", "BCE", "Iberclear"],
    },
    color: "#8b5cf6",
  },

  // ─── SECONDARY ───────────────────────────────────────────────────────────────

  {
    slug: "fraud-prevention",
    type: "secondary",
    title: { en: "Fraud Prevention & Security Transformation", es: "Prevención de Fraude y Transformación de Seguridad" },
    headline: {
      en: "85% Reduction in Online Fraud Across LATAM Banking",
      es: "Reducción del 85% en el Fraude Online en la Banca de LatAm",
    },
    metric: "85%",
    metricLabel: { en: "Fraud Reduction", es: "Reducción del Fraude" },
    industry: { en: "Banking · Cybersecurity · LatAm", es: "Banca · Ciberseguridad · LatAm" },
    challenge: {
      en: "Citibank LATAM was experiencing significant fraud exposure across its digital banking channels. The organization needed to deploy advanced fraud prevention capabilities while maintaining regulatory compliance with zero tolerance for penalties across multiple Latin American jurisdictions.",
      es: "Citibank LATAM estaba experimentando una exposición significativa al fraude en sus canales de banca digital. La organización necesitaba desplegar capacidades avanzadas de prevención del fraude, manteniendo al mismo tiempo el cumplimiento regulatorio con tolerancia cero a sanciones en múltiples jurisdicciones de Latinoamérica.",
    },
    approach: {
      en: [
        "Deployed advanced multi-factor authentication and behavioural analytics across all LATAM digital banking channels.",
        "Designed and implemented a layered security architecture combining device fingerprinting, transaction pattern analysis, and real-time anomaly detection.",
        "Established regulatory compliance frameworks across all jurisdictions, creating a centre of excellence model for security operations across the region.",
      ],
      es: [
        "Desplegué autenticación multifactor avanzada y analítica de comportamiento en todos los canales de banca digital de LatAm.",
        "Diseñé e implementé una arquitectura de seguridad por capas que combinaba device fingerprinting, análisis de patrones de transacción y detección de anomalías en tiempo real.",
        "Establecí marcos de cumplimiento regulatorio en todas las jurisdicciones, creando un modelo de centro de excelencia para las operaciones de seguridad en toda la región.",
      ],
    },
    outcomes: {
      en: [
        "85% reduction in online fraud across LATAM digital banking channels",
        "72% reduction in credit card fraud through advanced authentication",
        "100% regulatory compliance with zero penalties over 5+ years across all jurisdictions",
        "Recognized as a regional centre of excellence for security and fraud prevention",
      ],
      es: [
        "Reducción del 85% en el fraude online en los canales de banca digital de LatAm",
        "Reducción del 72% en el fraude con tarjeta de crédito mediante autenticación avanzada",
        "Cumplimiento regulatorio del 100% con cero sanciones durante más de 5 años en todas las jurisdicciones",
        "Reconocido como centro de excelencia regional en seguridad y prevención del fraude",
      ],
    },
    lessons: {
      en: [
        "Fraud prevention at scale requires both technology and organizational design — the detection system is only as effective as the response process behind it.",
        "Regulatory compliance across multiple jurisdictions is achievable at scale when standards are designed centrally and adapted locally.",
      ],
      es: [
        "La prevención del fraude a escala requiere tanto tecnología como diseño organizativo — un sistema de detección es tan eficaz como el proceso de respuesta que hay detrás.",
        "El cumplimiento regulatorio en múltiples jurisdicciones es alcanzable a escala cuando los estándares se diseñan de forma centralizada y se adaptan localmente.",
      ],
    },
    tags: {
      en: ["Banking", "Fraud Prevention", "Cybersecurity", "Regulatory Compliance"],
      es: ["Banca", "Prevención del Fraude", "Ciberseguridad", "Cumplimiento Regulatorio"],
    },
    color: "#f59e0b",
  },

  {
    slug: "operational-excellence",
    type: "secondary",
    title: { en: "Payments Operational Excellence Program", es: "Programa de Excelencia Operativa en Pagos" },
    headline: {
      en: "90% Reduction in Operational Effort at 50,000 TPS Scale",
      es: "Reducción del 90% en el Esfuerzo Operativo a Escala de 50.000 TPS",
    },
    metric: "90%",
    metricLabel: { en: "Ops Effort Reduction", es: "Reducción de Esfuerzo Operativo" },
    industry: { en: "Payments Infrastructure · UK", es: "Infraestructura de Pagos · Reino Unido" },
    challenge: {
      en: "Modulr's payment operations team was processing thousands of transactions per hour with unsustainable manual intervention rates. The platform needed to scale to 50,000 TPS while simultaneously reducing operational overhead and achieving 99.95% SLA — without disrupting live payment operations.",
      es: "El equipo de operaciones de pagos de Modulr procesaba miles de transacciones por hora con unas tasas de intervención manual insostenibles. La plataforma necesitaba escalar a 50.000 TPS reduciendo al mismo tiempo la carga operativa y alcanzando un SLA del 99,95% — sin interrumpir las operaciones de pago en producción.",
    },
    approach: {
      en: [
        "Built a purpose-built automated balance adjustment tool that eliminated the primary source of manual intervention in payment operations.",
        "Led Kubernetes migration to achieve container orchestration, auto-scaling, and performance tuning — reducing infrastructure costs by 28% while increasing throughput.",
        "Established operational KPIs including exception rate, auto-resolution rate, and SLA compliance as core product metrics tracked by leadership weekly.",
      ],
      es: [
        "Construí una herramienta a medida de ajuste automático de saldos que eliminó la principal fuente de intervención manual en las operaciones de pago.",
        "Lideré la migración a Kubernetes para lograr orquestación de contenedores, auto-escalado y ajuste de rendimiento — reduciendo los costes de infraestructura en un 28% mientras aumentaba el throughput.",
        "Establecí KPI operativos —incluyendo tasa de excepciones, tasa de auto-resolución y cumplimiento de SLA— como métricas de producto clave, revisadas semanalmente por la dirección.",
      ],
    },
    outcomes: {
      en: [
        "90% reduction in payment operations effort — from 45 minutes to 4 minutes per task",
        "120+ hours per month freed from manual payment operations work",
        "Platform scaled to 50,000 TPS maintaining 99.95% SLA post-migration",
        "28% infrastructure cost reduction through Kubernetes optimization",
        "650% increase in deployment frequency enabling continuous delivery",
      ],
      es: [
        "Reducción del 90% en el esfuerzo de operaciones de pago — de 45 minutos a 4 minutos por tarea",
        "Más de 120 horas al mes liberadas del trabajo manual de operaciones de pago",
        "Plataforma escalada a 50.000 TPS manteniendo un SLA del 99,95% tras la migración",
        "Reducción del 28% en costes de infraestructura mediante la optimización con Kubernetes",
        "Incremento del 650% en la frecuencia de despliegues, habilitando entrega continua",
      ],
    },
    lessons: {
      en: [
        "Automation that removes human oversight entirely creates fragility. Design for human-in-the-loop at the right escalation points.",
        "Infrastructure cost reduction and platform scaling are not competing objectives — containerization achieves both simultaneously when done correctly.",
      ],
      es: [
        "La automatización que elimina por completo la supervisión humana genera fragilidad. Hay que diseñar puntos de escalado con intervención humana en los momentos adecuados.",
        "La reducción de costes de infraestructura y el escalado de la plataforma no son objetivos contrapuestos — la contenerización logra ambos simultáneamente cuando se hace correctamente.",
      ],
    },
    tags: {
      en: ["Payments", "Automation", "Infrastructure", "Operational Excellence"],
      es: ["Pagos", "Automatización", "Infraestructura", "Excelencia Operativa"],
    },
    color: "#ec4899",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}

export const featuredCaseStudies = caseStudies.filter((cs) => cs.type === "featured");
export const secondaryCaseStudies = caseStudies.filter((cs) => cs.type === "secondary");

// Flattens a bilingual CaseStudy into plain strings for the given language.
export function localizeCaseStudy(cs: CaseStudy, lang: Lang) {
  return {
    slug: cs.slug,
    type: cs.type,
    color: cs.color,
    metric: cs.metric,
    title: cs.title[lang],
    headline: cs.headline[lang],
    metricLabel: cs.metricLabel[lang],
    industry: cs.industry[lang],
    challenge: cs.challenge[lang],
    context: cs.context?.[lang],
    approach: cs.approach[lang],
    outcomes: cs.outcomes[lang],
    lessons: cs.lessons[lang],
    tags: cs.tags[lang],
    keyMetrics: cs.keyMetrics?.map((m) => ({ value: m.value, label: m.label[lang], detail: m.detail[lang] })),
    howItWorks: cs.howItWorks?.map((s) => ({ title: s.title[lang], description: s.description[lang] })),
    platformStats: cs.platformStats?.map((s) => ({ value: s.value, label: s.label[lang] })),
  };
}
