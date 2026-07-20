import type { Lang } from "@/lib/i18n/LangContext";

export const translations = {
  en: {
    nav: {
      items: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/approach", label: "Approach" },
        { href: "/advisory-engagements", label: "Advisory Engagements" },
        { href: "/case-studies", label: "Case Studies" },
        { href: "/insights", label: "Insights" },
        { href: "/contact", label: "Contact" },
      ],
      bookCall: "Book a Call",
      bookDiscoveryCall: "Book a Discovery Call",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    footer: {
      tagline:
        "Product, Innovation, Payments & Transformation Advisor helping organizations turn strategic initiatives into measurable outcomes.",
      navigation: "Navigation",
      getInTouch: "Get in Touch",
      discussChallenge: "Discuss Your Challenge",
      rights: "All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
    },
    common: {
      readCaseStudy: "Read case study",
      readFullCaseStudy: "Read full case study",
      viewAllCaseStudies: "View all case studies",
      readArticle: "Read article",
      readOnMedium: "Read on Medium",
      viewAllInsights: "View all insights",
      discussYourChallenge: "Discuss Your Challenge",
      scheduleDiscoveryCall: "Schedule a Discovery Call",
      connectOnLinkedIn: "Connect on LinkedIn",
    },
    home: {
      hero: {
        eyebrow: "Banking · Payments · Product Innovation · Transformation",
        headline: "Helping Organizations Turn Strategic Initiatives Into",
        headlineEm: "Measurable Outcomes.",
        subheadline:
          "Advisor for organizations navigating product innovation, payments ecosystems, transformation initiatives, AI opportunities, and complex delivery challenges.",
        trustNote:
          "Trusted by banking institutions, fintech companies, and enterprise organizations across Europe and Latin America.",
        stats: [
          { value: "18+", label: "Years Across Banking, Payments & Technology" },
          { value: "€470M+", label: "Assets Tokenized" },
          { value: "$2.5B", label: "Transaction Volume" },
          { value: "90%", label: "Ops Effort Reduction" },
        ],
      },
      trustBar: {
        label: "Worked With",
      },
      challenges: {
        eyebrow: "Challenges I Help Solve",
        title: "The situations organizations bring to me.",
        subtitle:
          "Built on 18+ years navigating banking, payments, fintech, and enterprise transformation. Here is where I create the most impact.",
        items: [
          {
            id: "priorities",
            title: "Prioritizing Strategic Initiatives",
            problem: "You have more opportunities than capacity to pursue them.",
            solution:
              "I help leadership teams evaluate what matters most, build decision frameworks that hold up under pressure, and align around a clear set of strategic priorities — so energy and investment go toward initiatives that create real business value.",
            icon: "◈",
          },
          {
            id: "innovation",
            title: "Evaluating Innovation Opportunities",
            problem: "Innovation is urgent. Knowing which opportunities to pursue is harder.",
            solution:
              "I help organizations assess innovation opportunities — including AI, emerging technologies, and new business models — with rigor and pragmatism. The goal is informed investment decisions, not experiments that never scale.",
            icon: "◎",
          },
          {
            id: "payments",
            title: "Navigating Payments Ecosystem Decisions",
            problem:
              "Payments strategy requires navigating regulation, infrastructure, and competitive dynamics simultaneously.",
            solution:
              "With hands-on experience across banking platforms, payment orchestration, PSD2, and fintech ecosystems, I help organizations make informed decisions about where to position, how to compete, and which partnerships or integrations create durable advantage.",
            icon: "⬡",
          },
          {
            id: "stakeholders",
            title: "Aligning Stakeholders Around a Direction",
            problem: "Initiatives stall not from lack of ideas — but from lack of alignment.",
            solution:
              "I create the clarity and shared frameworks that enable leadership teams to align around priorities, make decisions faster, and sustain momentum through complexity. Alignment is not a soft skill — it is a precondition for execution.",
            icon: "◱",
          },
          {
            id: "transformation",
            title: "Accelerating Transformation Programs",
            problem: "Transformation programs are expensive, long, and frequently underdeliver.",
            solution:
              "I help organizations connect strategy to execution, establish governance that works, and build measurement frameworks that surface problems early — before they become expensive. Transformation that delivers is transformation that is designed to deliver from day one.",
            icon: "◫",
          },
        ],
      },
      services: {
        eyebrow: "How I Support Organizations",
        title: "Four ways to work together.",
        subtitle:
          "Each engagement model is designed for a specific situation, with clear scope and outcomes. Not a generic consulting menu.",
        seeFullDetails: "See full engagement details, situations and outcomes",
        items: [
          {
            id: "assessment",
            number: "01",
            title: "Strategic Assessment & Recommendations",
            description:
              "Structured assessment of a strategic situation — priorities, opportunities, or investment decisions — with clear, actionable recommendations.",
            scope: "2–4 weeks",
            accent: "#14b8a6",
          },
          {
            id: "innovation",
            number: "02",
            title: "Innovation & Product Strategy",
            description:
              "From product strategy definition and market evaluation to innovation opportunities and AI assessment. Focus on informed decisions, not generic frameworks.",
            scope: "4–12 weeks",
            accent: "#6366f1",
          },
          {
            id: "transformation",
            number: "03",
            title: "Transformation Guidance",
            description:
              "Strategy connected to execution. Supporting organizations through transformation programs, operating model change, and delivery challenges.",
            scope: "3–12 months",
            accent: "#f59e0b",
          },
          {
            id: "fractional",
            number: "04",
            title: "Fractional Leadership",
            description:
              "Senior product or transformation leadership capacity without the full-time hire. Embedded as an extension of your leadership team.",
            scope: "3–12 months",
            accent: "#ec4899",
          },
        ],
      },
      featuredCaseStudies: {
        eyebrow: "Selected Case Studies",
        title: "Real initiatives. Measurable outcomes.",
        subtitle:
          "Banking, payments, digital assets, and fintech strategy. Every case study reflects actual delivery in complex, regulated environments.",
      },
      industries: {
        eyebrow: "Domain Expertise",
        title: "Industries I know from the inside.",
        subtitle:
          "Every domain below reflects real work in senior product and delivery roles — not adjacent experience or advisory distance.",
        items: [
          {
            name: "Banking",
            detail:
              "Citibank LATAM — digital banking, fraud prevention, regulatory compliance across 12 countries.",
          },
          {
            name: "Payments",
            detail:
              "Modulr, Checkout.com, Synapxi/DaMap — payment infrastructure, orchestration, PSD2, PayOps automation.",
          },
          {
            name: "Fintech",
            detail:
              "Product strategy and delivery across regulated fintech environments in Europe and Latin America.",
          },
          {
            name: "Digital Assets & Blockchain",
            detail:
              "IOBuilders — tokenization (ERC-1400), wholesale CBDC (ECB/Iberclear), DeFi, NFT infrastructure.",
          },
          {
            name: "AI & Emerging Technologies",
            detail:
              "ML-powered fraud detection (Devo/BBVA), GenAI product strategy (Synapxi), AI opportunity assessment.",
          },
          {
            name: "Cybersecurity & SecOps",
            detail:
              "Devo — enterprise SIEM for BBVA, anomaly detection models, 15TB/day threat analytics at scale.",
          },
        ],
      },
      insightsPreview: {
        eyebrow: "Insights & Thinking",
        title: "Perspectives that inform better decisions.",
      },
      aboutPreview: {
        eyebrow: "About Martin",
        title: "15+ years at the intersection of product, payments, and transformation.",
        paragraphs: [
          "I started at Citibank LATAM in 2007, building expertise in fraud prevention, regulatory compliance, and digital banking — including leading the mobile banking transformation of 2.5 million users across 12 countries.",
          "Since then I have worked across payments infrastructure, blockchain and tokenization, cybersecurity analytics, and fintech product strategy — always in senior product and delivery roles in complex, regulated environments.",
          "Today I combine technical fluency with strategic product thinking to help organizations navigate product innovation, payments decisions, and transformation programs with clarity and confidence.",
        ],
        readFullBackground: "Read my full background",
        exploreApproach: "Explore my approach",
        industriesLabel: "Industries",
        industries: [
          "Banking",
          "Payments",
          "Fintech",
          "Digital Assets & Blockchain",
          "Cybersecurity & SecOps",
          "Enterprise Technology",
          "SaaS",
          "Regulated Markets",
        ],
        selectedResultsLabel: "Selected Results",
        selectedResults: [
          { metric: "$2.5B", label: "Mobile transaction volume across 12 LATAM countries" },
          { metric: "€470M", label: "Real estate assets tokenised at IOBuilders" },
          { metric: "90%", label: "Reduction in payment operations effort at Modulr" },
          { metric: "183%", label: "NPS improvement at Citibank LATAM" },
        ],
      },
      finalCta: {
        eyebrow: "Start the Conversation",
        title: "Let's discuss your challenge.",
        subtitle:
          "Whether you are navigating a product decision, evaluating an innovation opportunity, or looking to accelerate a transformation program — the conversation starts here.",
        connectOn: "Connect on LinkedIn:",
      },
      framework: {
        eyebrow: "My Approach",
        title: "The Outcome-Driven Transformation™",
        subtitle:
          "A proprietary framework built from 15+ years of leading complex initiatives. Not a methodology borrowed from a textbook — a process refined through real delivery.",
        steps: [
          {
            number: "01",
            title: "Discover",
            description:
              "Understand business objectives, market realities, customer needs, and operational constraints. No assumptions.",
          },
          {
            number: "02",
            title: "Align",
            description:
              "Create clarity around priorities, stakeholders, success metrics, and expected outcomes. Alignment is a product risk.",
          },
          {
            number: "03",
            title: "Validate",
            description:
              "Reduce risk through rapid validation, experimentation, and evidence-based decision-making before committing investment.",
          },
          {
            number: "04",
            title: "Execute",
            description:
              "Turn strategy into action through structured delivery, governance, and accountability. Execution is the strategy.",
          },
          {
            number: "05",
            title: "Scale",
            description:
              "Build systems, teams, and processes capable of sustaining long-term growth and institutional learning.",
          },
        ],
        noteBold: "This is not a linear checklist.",
        noteRest:
          "Real transformation is iterative. The framework provides structure and accountability — not rigidity. Each engagement is adapted to the organization's maturity, urgency, and strategic context.",
      },
      impactMetrics: {
        eyebrow: "Impact at a Glance",
        title: "Results backed by real initiatives.",
        subtitle:
          "Every metric below comes from actual programs I led or co-led across Europe and Latin America.",
        items: [
          { value: 470, prefix: "€", suffix: "M+", label: "Assets Tokenized", description: "Across tokenized real estate and digital asset platforms" },
          { value: 2.5, prefix: "$", suffix: "B", label: "Transaction Volume", description: "Generated through digital banking transformation programs" },
          { value: 50, prefix: "", suffix: "K TPS", label: "Platform Scale", description: "Peak throughput maintained at 99.95% SLA availability" },
          { value: 90, prefix: "", suffix: "%", label: "Ops Effort Reduction", description: "Through intelligent automation and workflow redesign" },
          { value: 85, prefix: "", suffix: "%", label: "Fraud Reduction", description: "Through AI-powered detection and operational transformation" },
          { value: 15, prefix: "", suffix: "+", label: "Years Experience", description: "Leading product, AI, and transformation initiatives globally" },
        ],
      },
    },
    about: {
      eyebrow: "About",
      heroTitle: "Martin Fernando Mora.",
      heroLead:
        "Product, Innovation, Payments & Transformation Advisor with 18+ years working across banking, payments, fintech, cybersecurity, blockchain, and enterprise technology.",
      heroBody:
        "I help organizations evaluate opportunities, align stakeholders, and turn strategic initiatives into measurable outcomes — combining deep technical fluency with strategic product thinking across some of the most complex and regulated environments in financial services and enterprise technology.",
      heroLocation: "Based in Madrid, Spain. Operating across Europe and Latin America.",
      howIWork: "How I work with organizations",
      myApproach: "My approach",
      domainExperience: "Domain Experience",
      geography: "Geography",
      geographyTags: ["Europe", "Latin America", "Spain", "UK", "Argentina"],
      domainTags: ["Banking", "Payments", "Fintech", "Digital Assets", "Cybersecurity", "Enterprise Technology", "SaaS", "Regulated Markets"],
      highlightsEyebrow: "Experience Highlights",
      highlightsTitle: "Selected results across 18+ years.",
      highlightsCompanies: "Citibank LATAM · Devo · Modulr · Checkout.com · IOBuilders · Synapxi Tech",
      highlights: [
        {
          value: "$2.5B",
          label: "Mobile transaction volume",
          context: "Led the migration of 2.5M users to a mobile banking platform across 12 LATAM countries. Generated $2.5B in transaction volume in year one and improved NPS by 183%.",
          domain: "Banking · Transformation",
        },
        {
          value: "€470M",
          label: "Real estate assets tokenised",
          context: "Launched ERC-1400 tokenization platform for IOBuilders. Achieved 94% settlement time reduction through end-to-end KYC/AML automation across ECB, Iberclear, and BME.",
          domain: "Digital Assets · Fintech",
        },
        {
          value: "90%",
          label: "Ops effort reduction",
          context: "Built automated balance adjustment tooling at Modulr that reduced payment operations effort from 45 minutes to 4 minutes per task — freeing 120+ hours per month.",
          domain: "Payments · SaaS",
        },
        {
          value: "85%",
          label: "Online fraud reduction",
          context: "Deployed multi-factor authentication and behavioural analytics across Citibank LATAM digital channels. Maintained 100% regulatory compliance with zero penalties over 5+ years.",
          domain: "Banking · Cybersecurity",
        },
        {
          value: "3.2×",
          label: "TAM expansion",
          context: "Led product pivot at Synapxi Tech from reconciliation-only tool to full data governance platform, integrating PSD2, PISP, and AISP across 8+ payment providers.",
          domain: "Payments · Fintech",
        },
        {
          value: "91%",
          label: "Reduction in threat detection time",
          context: "Delivered enterprise SIEM platform for BBVA processing 15 TB/day. Implemented ML anomaly detection models (Prophet, LSTM) achieving 85% accuracy on live production threat data.",
          domain: "Cybersecurity · Enterprise",
        },
      ],
      expertiseEyebrow: "Expertise",
      expertiseTitle: "Where I create the most value.",
      expertise: [
        {
          title: "Product Strategy & Roadmap",
          description: "End-to-end product strategy from market analysis and opportunity sizing through prioritization, MVP definition, and global delivery. Experienced with RICE and WSJF frameworks in regulated environments.",
        },
        {
          title: "Payments & Fintech",
          description: "Deep hands-on experience across payment infrastructure, orchestration, PSD2/PISP/AISP, merchant integration, and PayOps. Worked with Modulr, Checkout.com, and Spanish payments ecosystem PSPs.",
        },
        {
          title: "Banking & Digital Transformation",
          description: "Large-scale transformation programs in regulated banking environments across Europe and Latin America. Proven delivery at Citibank across 12 countries, multiple regulatory frameworks, and millions of users.",
        },
        {
          title: "Blockchain & Digital Assets",
          description: "Tokenization (ERC-1400), wholesale CBDC (Hyperledger Besu, ECB/Iberclear), DeFi protocols, NFT infrastructure, and smart contracts across Ethereum, Hedera, and private blockchain networks.",
        },
        {
          title: "Innovation & Emerging Technologies",
          description: "Structured evaluation of when emerging technology — AI, Web3, ML — creates genuine business value versus noise. Experienced deploying ML and GenAI in production environments.",
        },
        {
          title: "Delivery & Program Leadership",
          description: "Cross-functional team leadership in complex, multi-stakeholder environments. Agile at scale, OKR design, program governance, and delivery transformation across multi-country rollouts.",
        },
      ],
      industriesEyebrow: "Industries",
      industries: ["Banking", "Payments", "Fintech", "Digital Assets & Blockchain", "Cybersecurity & SecOps", "Enterprise Technology", "SaaS", "Regulated Markets"],
      certificationsEyebrow: "Education & Certifications",
      certifications: [
        { title: "Generative AI for Project Managers", institution: "PMI", year: "2025" },
        { title: "Blockchain Essentials", institution: "Consensys Academy", year: "2023–24" },
        { title: "Fintech Executive Program", institution: "University of Oxford", year: "2017–18" },
        { title: "PMP — Project Management Professional", institution: "PMI", year: "2011" },
        { title: "B.S. Information Systems Engineering", institution: "UTN, Buenos Aires", year: "1995–2004" },
      ],
    },
    advisoryEngagements: {
      eyebrow: "Advisory Engagements",
      heroTitle: "How I support organizations.",
      heroSubtitle:
        "Four structured engagement models — each designed for a specific situation, with clear scope and outcomes. Not a generic consulting menu.",
      typicalScope: "Typical scope:",
      typicalSituations: "Typical Situations",
      youReceive: "You Receive",
      engagements: [
        {
          id: "assessment",
          number: "01",
          title: "Strategic Assessment & Recommendations",
          tagline: "Clarity before commitment.",
          description:
            "For organizations facing unclear priorities, significant investment decisions, or strategic inflection points. I provide an independent, structured assessment of the situation and a clear set of recommendations — so leadership can move forward with confidence rather than uncertainty.",
          situations: [
            "Unclear or competing strategic priorities",
            "New market or product investment decisions",
            "Innovation opportunity evaluation",
            "Pre-investment or pre-transformation readiness assessment",
            "Build vs. buy vs. partner decisions",
          ],
          youReceive: [
            "Strategic Assessment — a clear picture of where you are and what matters most",
            "Prioritized Recommendations — ranked by impact and feasibility, not theory",
            "Investment Decision Support — the evidence and framing needed to decide",
            "Roadmap — a sequenced view of what to do and when",
            "Leadership Alignment Session — working through the findings with your team",
          ],
          scope: "2–4 weeks",
          accent: "#14b8a6",
        },
        {
          id: "innovation",
          number: "02",
          title: "Innovation & Product Strategy",
          tagline: "From opportunity to informed investment decision.",
          description:
            "For organizations working through product strategy, market positioning, innovation opportunities, or AI assessments. I help evaluate opportunities rigorously and provide the frameworks and recommendations needed to move forward with conviction — not just another options list.",
          situations: [
            "Product strategy definition or repositioning",
            "Product-market fit evaluation",
            "Innovation opportunity identification and assessment",
            "AI opportunity evaluation and prioritization",
            "New market or segment entry decisions",
          ],
          youReceive: [
            "Opportunity Analysis — a grounded view of market potential and fit",
            "Product Recommendations — specific direction, not generic best practices",
            "Prioritization Framework — how to make trade-offs that hold up over time",
            "Stakeholder Workshop — building shared understanding across your leadership team",
            "Investment Decision Brief — the evidence needed to commit confidently",
          ],
          scope: "4–12 weeks",
          accent: "#6366f1",
        },
        {
          id: "transformation",
          number: "03",
          title: "Transformation Guidance",
          tagline: "Strategy connected to execution.",
          description:
            "For organizations navigating transformation programs, organizational change, or delivery challenges. I provide structured guidance that bridges strategy and delivery — ensuring transformation initiatives are built around business outcomes rather than activity and process theatre.",
          situations: [
            "Digital or operational transformation programs",
            "Organizational restructuring or change management",
            "Delivery challenges or program recovery",
            "Operating model design and optimization",
            "Multi-country or multi-stakeholder program coordination",
          ],
          youReceive: [
            "Transformation Blueprint — a clear plan connecting strategy to execution",
            "Governance Framework — decision rights and accountability that actually work",
            "KPI & Measurement Framework — outcomes tracked, not just activities",
            "Risk Assessment — the blockers identified before they become expensive",
            "Stakeholder Alignment Plan — the people side, not just the process side",
          ],
          scope: "3–12 months",
          accent: "#f59e0b",
        },
        {
          id: "fractional",
          number: "04",
          title: "Embedded Leadership Support",
          tagline: "Senior leadership capacity, without the full-time hire.",
          description:
            "For organizations that need experienced product or transformation leadership on an interim or part-time basis. I embed as a senior member of your leadership team — with real accountability, not just advisory distance. Appropriate for leadership gaps, scaling phases, or complex programs that need direct ownership.",
          situations: [
            "Interim product or transformation leadership",
            "Scaling a product or delivery organization",
            "Leadership gaps during transition or growth periods",
            "Board or executive-level program oversight",
            "Building and mentoring a product team",
          ],
          youReceive: [
            "Strategic Direction — a clear product or transformation direction with leadership accountability",
            "Portfolio Oversight — active management of initiatives and priorities",
            "Team Mentoring — capability building, not just task delegation",
            "Executive Reporting — clear, honest communication to leadership and board",
            "Decision Frameworks — systems your team can use after the engagement ends",
          ],
          scope: "3–12 months",
          accent: "#ec4899",
        },
      ],
      typicalEyebrow: "Typical Engagements",
      typicalTitle: "The shape of a typical engagement.",
      typicalIntro:
        "The advisory areas above describe the types of challenges I help organizations address. The engagement formats below describe how we can work together, depending on your objectives, timeline, and the level of support required.",
      formats: [
        {
          format: "Strategic Assessment",
          duration: "4–6 weeks",
          description:
            "A structured evaluation of a strategic situation — priorities, opportunities, or investment decisions — with clear recommendations and a decision framework at the end.",
          bestFor: "Organizations at a crossroads or facing a specific high-stakes decision.",
          accent: "#14b8a6",
        },
        {
          format: "Advisory Sprint",
          duration: "2–4 weeks",
          description:
            "An intensive, focused engagement on a specific question — product direction, payments strategy, AI opportunity, or transformation approach. Fast, structured, and outcome-driven.",
          bestFor: "Teams that need expert input quickly, without a long engagement.",
          accent: "#6366f1",
        },
        {
          format: "Embedded Leadership Support",
          duration: "Monthly retainer",
          description:
            "Ongoing embedded leadership — part of your team on a defined part-time basis. Real accountability, active participation in key decisions, and direct access when it matters.",
          bestFor: "Organizations that need senior leadership capacity without a full-time hire.",
          accent: "#f59e0b",
        },
        {
          format: "Executive Workshop",
          duration: "1–2 days",
          description:
            "A facilitated working session with your leadership team — to align on strategy, work through a specific challenge, or build a shared decision framework. Structured and prepared in advance.",
          bestFor: "Leadership teams that need alignment before committing to a direction.",
          accent: "#ec4899",
        },
      ],
      bestForLabel: "Best for:",
      notSureBold: "Not sure which format fits?",
      notSureRest:
        "The discovery conversation is the right starting point. Most engagements become clear once we've discussed the specific situation and what a successful outcome looks like for your organization.",
    },
    approach: {
      eyebrow: "My Approach",
      heroTitle: "How I work.",
      heroSubtitle:
        "Not a methodology borrowed from a textbook. A process built from 15+ years of leading complex initiatives across digital banking, SaaS, AI, blockchain, and enterprise transformation.",
      philosophyTitle: "What I believe.",
      principles: [
        {
          title: "Outcomes over outputs",
          description:
            "Every engagement starts with the question: what does success look like in measurable terms? Features shipped, processes automated, and initiatives completed are outputs. Revenue, customer adoption, and operational efficiency are outcomes. I optimize for the latter.",
        },
        {
          title: "Strategy before technology",
          description:
            "Whether the solution involves AI, cloud platforms, automation, or product redesign — the objective is always business value. Technology is the instrument, not the goal. This distinction prevents the most common form of expensive waste in digital initiatives.",
        },
        {
          title: "Simplicity scales",
          description:
            "Complexity slows organizations. Clarity accelerates them. The best strategies are the ones teams can execute without a reference document. I work to reduce complexity to its essential form — not to oversimplify, but to remove artificial friction.",
        },
        {
          title: "People drive transformation",
          description:
            "Successful initiatives depend as much on alignment and culture as they do on technology. Transformation is not something done to organizations. It is something organizations do, with the right support, clarity, and accountability.",
        },
        {
          title: "Validation over assumption",
          description:
            "Assumptions are the primary source of wasted investment in product and transformation programs. Every hypothesis about customers, markets, and organizational capabilities should be tested as cheaply as possible before resources are committed at scale.",
        },
      ],
      frameworkEyebrow: "The Framework",
      frameworkTitle: "Outcome-Driven Transformation™",
      frameworkSubtitle:
        "Five phases. Each with a distinct objective. Iterated as needed — not executed once and forgotten.",
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "Understand business objectives, market realities, customer needs, and operational constraints.",
          detail:
            "This phase involves structured discovery: stakeholder interviews, process mapping, competitive analysis, and capability assessment. The goal is not to gather information indefinitely, but to reach a clear picture of the gap between where the organization is and where it needs to be.",
        },
        {
          number: "02",
          title: "Align",
          description: "Create clarity around priorities, stakeholders, success metrics, and expected outcomes.",
          detail:
            "Alignment is not agreement. It means that when decisions need to be made, the criteria are clear and shared. This phase produces a prioritized initiative map, a stakeholder alignment plan, and an explicit definition of what success looks like — numerically.",
        },
        {
          number: "03",
          title: "Prioritize",
          description: "Focus resources on the initiatives most likely to create meaningful impact.",
          detail:
            "Not all opportunities deserve equal investment. This phase applies structured prioritization — drawing on frameworks like RICE, WSJF, and opportunity scoring — to determine which initiatives to pursue, defer, or decline, and in what sequence. The output is a defensible set of choices, not a ranked list.",
        },
        {
          number: "04",
          title: "Enable",
          description: "Create the conditions for teams to execute effectively against agreed priorities.",
          detail:
            "Enabling execution means establishing the right governance, decision rights, accountability structures, and team design — not micromanaging delivery. This phase ensures that strategy translates into action with the right people, cadence, and measurement in place. Progress is tracked against outcomes, not activity.",
        },
        {
          number: "05",
          title: "Measure & Improve",
          description: "Track outcomes against objectives and continuously improve based on evidence.",
          detail:
            "The most important discipline in any strategic program is honest measurement. This phase establishes the KPIs, review cadences, and feedback loops that allow the organization to course-correct before problems compound. The goal is not to report on what happened — it is to improve what happens next.",
        },
      ],
      engagementModelsEyebrow: "Engagement Models",
      engagementModelsTitle: "How we can work together.",
      engagementModels: [
        {
          title: "Strategic Assessment & Recommendations",
          description:
            "Structured assessment of a strategic situation with clear, actionable recommendations. Typically structured as a defined-scope project with a clear deliverable.",
          scope: "2–4 weeks",
        },
        {
          title: "Innovation & Product Strategy",
          description:
            "Product strategy, innovation opportunity evaluation, market assessment, and AI readiness. Delivered as advisory sessions, workshops, or an embedded engagement.",
          scope: "4–12 weeks",
        },
        {
          title: "Transformation Guidance",
          description:
            "Supporting organizations through transformation programs, operating model change, and delivery challenges. From blueprint to execution oversight.",
          scope: "3–12 months",
        },
        {
          title: "Fractional Leadership",
          description:
            "Senior product or transformation leadership embedded into your team for a defined period — with real accountability, not just advice.",
          scope: "3–12 months",
        },
      ],
    },
    caseStudyDetail: {
      allCaseStudies: "All Case Studies",
      keyMetrics: "Key Metrics",
      theChallenge: "The Challenge",
      marketContext: "Market Context",
      theApproach: "The Approach",
      howItWorks: "How It Works",
      theOutcomes: "The Outcomes",
      lessonsLearned: "Lessons Learned",
      platformAtGlance: "Platform at a Glance",
      nextCaseStudy: "Next Case Study",
    },
    caseStudiesPage: {
      eyebrow: "Case Studies",
      heroTitleLine1: "Real initiatives.",
      heroTitleLine2: "Measurable outcomes.",
      heroSubtitle:
        "Banking transformation, payments ecosystem strategy, CBDC innovation, and operational excellence programs — all in complex, regulated environments.",
      featured: "Featured",
      additional: "Additional Case Studies",
    },
    insightDetail: {
      allInsights: "All Insights",
      readSuffix: "read",
      authorTitle: "Product, Innovation, Payments & Transformation Advisor",
    },
    insightsPage: {
      eyebrow: "Insights & Thinking",
      heroTitle: "Perspectives that inform better decisions.",
      heroSubtitle:
        "Writing on payments, banking, digital assets, AI, and transformation — for leaders navigating high-stakes decisions in complex environments.",
      categories: ["All", "Payments & Banking", "AI & Innovation", "Digital Assets", "Transformation", "Product Strategy"],
    },
    contact: {
      eyebrow: "Get in Touch",
      title: "Let's discuss your challenge.",
      subtitle:
        "Whether you are exploring a new product direction, evaluating AI opportunities, or navigating a complex transformation — I'd like to hear about it.",
      quickestWays: "Quickest Ways to Reach Me",
      bookCallTitle: "Book a 30-minute Discovery Call",
      bookCallSubtitle: "via Calendly · Free · No commitment",
      connectLinkedin: "Connect on LinkedIn",
      whatToExpect: "What to Expect",
      expectBody:
        "I typically respond within 24–48 hours. For time-sensitive matters, booking a Calendly slot is the fastest path to a conversation.",
      orSendMessage: "Or send a message directly",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      companyPlaceholder: "Company (optional)",
      messagePlaceholder: "What challenge are you working on?",
      sending: "Sending…",
      sent: "Message sent!",
      send: "Send message",
      error: "Something went wrong. Please email",
      directly: "directly.",
    },
    privacy: {
      title: "Privacy Policy",
      paragraphs: [
        "This website collects only the information you voluntarily provide through the contact form. That information is used solely to respond to your inquiry and is never sold or shared with third parties.",
        "This site uses Vercel Analytics for aggregated, privacy-preserving traffic analytics. No personally identifiable information is collected by the analytics system.",
      ],
      contactPrefix: "For any questions about data handling, contact",
    },
    terms: {
      title: "Terms of Use",
      paragraphs: [
        "The content on this website is provided for informational purposes only. All case study data represents historical results that may not be indicative of future outcomes.",
        "All written content, frameworks, and methodologies described on this site are the intellectual property of Martin Fernando Mora. Reproduction without explicit written permission is prohibited.",
      ],
      contactPrefix: "For licensing or permissions enquiries, contact",
    },
    notFound: {
      eyebrow: "404",
      title: "Page not found.",
      body: "This page doesn't exist, but the main site has what you're looking for.",
      cta: "Return home",
    },
  },
  es: {
    nav: {
      items: [
        { href: "/", label: "Inicio" },
        { href: "/about", label: "Sobre mí" },
        { href: "/approach", label: "Metodología" },
        { href: "/advisory-engagements", label: "Modelos de Colaboración" },
        { href: "/case-studies", label: "Casos de Éxito" },
        { href: "/insights", label: "Perspectivas" },
        { href: "/contact", label: "Contacto" },
      ],
      bookCall: "Reservar Llamada",
      bookDiscoveryCall: "Reservar Llamada de Descubrimiento",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    footer: {
      tagline:
        "Advisor en Producto, Innovación, Pagos y Transformación, ayudando a organizaciones a convertir iniciativas estratégicas en resultados medibles.",
      navigation: "Navegación",
      getInTouch: "Contacto",
      discussChallenge: "Hablemos de tu Reto",
      rights: "Todos los derechos reservados.",
      privacy: "Privacidad",
      terms: "Términos",
    },
    common: {
      readCaseStudy: "Ver caso de éxito",
      readFullCaseStudy: "Ver caso de éxito completo",
      viewAllCaseStudies: "Ver todos los casos de éxito",
      readArticle: "Leer artículo",
      readOnMedium: "Leer en Medium",
      viewAllInsights: "Ver todas las perspectivas",
      discussYourChallenge: "Hablemos de tu Reto",
      scheduleDiscoveryCall: "Reservar Llamada de Descubrimiento",
      connectOnLinkedIn: "Conectar en LinkedIn",
    },
    home: {
      hero: {
        eyebrow: "Banca · Pagos · Innovación de Producto · Transformación",
        headline: "Ayudo a las Organizaciones a Convertir Iniciativas Estratégicas en",
        headlineEm: "Resultados Medibles.",
        subheadline:
          "Advisor para organizaciones que navegan la innovación de producto, los ecosistemas de pagos, iniciativas de transformación, oportunidades de IA y retos complejos de ejecución.",
        trustNote:
          "De confianza para instituciones bancarias, empresas fintech y organizaciones enterprise en Europa y Latinoamérica.",
        stats: [
          { value: "18+", label: "Años en Banca, Pagos y Tecnología" },
          { value: "470M€+", label: "Activos Tokenizados" },
          { value: "2.500M$", label: "Volumen de Transacciones" },
          { value: "90%", label: "Reducción de Esfuerzo Operativo" },
        ],
      },
      trustBar: {
        label: "He Trabajado Con",
      },
      challenges: {
        eyebrow: "Retos que Ayudo a Resolver",
        title: "Las situaciones que las organizaciones me plantean.",
        subtitle:
          "Basado en más de 18 años navegando la banca, los pagos, el fintech y la transformación empresarial. Aquí es donde genero mayor impacto.",
        items: [
          {
            id: "priorities",
            title: "Priorizar Iniciativas Estratégicas",
            problem: "Tienes más oportunidades que capacidad para abordarlas.",
            solution:
              "Ayudo a los equipos directivos a evaluar qué es realmente prioritario, a construir marcos de decisión que resisten la presión, y a alinearse en torno a un conjunto claro de prioridades estratégicas — para que la energía y la inversión se dirijan a iniciativas que generan valor real para el negocio.",
            icon: "◈",
          },
          {
            id: "innovation",
            title: "Evaluar Oportunidades de Innovación",
            problem: "La innovación es urgente. Saber qué oportunidades perseguir es más difícil.",
            solution:
              "Ayudo a las organizaciones a evaluar oportunidades de innovación — incluyendo IA, tecnologías emergentes y nuevos modelos de negocio — con rigor y pragmatismo. El objetivo son decisiones de inversión informadas, no experimentos que nunca escalan.",
            icon: "◎",
          },
          {
            id: "payments",
            title: "Navegar Decisiones del Ecosistema de Pagos",
            problem:
              "La estrategia de pagos exige navegar simultáneamente regulación, infraestructura y dinámicas competitivas.",
            solution:
              "Con experiencia práctica en plataformas bancarias, orquestación de pagos, PSD2 y ecosistemas fintech, ayudo a las organizaciones a decidir con criterio dónde posicionarse, cómo competir, y qué alianzas o integraciones generan una ventaja duradera.",
            icon: "⬡",
          },
          {
            id: "stakeholders",
            title: "Alinear a los Stakeholders en Torno a una Dirección",
            problem: "Las iniciativas se estancan no por falta de ideas, sino por falta de alineación.",
            solution:
              "Genero la claridad y los marcos compartidos que permiten a los equipos directivos alinearse en torno a prioridades, decidir más rápido y mantener el impulso a través de la complejidad. La alineación no es una habilidad blanda — es una condición previa para la ejecución.",
            icon: "◱",
          },
          {
            id: "transformation",
            title: "Acelerar Programas de Transformación",
            problem: "Los programas de transformación son costosos, largos y con frecuencia no cumplen lo prometido.",
            solution:
              "Ayudo a las organizaciones a conectar la estrategia con la ejecución, a establecer una gobernanza que funciona de verdad, y a construir marcos de medición que detectan los problemas a tiempo — antes de que se vuelvan costosos. La transformación que da resultados es la que está diseñada para darlos desde el primer día.",
            icon: "◫",
          },
        ],
      },
      services: {
        eyebrow: "Cómo Apoyo a las Organizaciones",
        title: "Cuatro formas de trabajar juntos.",
        subtitle:
          "Cada modelo de colaboración está diseñado para una situación concreta, con alcance y resultados claros. No es un menú de consultoría genérico.",
        seeFullDetails: "Ver el detalle completo de cada colaboración, situaciones y resultados",
        items: [
          {
            id: "assessment",
            number: "01",
            title: "Diagnóstico Estratégico y Recomendaciones",
            description:
              "Evaluación estructurada de una situación estratégica — prioridades, oportunidades o decisiones de inversión — con recomendaciones claras y accionables.",
            scope: "2–4 semanas",
            accent: "#14b8a6",
          },
          {
            id: "innovation",
            number: "02",
            title: "Innovación y Estrategia de Producto",
            description:
              "Desde la definición de estrategia de producto y la evaluación de mercado hasta oportunidades de innovación y evaluación de IA. Foco en decisiones informadas, no en marcos genéricos.",
            scope: "4–12 semanas",
            accent: "#6366f1",
          },
          {
            id: "transformation",
            number: "03",
            title: "Acompañamiento en Transformación",
            description:
              "La estrategia conectada con la ejecución. Acompaño a las organizaciones en programas de transformación, cambios de modelo operativo y retos de ejecución.",
            scope: "3–12 meses",
            accent: "#f59e0b",
          },
          {
            id: "fractional",
            number: "04",
            title: "Liderazgo Fraccional",
            description:
              "Capacidad de liderazgo senior en producto o transformación sin necesidad de una contratación a tiempo completo. Integrado como una extensión de tu equipo directivo.",
            scope: "3–12 meses",
            accent: "#ec4899",
          },
        ],
      },
      featuredCaseStudies: {
        eyebrow: "Casos de Éxito Seleccionados",
        title: "Iniciativas reales. Resultados medibles.",
        subtitle:
          "Banca, pagos, activos digitales y estrategia fintech. Cada caso de éxito refleja ejecución real en entornos complejos y regulados.",
      },
      industries: {
        eyebrow: "Experiencia Sectorial",
        title: "Sectores que conozco desde dentro.",
        subtitle:
          "Cada ámbito a continuación refleja trabajo real en roles senior de producto y ejecución — no experiencia adyacente ni distancia de consultor.",
        items: [
          {
            name: "Banca",
            detail:
              "Citibank LATAM — banca digital, prevención del fraude, cumplimiento regulatorio en 12 países.",
          },
          {
            name: "Pagos",
            detail:
              "Modulr, Checkout.com, Synapxi/DaMap — infraestructura de pagos, orquestación, PSD2, automatización de PayOps.",
          },
          {
            name: "Fintech",
            detail:
              "Estrategia y ejecución de producto en entornos fintech regulados en Europa y Latinoamérica.",
          },
          {
            name: "Activos Digitales y Blockchain",
            detail:
              "IOBuilders — tokenización (ERC-1400), CBDC mayorista (BCE/Iberclear), DeFi, infraestructura NFT.",
          },
          {
            name: "IA y Tecnologías Emergentes",
            detail:
              "Detección de fraude con ML (Devo/BBVA), estrategia de producto GenAI (Synapxi), evaluación de oportunidades de IA.",
          },
          {
            name: "Ciberseguridad y SecOps",
            detail:
              "Devo — SIEM enterprise para BBVA, modelos de detección de anomalías, analítica de amenazas a escala de 15 TB/día.",
          },
        ],
      },
      insightsPreview: {
        eyebrow: "Perspectivas y Reflexiones",
        title: "Perspectivas que inspiran mejores decisiones.",
      },
      aboutPreview: {
        eyebrow: "Sobre Martin",
        title: "Más de 15 años en la intersección de producto, pagos y transformación.",
        paragraphs: [
          "Empecé en Citibank LATAM en 2007, desarrollando experiencia en prevención del fraude, cumplimiento regulatorio y banca digital — incluyendo el liderazgo de la transformación de banca móvil de 2,5 millones de usuarios en 12 países.",
          "Desde entonces he trabajado en infraestructura de pagos, blockchain y tokenización, analítica de ciberseguridad y estrategia de producto fintech — siempre en roles senior de producto y ejecución en entornos complejos y regulados.",
          "Hoy combino fluidez técnica con pensamiento estratégico de producto para ayudar a las organizaciones a navegar la innovación de producto, las decisiones de pagos y los programas de transformación con claridad y confianza.",
        ],
        readFullBackground: "Lee mi trayectoria completa",
        exploreApproach: "Explora mi metodología",
        industriesLabel: "Sectores",
        industries: [
          "Banca",
          "Pagos",
          "Fintech",
          "Activos Digitales y Blockchain",
          "Ciberseguridad y SecOps",
          "Tecnología Enterprise",
          "SaaS",
          "Mercados Regulados",
        ],
        selectedResultsLabel: "Resultados Seleccionados",
        selectedResults: [
          { metric: "2.500M$", label: "Volumen de transacciones móviles en 12 países de LatAm" },
          { metric: "470M€", label: "Activos inmobiliarios tokenizados en IOBuilders" },
          { metric: "90%", label: "Reducción del esfuerzo en operaciones de pago en Modulr" },
          { metric: "183%", label: "Mejora del NPS en Citibank LATAM" },
        ],
      },
      finalCta: {
        eyebrow: "Iniciemos la Conversación",
        title: "Hablemos de tu reto.",
        subtitle:
          "Ya sea que estés evaluando una decisión de producto, una oportunidad de innovación, o buscando acelerar un programa de transformación — la conversación empieza aquí.",
        connectOn: "Conecta en LinkedIn:",
      },
      framework: {
        eyebrow: "Mi Metodología",
        title: "La Transformación Orientada a Resultados™",
        subtitle:
          "Un marco propio construido a partir de más de 15 años liderando iniciativas complejas. No es una metodología sacada de un manual — es un proceso perfeccionado a través de ejecución real.",
        steps: [
          {
            number: "01",
            title: "Descubrir",
            description:
              "Comprender los objetivos de negocio, la realidad del mercado, las necesidades del cliente y las restricciones operativas. Sin suposiciones.",
          },
          {
            number: "02",
            title: "Alinear",
            description:
              "Generar claridad en torno a prioridades, stakeholders, métricas de éxito y resultados esperados. La alineación es un riesgo de producto.",
          },
          {
            number: "03",
            title: "Validar",
            description:
              "Reducir el riesgo mediante validación rápida, experimentación y decisiones basadas en evidencia antes de comprometer la inversión.",
          },
          {
            number: "04",
            title: "Ejecutar",
            description:
              "Convertir la estrategia en acción mediante ejecución estructurada, gobernanza y responsabilidad. La ejecución es la estrategia.",
          },
          {
            number: "05",
            title: "Escalar",
            description:
              "Construir sistemas, equipos y procesos capaces de sostener el crecimiento a largo plazo y el aprendizaje institucional.",
          },
        ],
        noteBold: "Esto no es una lista de tareas lineal.",
        noteRest:
          "La transformación real es iterativa. El marco aporta estructura y responsabilidad — no rigidez. Cada colaboración se adapta a la madurez, la urgencia y el contexto estratégico de la organización.",
      },
      impactMetrics: {
        eyebrow: "Impacto de un Vistazo",
        title: "Resultados respaldados por iniciativas reales.",
        subtitle:
          "Cada métrica a continuación proviene de programas reales que lideré o colideré en Europa y Latinoamérica.",
        items: [
          { value: 470, prefix: "€", suffix: "M+", label: "Activos Tokenizados", description: "En plataformas de activos digitales e inmobiliarios tokenizados" },
          { value: 2.5, prefix: "$", suffix: "B", label: "Volumen de Transacciones", description: "Generado a través de programas de transformación de banca digital" },
          { value: 50, prefix: "", suffix: "K TPS", label: "Escala de Plataforma", description: "Throughput máximo manteniendo un SLA de disponibilidad del 99,95%" },
          { value: 90, prefix: "", suffix: "%", label: "Reducción de Esfuerzo Operativo", description: "Mediante automatización inteligente y rediseño de flujos de trabajo" },
          { value: 85, prefix: "", suffix: "%", label: "Reducción del Fraude", description: "Mediante detección impulsada por IA y transformación operativa" },
          { value: 15, prefix: "", suffix: "+", label: "Años de Experiencia", description: "Liderando iniciativas de producto, IA y transformación a nivel global" },
        ],
      },
    },
    about: {
      eyebrow: "Sobre mí",
      heroTitle: "Martin Fernando Mora.",
      heroLead:
        "Advisor en Producto, Innovación, Pagos y Transformación con más de 18 años trabajando en banca, pagos, fintech, ciberseguridad, blockchain y tecnología enterprise.",
      heroBody:
        "Ayudo a las organizaciones a evaluar oportunidades, alinear a sus stakeholders y convertir iniciativas estratégicas en resultados medibles — combinando fluidez técnica profunda con pensamiento estratégico de producto en algunos de los entornos más complejos y regulados de los servicios financieros y la tecnología enterprise.",
      heroLocation: "Con base en Madrid, España. Operando en Europa y Latinoamérica.",
      howIWork: "Cómo trabajo con las organizaciones",
      myApproach: "Mi metodología",
      domainExperience: "Experiencia por Ámbito",
      geography: "Geografía",
      geographyTags: ["Europa", "Latinoamérica", "España", "Reino Unido", "Argentina"],
      domainTags: ["Banca", "Pagos", "Fintech", "Activos Digitales", "Ciberseguridad", "Tecnología Enterprise", "SaaS", "Mercados Regulados"],
      highlightsEyebrow: "Trayectoria Destacada",
      highlightsTitle: "Resultados seleccionados de más de 18 años.",
      highlightsCompanies: "Citibank LATAM · Devo · Modulr · Checkout.com · IOBuilders · Synapxi Tech",
      highlights: [
        {
          value: "2.500M$",
          label: "Volumen de transacciones móviles",
          context: "Lideré la migración de 2,5M de usuarios a una plataforma de banca móvil en 12 países de LatAm. Generé 2.500 M$ en volumen de transacciones el primer año y mejoré el NPS un 183%.",
          domain: "Banca · Transformación",
        },
        {
          value: "470M€",
          label: "Activos inmobiliarios tokenizados",
          context: "Lancé la plataforma de tokenización ERC-1400 para IOBuilders. Logré una reducción del 94% en el tiempo de liquidación mediante automatización KYC/AML de extremo a extremo con el BCE, Iberclear y BME.",
          domain: "Activos Digitales · Fintech",
        },
        {
          value: "90%",
          label: "Reducción del esfuerzo operativo",
          context: "Construí herramientas de ajuste automático de saldos en Modulr que redujeron el esfuerzo de operaciones de pago de 45 a 4 minutos por tarea — liberando más de 120 horas al mes.",
          domain: "Pagos · SaaS",
        },
        {
          value: "85%",
          label: "Reducción del fraude online",
          context: "Desplegué autenticación multifactor y analítica de comportamiento en los canales digitales de Citibank LATAM. Mantuve un cumplimiento regulatorio del 100% sin sanciones durante más de 5 años.",
          domain: "Banca · Ciberseguridad",
        },
        {
          value: "3,2×",
          label: "Expansión del TAM",
          context: "Lideré el pivote de producto en Synapxi Tech, de una herramienta solo de conciliación a una plataforma completa de gobierno de datos, integrando PSD2, PISP y AISP en más de 8 proveedores de pagos.",
          domain: "Pagos · Fintech",
        },
        {
          value: "91%",
          label: "Reducción del tiempo de detección de amenazas",
          context: "Entregué la plataforma SIEM enterprise para BBVA, procesando 15 TB/día. Implementé modelos de detección de anomalías con ML (Prophet, LSTM) alcanzando un 85% de precisión sobre datos de amenazas en producción.",
          domain: "Ciberseguridad · Enterprise",
        },
      ],
      expertiseEyebrow: "Experiencia",
      expertiseTitle: "Dónde genero mayor valor.",
      expertise: [
        {
          title: "Estrategia de Producto y Roadmap",
          description: "Estrategia de producto de extremo a extremo, desde el análisis de mercado y el dimensionamiento de oportunidades hasta la priorización, la definición del MVP y la ejecución global. Experiencia con los marcos RICE y WSJF en entornos regulados.",
        },
        {
          title: "Pagos y Fintech",
          description: "Amplia experiencia práctica en infraestructura de pagos, orquestación, PSD2/PISP/AISP, integración de comercios y PayOps. He trabajado con Modulr, Checkout.com y PSP del ecosistema de pagos español.",
        },
        {
          title: "Banca y Transformación Digital",
          description: "Programas de transformación a gran escala en entornos bancarios regulados en Europa y Latinoamérica. Ejecución demostrada en Citibank en 12 países, múltiples marcos regulatorios y millones de usuarios.",
        },
        {
          title: "Blockchain y Activos Digitales",
          description: "Tokenización (ERC-1400), CBDC mayorista (Hyperledger Besu, BCE/Iberclear), protocolos DeFi, infraestructura NFT y smart contracts en Ethereum, Hedera y redes blockchain privadas.",
        },
        {
          title: "Innovación y Tecnologías Emergentes",
          description: "Evaluación estructurada de cuándo una tecnología emergente —IA, Web3, ML— genera valor de negocio genuino frente a simple ruido. Experiencia desplegando ML y GenAI en entornos de producción.",
        },
        {
          title: "Ejecución y Liderazgo de Programas",
          description: "Liderazgo de equipos multifuncionales en entornos complejos y con múltiples stakeholders. Agile a escala, diseño de OKR, gobernanza de programas y transformación de la ejecución en despliegues multi-país.",
        },
      ],
      industriesEyebrow: "Sectores",
      industries: ["Banca", "Pagos", "Fintech", "Activos Digitales y Blockchain", "Ciberseguridad y SecOps", "Tecnología Enterprise", "SaaS", "Mercados Regulados"],
      certificationsEyebrow: "Formación y Certificaciones",
      certifications: [
        { title: "IA Generativa para Directores de Proyecto", institution: "PMI", year: "2025" },
        { title: "Blockchain Essentials", institution: "Consensys Academy", year: "2023–24" },
        { title: "Programa Ejecutivo en Fintech", institution: "University of Oxford", year: "2017–18" },
        { title: "PMP — Project Management Professional", institution: "PMI", year: "2011" },
        { title: "Ingeniería en Sistemas de Información", institution: "UTN, Buenos Aires", year: "1995–2004" },
      ],
    },
    advisoryEngagements: {
      eyebrow: "Modelos de Colaboración",
      heroTitle: "Cómo apoyo a las organizaciones.",
      heroSubtitle:
        "Cuatro modelos de colaboración estructurados — cada uno diseñado para una situación concreta, con alcance y resultados claros. No es un menú de consultoría genérico.",
      typicalScope: "Alcance habitual:",
      typicalSituations: "Situaciones Habituales",
      youReceive: "Qué Recibes",
      engagements: [
        {
          id: "assessment",
          number: "01",
          title: "Diagnóstico Estratégico y Recomendaciones",
          tagline: "Claridad antes del compromiso.",
          description:
            "Para organizaciones que enfrentan prioridades poco claras, decisiones de inversión relevantes o puntos de inflexión estratégicos. Ofrezco una evaluación independiente y estructurada de la situación y un conjunto claro de recomendaciones — para que la dirección pueda avanzar con confianza en lugar de incertidumbre.",
          situations: [
            "Prioridades estratégicas poco claras o contrapuestas",
            "Decisiones de inversión en nuevos mercados o productos",
            "Evaluación de oportunidades de innovación",
            "Evaluación de preparación previa a una inversión o transformación",
            "Decisiones de construir vs. comprar vs. asociarse",
          ],
          youReceive: [
            "Diagnóstico Estratégico — una imagen clara de dónde estás y qué es lo más importante",
            "Recomendaciones Priorizadas — ordenadas por impacto y viabilidad, no por teoría",
            "Apoyo a la Decisión de Inversión — la evidencia y el enfoque necesarios para decidir",
            "Roadmap — una visión secuenciada de qué hacer y cuándo",
            "Sesión de Alineación con la Dirección — revisando los hallazgos junto a tu equipo",
          ],
          scope: "2–4 semanas",
          accent: "#14b8a6",
        },
        {
          id: "innovation",
          number: "02",
          title: "Innovación y Estrategia de Producto",
          tagline: "De la oportunidad a la decisión de inversión informada.",
          description:
            "Para organizaciones que están trabajando en estrategia de producto, posicionamiento de mercado, oportunidades de innovación o evaluaciones de IA. Ayudo a evaluar las oportunidades con rigor y aporto los marcos y recomendaciones necesarios para avanzar con convicción — no otro listado más de opciones.",
          situations: [
            "Definición o reposicionamiento de la estrategia de producto",
            "Evaluación del ajuste producto-mercado",
            "Identificación y evaluación de oportunidades de innovación",
            "Evaluación y priorización de oportunidades de IA",
            "Decisiones de entrada en nuevos mercados o segmentos",
          ],
          youReceive: [
            "Análisis de Oportunidad — una visión fundamentada del potencial de mercado y el ajuste",
            "Recomendaciones de Producto — una dirección concreta, no buenas prácticas genéricas",
            "Marco de Priorización — cómo tomar decisiones de trade-off que se sostienen en el tiempo",
            "Workshop con Stakeholders — construyendo un entendimiento compartido en tu equipo directivo",
            "Informe para la Decisión de Inversión — la evidencia necesaria para comprometerse con confianza",
          ],
          scope: "4–12 semanas",
          accent: "#6366f1",
        },
        {
          id: "transformation",
          number: "03",
          title: "Acompañamiento en Transformación",
          tagline: "La estrategia conectada con la ejecución.",
          description:
            "Para organizaciones que navegan programas de transformación, cambio organizativo o retos de ejecución. Ofrezco un acompañamiento estructurado que conecta la estrategia con la entrega — asegurando que las iniciativas de transformación se construyan en torno a resultados de negocio y no a actividad o teatro de procesos.",
          situations: [
            "Programas de transformación digital u operativa",
            "Reestructuración organizativa o gestión del cambio",
            "Retos de ejecución o recuperación de programas",
            "Diseño y optimización del modelo operativo",
            "Coordinación de programas multi-país o multi-stakeholder",
          ],
          youReceive: [
            "Plan de Transformación — un plan claro que conecta la estrategia con la ejecución",
            "Marco de Gobernanza — derechos de decisión y responsabilidad que funcionan de verdad",
            "Marco de KPI y Medición — resultados medidos, no solo actividades",
            "Evaluación de Riesgos — los bloqueos identificados antes de que se vuelvan costosos",
            "Plan de Alineación de Stakeholders — el lado de las personas, no solo el de los procesos",
          ],
          scope: "3–12 meses",
          accent: "#f59e0b",
        },
        {
          id: "fractional",
          number: "04",
          title: "Liderazgo Integrado",
          tagline: "Capacidad de liderazgo senior, sin una contratación a tiempo completo.",
          description:
            "Para organizaciones que necesitan liderazgo experimentado de producto o transformación de forma interina o a tiempo parcial. Me integro como un miembro senior de tu equipo directivo — con responsabilidad real, no solo distancia de asesor. Apropiado para vacíos de liderazgo, fases de escalado o programas complejos que requieren propiedad directa.",
          situations: [
            "Liderazgo interino de producto o transformación",
            "Escalado de una organización de producto o de ejecución",
            "Vacíos de liderazgo durante periodos de transición o crecimiento",
            "Supervisión de programas a nivel de consejo o dirección ejecutiva",
            "Construcción y mentoría de un equipo de producto",
          ],
          youReceive: [
            "Dirección Estratégica — una dirección de producto o transformación clara, con responsabilidad de liderazgo",
            "Supervisión de Portfolio — gestión activa de iniciativas y prioridades",
            "Mentoría de Equipo — desarrollo de capacidades, no solo delegación de tareas",
            "Reporting Ejecutivo — comunicación clara y honesta hacia la dirección y el consejo",
            "Marcos de Decisión — sistemas que tu equipo puede usar después de terminar la colaboración",
          ],
          scope: "3–12 meses",
          accent: "#ec4899",
        },
      ],
      typicalEyebrow: "Formatos de Colaboración",
      typicalTitle: "La forma de una colaboración habitual.",
      typicalIntro:
        "Los ámbitos de asesoramiento anteriores describen los tipos de retos que ayudo a abordar a las organizaciones. Los formatos de colaboración a continuación describen cómo podemos trabajar juntos, según tus objetivos, plazos y el nivel de apoyo requerido.",
      formats: [
        {
          format: "Diagnóstico Estratégico",
          duration: "4–6 semanas",
          description:
            "Una evaluación estructurada de una situación estratégica — prioridades, oportunidades o decisiones de inversión — con recomendaciones claras y un marco de decisión al final.",
          bestFor: "Organizaciones en una encrucijada o ante una decisión concreta de alto impacto.",
          accent: "#14b8a6",
        },
        {
          format: "Sprint de Asesoramiento",
          duration: "2–4 semanas",
          description:
            "Una colaboración intensiva y enfocada en una pregunta concreta — dirección de producto, estrategia de pagos, oportunidad de IA o enfoque de transformación. Rápida, estructurada y orientada a resultados.",
          bestFor: "Equipos que necesitan aportación experta con rapidez, sin una colaboración larga.",
          accent: "#6366f1",
        },
        {
          format: "Liderazgo Integrado",
          duration: "Retainer mensual",
          description:
            "Liderazgo integrado y continuo — formando parte de tu equipo con una dedicación parcial definida. Responsabilidad real, participación activa en decisiones clave y acceso directo cuando importa.",
          bestFor: "Organizaciones que necesitan capacidad de liderazgo senior sin una contratación a tiempo completo.",
          accent: "#f59e0b",
        },
        {
          format: "Workshop Ejecutivo",
          duration: "1–2 días",
          description:
            "Una sesión de trabajo facilitada con tu equipo directivo — para alinear estrategia, abordar un reto concreto o construir un marco de decisión compartido. Estructurada y preparada de antemano.",
          bestFor: "Equipos directivos que necesitan alinearse antes de comprometerse con una dirección.",
          accent: "#ec4899",
        },
      ],
      bestForLabel: "Ideal para:",
      notSureBold: "¿No estás seguro de qué formato encaja?",
      notSureRest:
        "La conversación de descubrimiento es el punto de partida adecuado. La mayoría de las colaboraciones se aclaran una vez que hemos hablado de la situación concreta y de cómo se ve un resultado exitoso para tu organización.",
    },
    approach: {
      eyebrow: "Mi Metodología",
      heroTitle: "Cómo trabajo.",
      heroSubtitle:
        "No es una metodología sacada de un manual. Es un proceso construido a partir de más de 15 años liderando iniciativas complejas en banca digital, SaaS, IA, blockchain y transformación enterprise.",
      philosophyTitle: "En qué creo.",
      principles: [
        {
          title: "Los resultados por encima de los entregables",
          description:
            "Toda colaboración empieza con la pregunta: ¿cómo se ve el éxito en términos medibles? Las funcionalidades entregadas, los procesos automatizados y las iniciativas completadas son entregables. Los ingresos, la adopción del cliente y la eficiencia operativa son resultados. Yo optimizo por estos últimos.",
        },
        {
          title: "La estrategia antes que la tecnología",
          description:
            "Ya sea que la solución implique IA, plataformas cloud, automatización o rediseño de producto — el objetivo siempre es el valor de negocio. La tecnología es el instrumento, no la meta. Esta distinción evita la forma más común de desperdicio costoso en las iniciativas digitales.",
        },
        {
          title: "La simplicidad escala",
          description:
            "La complejidad ralentiza a las organizaciones. La claridad las acelera. Las mejores estrategias son las que los equipos pueden ejecutar sin necesidad de un documento de referencia. Trabajo para reducir la complejidad a su forma esencial — no para simplificar en exceso, sino para eliminar la fricción artificial.",
        },
        {
          title: "Las personas impulsan la transformación",
          description:
            "Las iniciativas exitosas dependen tanto de la alineación y la cultura como de la tecnología. La transformación no es algo que se le hace a las organizaciones. Es algo que las organizaciones hacen, con el apoyo, la claridad y la responsabilidad adecuados.",
        },
        {
          title: "La validación por encima de la suposición",
          description:
            "Las suposiciones son la principal fuente de inversión desperdiciada en los programas de producto y transformación. Toda hipótesis sobre clientes, mercados y capacidades organizativas debe probarse de la forma más económica posible antes de comprometer recursos a gran escala.",
        },
      ],
      frameworkEyebrow: "El Marco de Trabajo",
      frameworkTitle: "Transformación Orientada a Resultados™",
      frameworkSubtitle:
        "Cinco fases. Cada una con un objetivo diferenciado. Iteradas según sea necesario — no ejecutadas una vez y olvidadas.",
      steps: [
        {
          number: "01",
          title: "Descubrir",
          description: "Comprender los objetivos de negocio, la realidad del mercado, las necesidades del cliente y las restricciones operativas.",
          detail:
            "Esta fase implica un descubrimiento estructurado: entrevistas con stakeholders, mapeo de procesos, análisis competitivo y evaluación de capacidades. El objetivo no es recopilar información indefinidamente, sino llegar a una imagen clara de la brecha entre dónde está la organización y dónde necesita estar.",
        },
        {
          number: "02",
          title: "Alinear",
          description: "Generar claridad en torno a prioridades, stakeholders, métricas de éxito y resultados esperados.",
          detail:
            "Alineación no es lo mismo que acuerdo. Significa que cuando hay que tomar decisiones, los criterios son claros y compartidos. Esta fase produce un mapa de iniciativas priorizadas, un plan de alineación de stakeholders y una definición explícita de cómo se ve el éxito — en cifras.",
        },
        {
          number: "03",
          title: "Priorizar",
          description: "Enfocar los recursos en las iniciativas con más probabilidad de generar un impacto significativo.",
          detail:
            "No todas las oportunidades merecen la misma inversión. Esta fase aplica priorización estructurada —basándose en marcos como RICE, WSJF y scoring de oportunidades— para determinar qué iniciativas abordar, posponer o descartar, y en qué orden. El resultado es un conjunto de decisiones defendibles, no una lista ordenada.",
        },
        {
          number: "04",
          title: "Habilitar",
          description: "Crear las condiciones para que los equipos ejecuten con eficacia sobre las prioridades acordadas.",
          detail:
            "Habilitar la ejecución significa establecer la gobernanza adecuada, los derechos de decisión, las estructuras de responsabilidad y el diseño de equipo correctos — no microgestionar la entrega. Esta fase garantiza que la estrategia se traduzca en acción con las personas, el ritmo y la medición adecuados. El progreso se sigue según resultados, no según actividad.",
        },
        {
          number: "05",
          title: "Medir y Mejorar",
          description: "Seguir los resultados frente a los objetivos y mejorar de forma continua a partir de la evidencia.",
          detail:
            "La disciplina más importante en cualquier programa estratégico es la medición honesta. Esta fase establece los KPI, los ritmos de revisión y los ciclos de feedback que permiten a la organización corregir el rumbo antes de que los problemas se agraven. El objetivo no es reportar lo que pasó — es mejorar lo que pasa después.",
        },
      ],
      engagementModelsEyebrow: "Modelos de Colaboración",
      engagementModelsTitle: "Cómo podemos trabajar juntos.",
      engagementModels: [
        {
          title: "Diagnóstico Estratégico y Recomendaciones",
          description:
            "Evaluación estructurada de una situación estratégica con recomendaciones claras y accionables. Estructurado normalmente como un proyecto de alcance definido con un entregable claro.",
          scope: "2–4 semanas",
        },
        {
          title: "Innovación y Estrategia de Producto",
          description:
            "Estrategia de producto, evaluación de oportunidades de innovación, análisis de mercado y preparación en IA. Entregado como sesiones de asesoramiento, workshops o una colaboración integrada.",
          scope: "4–12 semanas",
        },
        {
          title: "Acompañamiento en Transformación",
          description:
            "Acompaño a las organizaciones en programas de transformación, cambios de modelo operativo y retos de ejecución. Desde el diseño hasta la supervisión de la ejecución.",
          scope: "3–12 meses",
        },
        {
          title: "Liderazgo Fraccional",
          description:
            "Liderazgo senior de producto o transformación integrado en tu equipo durante un periodo definido — con responsabilidad real, no solo asesoramiento.",
          scope: "3–12 meses",
        },
      ],
    },
    caseStudyDetail: {
      allCaseStudies: "Todos los Casos de Éxito",
      keyMetrics: "Métricas Clave",
      theChallenge: "El Reto",
      marketContext: "Contexto de Mercado",
      theApproach: "El Enfoque",
      howItWorks: "Cómo Funciona",
      theOutcomes: "Los Resultados",
      lessonsLearned: "Lecciones Aprendidas",
      platformAtGlance: "La Plataforma de un Vistazo",
      nextCaseStudy: "Siguiente Caso de Éxito",
    },
    caseStudiesPage: {
      eyebrow: "Casos de Éxito",
      heroTitleLine1: "Iniciativas reales.",
      heroTitleLine2: "Resultados medibles.",
      heroSubtitle:
        "Transformación bancaria, estrategia de ecosistema de pagos, innovación en CBDC y programas de excelencia operativa — todo en entornos complejos y regulados.",
      featured: "Destacados",
      additional: "Casos de Éxito Adicionales",
    },
    insightDetail: {
      allInsights: "Todas las Perspectivas",
      readSuffix: "de lectura",
      authorTitle: "Advisor en Producto, Innovación, Pagos y Transformación",
    },
    insightsPage: {
      eyebrow: "Perspectivas y Reflexiones",
      heroTitle: "Perspectivas que inspiran mejores decisiones.",
      heroSubtitle:
        "Reflexiones sobre pagos, banca, activos digitales, IA y transformación — para líderes que navegan decisiones de alto impacto en entornos complejos.",
      categories: ["Todas", "Pagos y Banca", "IA e Innovación", "Activos Digitales", "Transformación", "Estrategia de Producto"],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos de tu reto.",
      subtitle:
        "Ya sea que estés explorando una nueva dirección de producto, evaluando oportunidades de IA, o navegando una transformación compleja — me encantaría saber de ti.",
      quickestWays: "Formas Más Rápidas de Contactarme",
      bookCallTitle: "Reserva una Llamada de Descubrimiento de 30 Minutos",
      bookCallSubtitle: "vía Calendly · Gratis · Sin compromiso",
      connectLinkedin: "Conectar en LinkedIn",
      whatToExpect: "Qué Esperar",
      expectBody:
        "Normalmente respondo en 24–48 horas. Para asuntos urgentes, reservar un hueco en Calendly es la vía más rápida para hablar.",
      orSendMessage: "O envía un mensaje directamente",
      namePlaceholder: "Nombre",
      emailPlaceholder: "Email",
      companyPlaceholder: "Empresa (opcional)",
      messagePlaceholder: "¿En qué reto estás trabajando?",
      sending: "Enviando…",
      sent: "¡Mensaje enviado!",
      send: "Enviar mensaje",
      error: "Algo salió mal. Por favor, escribe directamente a",
      directly: "",
    },
    privacy: {
      title: "Política de Privacidad",
      paragraphs: [
        "Este sitio web recopila únicamente la información que proporcionas voluntariamente a través del formulario de contacto. Esa información se utiliza exclusivamente para responder a tu consulta y nunca se vende ni se comparte con terceros.",
        "Este sitio utiliza Vercel Analytics para obtener analítica de tráfico agregada y respetuosa con la privacidad. El sistema de analítica no recopila información personal identificable.",
      ],
      contactPrefix: "Para cualquier consulta sobre el tratamiento de datos, escribe a",
    },
    terms: {
      title: "Términos de Uso",
      paragraphs: [
        "El contenido de este sitio web se ofrece únicamente con fines informativos. Todos los datos de los casos de éxito representan resultados históricos que pueden no ser indicativos de resultados futuros.",
        "Todo el contenido escrito, los marcos de trabajo y las metodologías descritas en este sitio son propiedad intelectual de Martin Fernando Mora. Queda prohibida su reproducción sin permiso explícito por escrito.",
      ],
      contactPrefix: "Para consultas sobre licencias o permisos, escribe a",
    },
    notFound: {
      eyebrow: "404",
      title: "Página no encontrada.",
      body: "Esta página no existe, pero el sitio principal tiene lo que buscas.",
      cta: "Volver al inicio",
    },
  },
} as const;

export type Translations = typeof translations;
export type Dict = Translations[Lang];
