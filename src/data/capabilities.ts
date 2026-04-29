export interface CaseTile {
  title: string;
  tags: string[];
}

export interface CapabilityHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface Capability {
  title: string;
  slug: string;
  summary: string;
  description: string;
  includes: string[];
  cases: CaseTile[];
  highlights?: CapabilityHighlight[];
}

export const capabilities: Capability[] = [
  {
    title: "Corporate Strategy & Strategic Planning",
    slug: "corporate-strategy-planning",
    summary: "Sharpening the choices that define a company's direction: where to compete, how to grow, and what to prioritize.",
    description: "We work with leadership teams to define and pressure-test strategic direction, from corporate vision and portfolio logic to annual planning cycles, strategic initiative prioritization, and multi-year roadmaps.",
    includes: [
      "Corporate vision and strategic direction setting",
      "Strategic initiative identification and prioritization",
      "Portfolio logic and resource allocation",
      "Multi-year strategic roadmap development",
      "Annual planning process design and facilitation",
    ],
    cases: [
      { title: "We prioritized strategic initiatives for an incoming pharma CEO, scoring by revenue and profitability impact with a PMO framework for execution", tags: ["Life Sciences", "Pharma", "Corporate Strategy"] },
      { title: "We built a multi-year regional strategy for a CPG player following a competitive intelligence deep-dive across LatAm", tags: ["Consumer Goods", "Corporate Strategy"] },
      { title: "We defined a portfolio-of-bets framework to align leadership on strategic priorities across business units", tags: ["Other Industries", "Corporate Strategy"] },
    ],
  },
  {
    title: "Insights & Complex Research (B2B + B2C)",
    slug: "insights-complex-research",
    summary: "Decision-grade research in opaque markets: B2C, B2B, and multi-stakeholder ecosystems.",
    description: "Full-spectrum primary research across qualitative and quantitative methods, from hard-to-reach expert interviews to large-scale surveys and validation studies. Designed for complex B2B and B2C contexts where standard approaches fall short.",
    includes: [
      "In-depth interviews (IDIs): expert, consumer, and B2B stakeholder",
      "Focus groups: exploratory and concept-stage qualitative research",
      "Hybrid methodologies: combining qual and quant for richer signal",
      "Quantitative surveys: at scale, with statistical rigor",
      "Message testing and optimization",
      "Concept testing and refinement",
      "Pricing and willingness-to-pay studies",
      "Synthetic personas: AI-generated profiles to simulate consumer and stakeholder responses at scale",
    ],
    cases: [
      { title: "We ran 100+ stakeholder interviews to define success factors for a pharma growth agenda", tags: ["Life Sciences", "Pharma", "Research"] },
      { title: "We delivered multi-market consumer insights to redesign an OTC portfolio across Europe", tags: ["Life Sciences", "Pharma (OTC)", "Research"] },
      { title: "We generated decision-grade category insights to support innovation and growth choices", tags: ["Consumer Goods", "Insights", "Research"] },
    ],
  },
  {
    title: "Competitive & Market Intelligence",
    slug: "competitive-market-intelligence",
    summary: "Competitor strategies, benchmarks, scenarios, and signal detection to de-risk bets.",
    description: "Competitor strategies, benchmarks, scenarios, and signal detection to sharpen choices and de-risk bets.",
    includes: [
      "Competitor profiling and benchmarking",
      "Market landscape and scenario mapping",
      "Signal detection and early-warning systems",
      "Strategic implications and recommendation framing",
    ],
    cases: [
      { title: "We delivered a competitor intelligence deep-dive across five markets for a global beverages player", tags: ["Consumer Goods", "Competitive Intelligence"] },
      { title: "We mapped competitive dynamics to support a medtech strategy and growth plan", tags: ["Life Sciences", "MedTech", "Competitive Intelligence"] },
      { title: "We built a market intelligence view to sharpen strategic choices in a complex ecosystem", tags: ["Other Industries", "Market Intelligence"] },
    ],
  },
  {
    title: "Growth & Go-to-Market Strategy",
    slug: "growth-go-to-market",
    summary: "Where-to-play/how-to-win, segmentation, channels, and commercialization narratives.",
    description: "Where-to-play/how-to-win, segmentation, channel strategy, commercialization choices, and leadership-ready narratives.",
    includes: [
      "Where-to-play / how-to-win frameworks",
      "Segmentation and targeting",
      "Channel and commercialization strategy",
      "Leadership-ready narrative development",
    ],
    cases: [
      { title: "We identified adjacent growth plays in ICU to expand a medical devices portfolio", tags: ["Life Sciences", "MedTech", "Growth/GTM"] },
      { title: "We supported the go/no-go and launch planning for a high-cost biosimilar", tags: ["Life Sciences", "Pharma", "Launch/GTM"] },
      { title: "We defined a scalable go-to-market model for a disruptive deep-tech venture", tags: ["Other Industries", "Growth/GTM"] },
    ],
  },
  {
    title: "Foresights",
    slug: "innovation-strategy-foresight",
    summary: "Turning weak signals and macro forces into opportunity spaces, innovation territories, and strategic roadmaps.",
    description: "Foresights engagements translate signals, macro forces, behavior shifts, and trend convergence into structured outputs that serve different needs and stakeholders. A typical engagement covers some or all of these deliverables, scoped to your use case and the decisions that need to be made.",
    includes: [
      "Opportunity Areas: explore where to play based on consumer needs, tech trends, and business shifts (Innovation, Strategy, R&D)",
      "Innovation Territories: focus ideation and development within defined strategic zones (Innovation, Brand, R&D)",
      "Future Scenarios: stress-test strategy and align leadership around plausible futures (Exec Team, Strategy, Corporate Dev)",
      "Strategic Roadmap: turn foresight into business decisions with timing, milestones, and ownership (Exec Team, Strategy, Portfolio Leaders)",
      "Technology Roadmap: align R&D and investment around technical capabilities needed over time (R&D, Product, Open Innovation)",
      "Prioritization Framework: choose which bets to make by scoring options against scenarios, risks, and potential (Strategy, Ventures, Innovation Leaders)",
      "Platform Concepts: bring future opportunities to life through tangible ideas that can be tested or socialized (Marketing, Insights, Innovation Leads)",
    ],
    cases: [
      { title: "We identified a breakthrough ingredient platform for a global beverage leader", tags: ["Consumer Goods", "Innovation"] },
      { title: "We shaped an innovation thesis and value-creation plan for a flavors acquisition", tags: ["Consumer Goods", "Innovation", "Deals"] },
      { title: "We developed a forward-looking category view to inform strategic innovation bets", tags: ["Consumer Goods", "Foresight"] },
    ],
  },
  {
    title: "Business Development, M&A & Deal Support",
    slug: "business-development-deal-support",
    summary: "From target screening and deal strategy to M&A diligence, structuring support, and post-merger integration.",
    description: "End-to-end support across the deal lifecycle, from opportunity identification and business development strategy through due diligence, deal structuring, and post-merger integration.",
    includes: [
      "Business development and deal strategy",
      "Target screening and shortlisting",
      "M&A support and due diligence",
      "Deal structuring support",
      "Deal narrative and internal alignment",
      "Integration planning",
      "Post-merger integration (PMI)",
    ],
    cases: [
      { title: "We delivered strategic diligence and a takeover plan for a flavors acquisition in LatAm", tags: ["Consumer Goods", "Deals/BD"] },
      { title: "We shaped the integration roadmap for a merger creating a regional pharma leader", tags: ["Life Sciences", "Pharma", "Integration"] },
      { title: "We supported deal evaluation with market intelligence in an opaque ecosystem", tags: ["Other Industries", "Deals/BD"] },
    ],
  },
  {
    title: "Workshops & Immersive Experiences",
    slug: "workshops-immersive-experiences",
    summary: "Executive experiences, war games, AI simulations, and alignment sprints built for high-stakes decisions.",
    description: "We design and run premium, bespoke experiences, from strategic war games and negotiation simulations to AI-powered stakeholder simulations and immersive executive offsites. Each engagement is built from scratch for the specific decision, team, and context.",
    highlights: [
      {
        icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 14c0-3.31 2.69-6 6-6h14c3.31 0 6 2.69 6 6v2c0 1.1-.9 2-2 2h-1.5c-.83 0-1.5-.67-1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-9c-.83 0-1.5.67-1.5 1.5v1c0 .83-.67 1.5-1.5 1.5H5c-1.1 0-2-.9-2-2v-2z" stroke="currentColor" strokeWidth="1.7" fill="none"/><circle cx="10.5" cy="15" r="2" fill="currentColor" opacity="0.6"/><circle cx="21.5" cy="15" r="2" fill="currentColor" opacity="0.6"/><path d="M3 15H1M31 15h-2M16 8V5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>`,
        title: "War Gaming & Negotiation Simulations",
        description: "Custom multi-day simulations: competitive war games, negotiation scenarios, and adversarial strategy sessions built around your specific market situation.",
      },
      {
        icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.6" fill="none"/><circle cx="16" cy="5" r="2" stroke="currentColor" strokeWidth="1.4" fill="none"/><circle cx="16" cy="27" r="2" stroke="currentColor" strokeWidth="1.4" fill="none"/><circle cx="5" cy="16" r="2" stroke="currentColor" strokeWidth="1.4" fill="none"/><circle cx="27" cy="16" r="2" stroke="currentColor" strokeWidth="1.4" fill="none"/><circle cx="8" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" opacity="0.7"/><circle cx="24" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" opacity="0.7"/><circle cx="8" cy="24" r="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" opacity="0.7"/><circle cx="24" cy="24" r="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" opacity="0.7"/><path d="M16 7v6M16 19v6M7 16h6M19 16h6M9.4 9.4l4.2 4.2M18.4 18.4l4.2 4.2M22.6 9.4l-4.2 4.2M13.6 18.4l-4.2 4.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/></svg>`,
        title: "AI Stakeholder Simulation",
        description: "AI-powered replicas of specific stakeholders, trained on transcripts, documents, and behavioral data. Teams practice high-stakes interactions before they happen.",
      },
      {
        icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4l12 7v10L16 28 4 21V11L16 4z" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinejoin="round"/><path d="M16 4v24M4 11l12 7 12-7" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" opacity="0.5"/><circle cx="16" cy="18" r="2.5" fill="currentColor" opacity="0.4"/></svg>`,
        title: "Immersive Executive Experiences",
        description: "Premium multi-day programs for leadership teams, combining strategic content, facilitation, and experiential design for decisions that require real alignment.",
      },
      {
        icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="9" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" fill="none"/><path d="M11 9V7a5 5 0 0110 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/><circle cx="16" cy="16" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M16 13.5v-2M16 20.5v-2M13.5 16h-2M20.5 16h-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6"/></svg>`,
        title: "Custom AI for Specific Scenarios",
        description: "Bespoke AI tools built for a single engagement, from AI-powered decision simulations to real-time synthesis engines that enhance the room.",
      },
    ],
    includes: [
      "Executive offsite design and facilitation",
      "Cross-functional alignment sessions",
      "Sprint workshops for rapid decision-making",
      "War gaming and competitive simulations",
      "AI stakeholder simulation and role-play",
      "Custom AI tools for specific engagement scenarios",
      "Decision rooms and leadership alignment sprints",
    ],
    cases: [
      { title: "We ran cross-functional decision workshops to redesign an OTC portfolio strategy", tags: ["Life Sciences", "Pharma (OTC)", "Workshops"] },
      { title: "We facilitated an executive offsite to align on a new operating direction", tags: ["Other Industries", "Workshops"] },
      { title: "We led sprint workshops to accelerate alignment from insight to strategy", tags: ["Consumer Goods", "Workshops"] },
    ],
  },
  {
    title: "Implementation, PMO & Change",
    slug: "implementation-pmo-change",
    summary: "Governance, cadence, adoption, and change to make strategy real, including post-merger integration and complex transitions.",
    description: "Governance, workstreams, cadence, adoption, and change management to make strategy real. From program PMO to post-merger integration and complex organizational transitions.",
    includes: [
      "Governance design and workstream management",
      "Program cadence and milestone tracking",
      "Adoption planning and stakeholder alignment",
      "Change management and communication",
      "Post-merger integration (PMI)",
      "Integration planning",
      "Transfer management",
    ],
    cases: [
      { title: "We supported integration execution and governance for a pharma merger", tags: ["Life Sciences", "Pharma", "PMO/Change"] },
      { title: "We built the program cadence to translate a launch decision into execution", tags: ["Life Sciences", "Pharma", "PMO"] },
      { title: "We supported execution governance for a complex multi-workstream initiative", tags: ["Consumer Goods", "PMO/Change"] },
    ],
  },
  {
    title: "Strategic AI Integration & Optimization",
    slug: "strategic-ai-integration-optimization",
    summary: "AI-enabled workflows to accelerate synthesis, consistency, and decision-making.",
    description: "Proprietary AI-enabled processes embedded in research-to-decision workflows, accelerating synthesis, improving consistency, and upgrading how teams make decisions.",
    includes: [
      "AI-enabled research and synthesis workflows",
      "Decision-support automation",
      "Consistency and quality assurance at scale",
      "Team capability upgrade for AI-augmented work",
    ],
    cases: [
      { title: "We accelerated cross-market synthesis to support an OTC portfolio redesign", tags: ["Life Sciences", "Pharma (OTC)", "AI-enabled workflows"] },
      { title: "We built decision-grade market views in opaque ecosystems under tight timelines", tags: ["Life Sciences", "MedTech", "AI-enabled workflows"] },
      { title: "We compressed insight-to-decision cycles for innovation and growth priorities", tags: ["Consumer Goods", "AI-enabled workflows"] },
    ],
  },
];

export const industryLinks = [
  { label: "Consumer Goods", href: "/industries/cpg-food-beverage" },
  { label: "Life Sciences", href: "/industries/life-sciences" },
  { label: "Other Industries", href: "/industries/other-industries" },
];
