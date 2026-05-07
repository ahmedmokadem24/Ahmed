import {
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  ChartNoAxesCombined,
  CheckCircle2,
  Clapperboard,
  Globe2,
  Layers3,
  Mail,
  Megaphone,
  MessageCircle,
  Monitor,
  MousePointerClick,
  Phone,
  Search,
  TrendingUp,
} from "lucide-react";

const contactDetails = {
  email: "ahmedmokadem24@gmail.com",
  phone: "+201064290427",
  mailto: "mailto:ahmedmokadem24@gmail.com",
  tel: "tel:+201064290427",
  whatsapp: "https://wa.me/201064290427",
};

const formEndpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
  "https://formspree.io/f/xdabdjgo";

const brands = [
  "Centrepoint",
  "Babyshop",
  "Max Fashion",
  "Splash",
  "Emaar",
  "Delicut",
  "Citron",
  "Sonos",
  "Circle Kuwait",
  "The Mob Collective",
];

const services = [
  {
    title: "Performance Marketing",
    copy: "Full-funnel paid media across Google, Meta, TikTok, Snapchat, Microsoft Ads, Amazon Ads, Noon Ads, and more - built to improve ROAS, reduce CPA, and scale acquisition.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Growth Marketing",
    copy: "Growth systems across acquisition, retention, WhatsApp, email, landing pages, offers, CRO, and lifecycle messaging to increase revenue beyond ads.",
    icon: Layers3,
  },
  {
    title: "Social Media Management",
    copy: "Content planning, publishing, community direction, and brand presence designed to make every channel feel intentional and commercially useful.",
    icon: Megaphone,
  },
  {
    title: "Viral Video Production",
    copy: "Short-form hooks, scripts, UGC-style concepts, product storytelling, and video production workflows built for paid and organic distribution.",
    icon: Clapperboard,
  },
  {
    title: "AI Image & Video Creation",
    copy: "AI-powered product visuals, campaign assets, ad variations, image concepts, motion ideas, and creative testing systems for faster content production.",
    icon: BrainCircuit,
  },
  {
    title: "Website Design & Optimization",
    copy: "Top-tier websites for brands selling products or services, built with SEO foundations, conversion-focused structure, premium design, strong landing pages, and clear user journeys.",
    icon: Monitor,
  },
];

const auditPackages = [
  "Free Discovery Call - 20 minutes to understand the brand and goals.",
  "Paid Growth Audit - detailed account, website, creative, tracking, and funnel review.",
  "Audit fee can be credited back if the client continues with monthly management.",
];

const caseStudies = [
  {
    title: "Centrepoint - AI-Driven Demand Generation",
    copy: "Centrepoint used Demand Gen campaigns powered by Google AI to increase high-quality traffic, improve engagement, and drive stronger brand consideration across key retail categories.",
    results: [
      "17% higher CTR compared to social platforms",
      "32% increase in new website sessions",
    ],
    links: [
      "https://www.facebook.com/business/success/4-centrepoint",
      "https://www.facebook.com/business/success/3-centrepoint",
    ],
  },
  {
    title: "Sonos UAE - From Market Launch To 1M+ AED Monthly Revenue",
    copy: "Launched Sonos in the UAE from the beginning and helped scale the brand to 1M+ AED monthly revenue through performance marketing, eCommerce growth campaigns, creative testing, and full-funnel optimization.",
    results: ["Market launch", "1M+ AED monthly revenue"],
  },
  {
    title: "Circle Kuwait - From Scratch To #1 Delivery App",
    copy: "Worked on Circle Kuwait from scratch, contributing to its growth into one of Kuwait's leading delivery apps and helping it rank #1 through full-funnel acquisition and growth marketing.",
    results: ["Built from scratch", "#1 delivery app ranking"],
  },
  {
    title: "Regional Retail & Lifestyle Growth",
    copy: "Worked across major GCC brands including Babyshop, Max Fashion, Splash, Emaar, Delicut, Citron, and The Mob Collective, supporting acquisition, retargeting, eCommerce growth, app campaigns, creative testing, and performance optimization.",
    results: ["Retail and lifestyle scale", "Acquisition and retargeting systems"],
  },
];

const scaleMetrics = [
  {
    title: "Centrepoint KSA",
    period: "November 2025",
    spend: "$392,512.77",
    revenue: "$5,578,504.19",
    purchases: "108,908",
    roas: "14.21",
    impressions: "184,164,762",
    clicks: "2,825,652",
  },
  {
    title: "Centrepoint UAE",
    period: "November 2025",
    spend: "$113,224.29",
    revenue: "$2,265,134.83",
    purchases: "54,082",
    roas: "20.01",
    impressions: "33,619,199",
    clicks: "913,466",
  },
  {
    title: "Centrepoint KSA",
    period: "October 2025",
    spend: "$431,810.71",
    revenue: "$4,295,244.75",
    purchases: "86,273",
    roas: "9.95",
    impressions: "179,869,049",
    clicks: "2,531,236",
  },
  {
    title: "Centrepoint KSA",
    period: "December 2025",
    spend: "$164,500.89",
    revenue: "$3,635,484.43",
    purchases: "80,778",
    roas: "22.10",
    impressions: "50,171,137",
    clicks: "2,049,643",
  },
];

const campaignExamples = [
  ["$47,574.08", "$516,521.07", "9,338", "10.86"],
  ["$14,631.02", "$514,505.02", "3,947", "35.17"],
  ["$2,631.61", "$104,084.75", "2,247", "39.55"],
  ["$2,629.54", "$92,737.94", "1,894", "35.27"],
  ["$148.13", "$8,815.06", "197", "59.51"],
  ["$568.26", "$33,513.17", "851", "58.98"],
];

const serviceOptions = [
  "Performance Marketing",
  "Growth Marketing",
  "Social Media Management",
  "Viral Video Production",
  "AI Image & Video Creation",
  "Website Design & Optimization",
  "Growth Audit",
  "Full Growth Partnership",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-porcelain">
      <div className="noise" />
      <Header />
      <Hero />
      <BrandProof />
      <OperatorCredibility />
      <Services />
      <GrowthAudit />
      <ResultsSections />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between">
        <a className="text-sm font-semibold tracking-[0.22em]" href="#top">
          RAYQ Marketing Agency
        </a>
        <nav className="hidden items-center gap-7 text-sm text-platinum/75 md:flex">
          <a className="transition hover:text-porcelain" href="#services">
            Services
          </a>
          <a className="transition hover:text-porcelain" href="#proof">
            Proof
          </a>
          <a className="transition hover:text-porcelain" href="#audit">
            Audit
          </a>
          <a className="transition hover:text-porcelain" href="#contact">
            Contact
          </a>
        </nav>
        <a className="button-primary hidden px-4 py-2.5 md:inline-flex" href="#contact">
          Book A Call
          <ArrowUpRight size={16} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-36 sm:pt-40 lg:pt-48">
      <div className="absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-white/10 opacity-60 blur-3xl" />
      <div className="section-shell relative">
        <div className="grid items-end gap-14 lg:grid-cols-[1.05fr_0.75fr]">
          <div className="animate-fade-up">
            <p className="eyebrow">Premium GCC growth operator</p>
            <h1 className="mt-6 max-w-6xl text-5xl font-semibold leading-[0.96] tracking-normal text-porcelain sm:text-6xl lg:text-7xl xl:text-8xl">
              Scaling GCC Brands With Performance Marketing, Viral Creative, AI
              Content, And Conversion-Focused Websites
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-platinum/78 sm:text-xl">
              A growth partner for retail, fashion, lifestyle, app, eCommerce,
              and consumer brands - combining paid media, creative testing,
              website optimization, SEO foundations, WhatsApp/email growth
              systems, and AI-powered content production.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="button-primary" href="#contact">
                Book A Strategy Call
                <ArrowUpRight size={18} />
              </a>
              <a className="button-secondary" href="#case-studies">
                View Case Studies
              </a>
              <a
                className="button-secondary"
                href={contactDetails.whatsapp}
                rel="noreferrer"
                target="_blank"
              >
                Message On WhatsApp
                <MessageCircle size={18} />
              </a>
            </div>
            <div className="mt-6 flex flex-col gap-3 text-sm text-platinum/68 sm:flex-row sm:flex-wrap">
              <a
                className="inline-flex items-center gap-2 transition hover:text-porcelain"
                href={contactDetails.mailto}
              >
                <Mail size={16} />
                {contactDetails.email}
              </a>
              <a
                className="inline-flex items-center gap-2 transition hover:text-porcelain"
                href={contactDetails.tel}
              >
                <Phone size={16} />
                {contactDetails.phone}
              </a>
            </div>
          </div>

          <DashboardMockup />
        </div>
      </div>
      <Marquee />
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="animate-fade-in border border-white/10 bg-white/[0.035] p-4 shadow-glow backdrop-blur">
      <div className="rounded-t-sm border border-white/10 bg-graphite/80 p-3">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ember" />
          <span className="h-2.5 w-2.5 rounded-full bg-platinum/35" />
          <span className="h-2.5 w-2.5 rounded-full bg-mint/60" />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["ROAS", "22.10"],
            ["Revenue", "$3.6M"],
            ["Purchases", "80.7K"],
          ].map(([label, value]) => (
            <div className="border border-white/10 bg-ink/70 p-3" key={label}>
              <p className="text-xs uppercase tracking-[0.2em] text-platinum/45">
                {label}
              </p>
              <p className="mt-2 text-2xl font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-x border-b border-white/10 bg-ink p-5">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-sm text-platinum/60">Campaign Intelligence</span>
          <TrendingUp className="text-mint" size={20} />
        </div>
        <div className="space-y-3">
          {[86, 64, 78, 52, 91].map((width, index) => (
            <div className="h-3 bg-white/[0.06]" key={width}>
              <div
                className="h-full bg-porcelain"
                style={{ width: `${width - index * 4}%` }}
              />
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-sm text-2xl font-semibold leading-tight">
          Six-figure media budgets. Creative testing systems. Conversion paths
          built for revenue.
        </p>
      </div>
    </div>
  );
}

function Marquee() {
  const items = [
    "Google Ads",
    "Meta",
    "TikTok",
    "Snapchat",
    "Noon Ads",
    "Amazon Ads",
    "SEO Websites",
    "WhatsApp Growth",
  ];

  return (
    <div className="mt-20 overflow-hidden border-y border-white/10 py-4">
      <div className="flex w-max animate-marquee gap-8 text-sm uppercase tracking-[0.25em] text-platinum/55">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function BrandProof() {
  return (
    <section id="brands" className="border-b border-white/10 py-16">
      <div className="section-shell">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Brand Experience</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Brands I&apos;ve Worked With
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-platinum/60">
            Some work was completed while operating within previous agency or
            brand-side roles.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((brand) => (
            <div
              className="flex min-h-24 items-center justify-center bg-ink px-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-platinum/75 transition duration-300 hover:bg-graphite hover:text-porcelain"
              key={brand}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OperatorCredibility() {
  return (
    <section className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Operator Credibility</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
              Built By A GCC Performance Marketer Behind Regional Brand Growth
            </h2>
          </div>
          <div className="space-y-7">
            <p className="text-lg leading-8 text-platinum/72">
              Led and contributed to growth campaigns across GCC and European
              markets, managing six-figure monthly budgets across Google, Meta,
              TikTok, Snapchat, Microsoft Ads, Amazon Ads, Noon Ads, and retail
              media platforms. Experience spans retail, fashion, apps,
              eCommerce, delivery, food, consumer tech, and lifestyle brands.
            </p>
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
              {[
                ["6+ Years", "GCC and European markets"],
                ["Six-Figure", "Monthly media budgets"],
                ["Full-Funnel", "Paid, creative, CRO, retention"],
              ].map(([value, label]) => (
                <div className="bg-ink p-5" key={value}>
                  <p className="text-3xl font-semibold">{value}</p>
                  <p className="mt-2 text-sm text-platinum/58">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-y border-white/10 bg-white/[0.025] py-24 sm:py-32">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
            Premium growth execution across media, creative, websites, and
            retention.
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                className="group min-h-80 bg-ink p-7 transition duration-300 hover:bg-graphite"
                key={service.title}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-10 inline-flex h-11 w-11 items-center justify-center border border-white/12 bg-white/[0.04] text-porcelain transition duration-300 group-hover:border-ember/40 group-hover:text-ember">
                      <Icon size={21} />
                    </div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-4 leading-7 text-platinum/68">{service.copy}</p>
                  </div>
                  <ArrowUpRight
                    className="mt-8 text-platinum/45 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-porcelain"
                    size={22}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GrowthAudit() {
  return (
    <section id="audit" className="py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <p className="eyebrow">Growth Audit</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
              Growth Audit & Account Review
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-platinum/72">
              Before scaling, we identify what is missing. The audit reviews
              your ad accounts, tracking setup, website, landing pages, creative
              strategy, funnel, SEO basics, WhatsApp/email flows, and reporting
              structure. You receive a clear action plan with what to fix, what
              to test, and what to scale.
            </p>
            <div className="mt-8 grid gap-3">
              {auditPackages.map((item) => (
                <div
                  className="flex gap-4 border border-white/10 bg-white/[0.035] p-5"
                  key={item}
                >
                  <CheckCircle2 className="mt-1 shrink-0 text-mint" size={20} />
                  <p className="leading-7 text-platinum/72">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultsSections() {
  return (
    <section id="proof" className="bg-porcelain py-24 text-ink sm:py-32">
      <div className="section-shell">
        <CaseStudies />
        <PerformanceAtScale />
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <div id="case-studies" className="mt-16">
      <div className="mb-7 flex items-center gap-3">
        <BadgeCheck className="text-ember" size={22} />
        <h3 className="text-3xl font-semibold">Case Studies</h3>
      </div>
      <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 lg:grid-cols-2">
        {caseStudies.map((study, index) => (
          <article className="bg-porcelain p-7 transition duration-300 hover:bg-white" key={study.title}>
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/45">
                {String(index + 1).padStart(2, "0")}
              </span>
              <ArrowUpRight size={20} />
            </div>
            <h4 className="text-2xl font-semibold leading-tight">{study.title}</h4>
            <p className="mt-4 leading-7 text-ink/62">{study.copy}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {study.results.map((result) => (
                <span
                  className="border border-ink/10 bg-ink/[0.03] px-3 py-2 text-sm font-semibold"
                  key={result}
                >
                  {result}
                </span>
              ))}
            </div>
            {study.links ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {study.links.map((link, linkIndex) => (
                  <a
                    className="inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
                    href={link}
                    key={link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Source {linkIndex + 1}
                    <ArrowUpRight size={15} />
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
      <p className="mt-5 text-sm leading-6 text-ink/54">
        Some work was completed while operating within previous agency or
        brand-side roles.
      </p>
    </div>
  );
}

function PerformanceAtScale() {
  return (
    <div id="performance" className="mt-20">
      <div className="mb-7 flex items-center gap-3">
        <TrendingUp className="text-ember" size={22} />
        <h3 className="text-3xl font-semibold">Performance At Scale</h3>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {scaleMetrics.map((metric) => (
          <article
            className="border border-ink/10 bg-white p-5 shadow-[0_20px_60px_rgba(5,5,6,0.08)]"
            key={`${metric.title}-${metric.period}`}
          >
            <div className="mb-5 rounded-t-sm border border-ink/10 bg-ink p-3 text-porcelain">
              <div className="mb-3 flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-ember" />
                <span className="h-2 w-2 rounded-full bg-platinum/35" />
                <span className="h-2 w-2 rounded-full bg-mint" />
              </div>
              <div className="grid grid-cols-4 items-end gap-2">
                {[58, 92, 74, 100].map((height) => (
                  <div className="flex h-24 items-end bg-white/[0.06]" key={height}>
                    <div className="w-full bg-porcelain" style={{ height: `${height}%` }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">
                  {metric.period}
                </p>
                <h4 className="mt-2 text-2xl font-semibold">{metric.title}</h4>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.2em] text-ink/45">ROAS</p>
                <p className="text-4xl font-semibold">{metric.roas}</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-3">
              <Metric label="Spend" value={metric.spend} />
              <Metric label="Revenue" value={metric.revenue} />
              <Metric label="Purchases" value={metric.purchases} />
              <Metric label="Impressions" value={metric.impressions} />
              <Metric label="Link Clicks" value={metric.clicks} />
              <Metric label="Market" value={metric.title.includes("UAE") ? "UAE" : "KSA"} />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <div className="mb-7 flex items-center gap-3">
          <MousePointerClick className="text-ember" size={22} />
          <h3 className="text-3xl font-semibold">Top Performing Campaign Examples</h3>
        </div>
        <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-2 xl:grid-cols-3">
          {campaignExamples.map(([spend, revenue, purchases, roas]) => (
            <div className="bg-porcelain p-6 transition duration-300 hover:bg-white" key={`${spend}-${revenue}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">
                Campaign Example
              </p>
              <p className="mt-4 text-4xl font-semibold">{roas} ROAS</p>
              <div className="mt-6 grid gap-3 text-sm">
                <Row label="Spend" value={spend} />
                <Row label="Revenue" value={revenue} />
                <Row label="Purchases" value={purchases} />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-6 text-ink/54">
          Selected results from previous campaigns. Performance may vary
          depending on brand, budget, market, tracking setup, seasonality, and
          execution. Some work was completed while operating within previous
          agency or brand-side roles.
        </p>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-ink/42">{label}</p>
      <p className="mt-2 text-sm font-semibold sm:text-base">{value}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-ink/10 pt-3">
      <span className="text-ink/55">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
              Ready To Find What&apos;s Holding Back Your Growth?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-platinum/70">
              Send your brand details and we&apos;ll identify the clearest next
              step - whether that&apos;s paid media, creative production,
              website optimization, tracking, retention, or a full growth
              system.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-platinum/62">
              <p className="flex items-center gap-3">
                <Search size={17} /> Account and funnel diagnosis
              </p>
              <p className="flex items-center gap-3">
                <Globe2 size={17} /> Website and SEO foundations
              </p>
              <p className="flex items-center gap-3">
                <Mail size={17} /> WhatsApp and email growth systems
              </p>
            </div>
            <div className="mt-8 grid gap-3 text-sm">
              <a
                className="button-primary w-full sm:w-fit"
                href={contactDetails.whatsapp}
                rel="noreferrer"
                target="_blank"
              >
                Message On WhatsApp
                <MessageCircle size={18} />
              </a>
              <a
                className="inline-flex items-center gap-3 text-platinum/70 transition hover:text-porcelain"
                href={contactDetails.mailto}
              >
                <Mail size={17} />
                {contactDetails.email}
              </a>
              <a
                className="inline-flex items-center gap-3 text-platinum/70 transition hover:text-porcelain"
                href={contactDetails.tel}
              >
                <Phone size={17} />
                {contactDetails.phone}
              </a>
            </div>
          </div>
          <form
            acceptCharset="UTF-8"
            action={formEndpoint}
            className="grid gap-4 border border-white/10 bg-white/[0.035] p-5 sm:p-7"
            method="POST"
          >
            <input
              name="_subject"
              type="hidden"
              value="New strategy call request from website"
            />
            <input name="_to" type="hidden" value={contactDetails.email} />
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="field" name="name" placeholder="Name" required type="text" />
              <input
                className="field"
                name="email"
                placeholder="Email"
                required
                type="email"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="field"
                name="phone"
                placeholder="Phone / WhatsApp"
                type="tel"
              />
              <input className="field" name="brand" placeholder="Brand Name" type="text" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="field" name="website" placeholder="Website" type="url" />
              <input
  className="field"
  name="budget"
  placeholder="Monthly Budget / Currency"
  type="text"
/>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <select className="field" defaultValue="" name="service">
                <option disabled value="">
                  Service Needed
                </option>
                {serviceOptions.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </div>
            <input
              className="field"
              name="challenge"
              placeholder="Current Challenge"
              type="text"
            />
            <textarea
  className="field min-h-40 resize-none"
  name="message"
  placeholder="Write your comments, goals, or current challenges"
/>
            <button className="button-primary mt-2 w-full sm:w-fit" type="submit">
              Book A Strategy Call
              <ArrowUpRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const footerServices = [
    "Performance Marketing",
    "Growth Marketing",
    "Website Design",
    "AI Creative",
    "Viral Videos",
    "Growth Audit",
  ];

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell grid gap-8 text-sm text-platinum/65 md:grid-cols-[1fr_1fr_0.7fr]">
        <div>
          <p className="font-semibold tracking-[0.22em] text-porcelain">
            RAYQ Marketing Agency
          </p>
          <p className="mt-4 max-w-sm leading-6">
            Premium GCC performance marketing, growth, creative, and website
            optimization partner.
          </p>
        </div>
        <div>
          <p className="mb-4 text-porcelain">Services</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {footerServices.map((service) => (
              <a className="transition hover:text-porcelain" href="#services" key={service}>
                {service}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-porcelain">Contact</p>
          <div className="grid gap-2">
            <a className="transition hover:text-porcelain" href="#contact">
              Contact
            </a>
            <a className="transition hover:text-porcelain" href={contactDetails.mailto}>
              {contactDetails.email}
            </a>
            <a className="transition hover:text-porcelain" href={contactDetails.tel}>
              {contactDetails.phone}
            </a>
            <a
              className="transition hover:text-porcelain"
              href={contactDetails.whatsapp}
              rel="noreferrer"
              target="_blank"
            >
              Message On WhatsApp
            </a>
            <a className="transition hover:text-porcelain" href="#">
              LinkedIn
            </a>
            <a className="transition hover:text-porcelain" href="#">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
