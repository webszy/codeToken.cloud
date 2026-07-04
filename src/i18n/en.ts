export const en = {
  meta: {
    title: "CodeToken Cloud - OpenAI, Codex and Claude API Gateway",
    description:
      "CodeToken Cloud is an OpenAI-compatible AI API gateway for developers, Codex workflows, Claude integrations, agents, automation tools, and multi-model AI applications.",
    keywords: [
      "OpenAI API Gateway",
      "Codex API Gateway",
      "Claude API Proxy",
      "OpenAI Compatible API",
      "AI API Gateway",
      "LLM API Gateway",
      "AI API Proxy",
      "Multi Model AI API",
      "AI Token Gateway",
      "Developer AI Tools",
      "CodeToken Cloud"
    ],
    canonical: "https://codetoken.cloud",
    ogTitle: "CodeToken Cloud - Codex and Claude API Gateway",
    ogDescription:
      "Connect Claude, Codex workflows, and other AI models through one unified OpenAI-compatible API gateway.",
    twitterTitle: "CodeToken Cloud - AI API Gateway for Codex and Claude",
    twitterDescription:
      "A unified AI API gateway for developers building with Codex, Claude, agents, and automation workflows.",
    locale: "en_US"
  },
  brand: {
    name: "CodeToken.Cloud"
  },
  nav: {
    features: "Home",
    radar: "Radar",
    docs: "Docs",
    pricing: "Pricing",
    status: "Status",
    blog: "Blog",
    getApiAccess: "Get API Access",
    dashboard: "DashBoard"
  },
  controls: {
    language: "EN",
    theme: "Dark"
  },
  hero: {
    badge: "AI API Gateway for Developers,more easily to use Codex/Claude",
    title: "One Gateway for Codex/Claude and more tools",
    description:
      "CodeToken Cloud is an OpenAI-compatible AI API gateway for developers building with OpenAI, Codex workflows, Claude integrations, agents, automation scripts, and multi-model AI applications.",
    primaryCta: "Start Building",
    secondaryCta: "View API Docs",
    graphicStatus: "ACTIVE"
  },
  endpoint: {
    label: "JUST ONE ENDPOINT",
    method: "Base_Url",
    url: "https://api.codetoken.cloud",
    authMessage: "Copy YOUR_API_KEY to login Codex or Claude Code and more\""
  },
  pricing: {
    badge: "Pricing",
    title: "Pay as You Go Pricing",
    description:
      "Recharge credits and use them across OpenAI, Codex, Claude, and multi-model AI workflows. No monthly subscription required.",
    table: {
      model: "Model",
      officialInput: "Official Input",
      cachedInput: "Cached Input",
      officialOutput: "Official Output",
      avgOfficial: "Avg Official",
      codeToken: "CodeToken",
      perMillionTokens: "/1M tokens"
    },
    assumptions: {
      title: "Assumptions",
      rows: [
        { label: "Input", value: "80%" },
        { label: "Output", value: "20%" },
        { label: "Cache Hit", value: "90%" },
        { label: "Multiplier", value: "0.15x" }
      ],
      formula: "Avg Official = (Input * % + Output * %) | CodeToken = Avg Official * Multiplier (adjusted for cache)"
    },
    calculator: {
      title: "Model Comparison",
      description: "See how much more token capacity you get with CodeToken.",
      rechargeLabel: "Recharge Amount",
      rechargeAriaLabel: "Recharge amount in US dollars",
      calculate: "Calculate",
      officialApi: "Official API",
      codeToken: "CodeToken",
      savings: "Savings",
      rechargeSummaryLabel: "Recharge Amount",
      moreCapacitySuffix: "x More Capacity",
      saveAbout: "Save about 85%",
      footnote: "* Based on 80% input, 20% output, 90% input cache hit rate, and CodeToken pricing at 0.15x official pricing."
    }
  },
  radar: {
    badge: "Radar",
    title: "AI Coding Radar",
    description: "Compare coding model quality, pass rate, latency, token usage, and cache efficiency in one operational view.",
    tabs: {
      codex: "Codex",
      claude: "Claude"
    },
    thanksPrefix: "thanks",
    tableAriaLabel: "Multi-model metrics",
    table: {
      model: "Model",
      iq: "IQ",
      pass: "Pass",
      cost: "Cost",
      costUnit: "(/ 1K tokens)",
      time: "Time",
      timeUnit: "(s)",
      tokens: "Tokens",
      tokensUnit: "(/ req)",
      cacheHit: "Cache Hit",
      cacheHitUnit: "(%)"
    },
    runtime: {
      lastUpdatedPrefix: "LAST UPDATED · ",
      notAvailable: "N/A",
      unknown: "Unknown"
    }
  },
  status: {
    badge: "Status",
    title: "Live Status",
    description: "Real-time gateway load, usage, and performance snapshot",
    samplePointsLabel: "Status sample points",
    cards: {
      serverLoad: "Server Load",
      requests: "Requests",
      tokens: "tokens",
      successRate: "Success Rate",
      avgQps: "Avg QPS",
      avgTps: "Avg TPS",
      ttft: "TTFT",
      upstream: "Upstream"
    },
    runtime: {
      notAvailable: "N/A",
      lastUpdatedUnavailable: "Last updated unavailable",
      lastUpdatedPrefix: "Last updated",
      dataWindowLive: "Data window: Live",
      cpu: "CPU",
      mem: "MEM",
      load: "Load",
      requestCountTotal: "request_count_total",
      today: "Today",
      error: "Error",
      reqPerSecondLiveAverage: "req/s · live average",
      tokensPerSecondLiveAverage: "tok/s · live average",
      avgFirstResponse: "avg first response",
      healthy: "Healthy",
      degraded: "Degraded",
      healthScore: "health score"
    }
  },
  footer: {
    copyright: "© 2026 CodeToken Cloud, Inc. All rights reserved.",
    contact: "Contact",
    contactEmail: "admin@codetoken.cloud"
  }
};
