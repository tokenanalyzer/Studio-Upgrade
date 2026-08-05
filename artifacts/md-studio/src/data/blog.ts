export interface BlogBlock {
  type: "p" | "h2" | "h3" | "ul" | "ol" | "code" | "callout" | "divider";
  text?: string;
  items?: string[];
  lang?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  emoji: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  author: string;
  date: string;
  dateISO: string;
  readTime: string;
  tags: string[];
  content: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-production-ready-ai-agents",
    title: "Building Production-Ready AI Agents with LangChain and GPT-4",
    excerpt: "A deep-dive into architecting reliable, scalable AI agents — memory management, tool use, error handling, and deployment strategies that actually hold up in production.",
    emoji: "🤖",
    tag: "AI Development",
    tagColor: "#7C3AED",
    tagBg: "#F5F3FF",
    author: "Adil Hussain",
    date: "June 2026",
    dateISO: "2026-06-15",
    readTime: "12 min read",
    tags: ["AI", "LangChain", "GPT-4", "Python", "Production"],
    content: [
      { type: "p", text: "AI agents promise to automate complex workflows — but getting them to work reliably in production is a different story. After deploying AI agents for 20+ clients across industries like fintech, healthcare, and e-commerce, here's everything I've learned the hard way." },
      { type: "h2", text: "What Makes an AI Agent 'Production-Ready'?" },
      { type: "p", text: "A production-ready AI agent is one that handles failures gracefully, stays within token budgets, doesn't hallucinate on critical decisions, and can be monitored and debugged by a human. Most tutorial agents fail all four of these." },
      { type: "ul", items: [
        "Deterministic fallbacks — when the LLM fails, the agent has a hardcoded safe path",
        "Token budget enforcement — every chain has a max_tokens ceiling and a cost alarm",
        "Human-in-the-loop hooks — critical actions pause for approval before executing",
        "Structured logging — every LLM call, tool call, and error is traced and stored",
      ]},
      { type: "h2", text: "The Memory Problem" },
      { type: "p", text: "Naive agents dump the entire conversation history into the prompt on every call. This works for 3 messages. At 300 messages you're burning $12 per query and hitting context limits. The solution is a three-tier memory architecture:" },
      { type: "ul", items: [
        "Working memory — last 10 messages in the prompt (in-context)",
        "Episodic memory — summarised past sessions stored in a vector DB (Pinecone / pgvector)",
        "Semantic memory — a structured knowledge base the agent queries via RAG",
      ]},
      { type: "code", lang: "python", text: `from langchain.memory import ConversationSummaryBufferMemory
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-4o", temperature=0)

memory = ConversationSummaryBufferMemory(
    llm=llm,
    max_token_limit=1500,   # summarise when > 1500 tokens
    return_messages=True,
)` },
      { type: "h2", text: "Tool Design: The Single Most Common Mistake" },
      { type: "p", text: "Most developers give their agent too many tools. An agent with 40 tools performs worse than one with 6 well-scoped tools. GPT-4 picks tools by reading their names and descriptions — if descriptions are vague, it picks the wrong one. Each tool description should answer: 'When exactly should I call this, and when should I not?'" },
      { type: "callout", text: "Rule of thumb: if your agent needs more than 8 tools, you probably need multiple specialised agents with a router in front — not one mega-agent." },
      { type: "h2", text: "Error Handling That Actually Works" },
      { type: "p", text: "LLMs fail in unpredictable ways — invalid JSON output, hallucinated function names, endless loops. Build a retry wrapper with exponential backoff and a circuit breaker that switches to a simpler model after 3 failures:" },
      { type: "code", lang: "python", text: `import tenacity

@tenacity.retry(
    stop=tenacity.stop_after_attempt(3),
    wait=tenacity.wait_exponential(multiplier=1, min=2, max=10),
    retry=tenacity.retry_if_exception_type(Exception),
)
async def call_agent_with_retry(agent, inputs: dict):
    return await agent.ainvoke(inputs)` },
      { type: "h2", text: "Deployment: Docker + FastAPI" },
      { type: "p", text: "Wrap your LangChain agent in a FastAPI service with a /invoke endpoint. Use async endpoints everywhere — LLM calls are I/O bound and async gives you 10x throughput. Deploy on Fly.io or Railway for auto-scaling with zero-downtime deploys." },
      { type: "h2", text: "Monitoring in Production" },
      { type: "p", text: "Use LangSmith for tracing every LLM call. Set up alerts for: average latency > 8s, cost per session > $0.05, tool failure rate > 5%. These are the three numbers that tell you when your agent is drifting." },
      { type: "callout", text: "The agents that succeed in production aren't the smartest ones — they're the ones with the most robust guardrails." },
      { type: "p", text: "Building AI agents is now a core engineering discipline, not a research experiment. Treat reliability, cost, and observability as first-class concerns from day one, and your agents will earn user trust instead of destroying it." },
    ],
  },

  {
    slug: "modern-saas-stack-2026",
    title: "The Modern SaaS Stack: From Zero to Production in 2026",
    excerpt: "React, Next.js, Supabase, Stripe, and Vercel — the exact stack we use to build SaaS products that scale to millions of users, and why we chose each piece.",
    emoji: "☁️",
    tag: "SaaS Development",
    tagColor: "#2563EB",
    tagBg: "#EFF6FF",
    author: "Adil Hussain",
    date: "May 2026",
    dateISO: "2026-05-08",
    readTime: "9 min read",
    tags: ["SaaS", "Next.js", "Supabase", "Stripe", "Architecture"],
    content: [
      { type: "p", text: "In 2026, a solo developer or small team can build and ship a SaaS product that would have required a 20-person engineering team five years ago. The tooling has never been better. Here's the exact stack we use at MD Studio for every SaaS engagement." },
      { type: "h2", text: "Frontend: Next.js 15 + React 19" },
      { type: "p", text: "Next.js 15 with React Server Components is our default. Server Components cut initial bundle size by 40-60% for typical SaaS dashboards. We use the App Router exclusively — the Pages Router is legacy at this point." },
      { type: "ul", items: [
        "UI: shadcn/ui + Tailwind CSS — unstyled accessible components, infinite customisability",
        "State: Zustand for client state, TanStack Query for server state",
        "Forms: React Hook Form + Zod — end-to-end type safety from form to database",
        "Charts: Recharts for dashboards, Tremor for metrics-heavy admin panels",
      ]},
      { type: "h2", text: "Backend: Supabase (PostgreSQL + Auth + Storage)" },
      { type: "p", text: "Supabase has replaced four separate services for us: database (PostgreSQL), authentication, file storage, and real-time subscriptions. The Postgres Row Level Security system means you can write your access control rules once in SQL and they enforce everywhere — no more auth checks scattered across your API." },
      { type: "callout", text: "Supabase tip: enable pgvector extension from day one if there's any chance you'll add AI features. Adding it later to a large table requires a full reindex." },
      { type: "h2", text: "Payments: Stripe + Stripe Billing" },
      { type: "p", text: "Stripe is non-negotiable. For subscriptions, use Stripe Billing with the Customer Portal — it handles plan upgrades, downgrades, cancellations, invoices, and tax compliance out of the box. The webhook setup takes one afternoon; skipping it costs weeks of custom billing logic." },
      { type: "code", lang: "typescript", text: `// Sync Stripe subscription status to your DB on every webhook
export async function POST(req: Request) {
  const event = stripe.webhooks.constructEvent(
    await req.text(),
    req.headers.get('stripe-signature')!,
    process.env.STRIPE_WEBHOOK_SECRET!
  );

  if (event.type === 'customer.subscription.updated') {
    const sub = event.data.object;
    await supabase
      .from('subscriptions')
      .upsert({ stripe_subscription_id: sub.id, status: sub.status });
  }
}` },
      { type: "h2", text: "Deployment: Vercel + Fly.io" },
      { type: "p", text: "Vercel for the Next.js frontend — zero config, edge functions, preview deployments on every PR. Fly.io for any background workers or heavy API services that don't fit Vercel's serverless model. Together they cover 95% of SaaS infrastructure needs." },
      { type: "h2", text: "Observability: Sentry + PostHog" },
      { type: "p", text: "Sentry for error tracking — set up session replay so you can watch exactly what a user did before they hit a bug. PostHog for product analytics — funnel tracking, feature flags, and A/B testing without sending your data to Google." },
      { type: "h2", text: "The 6-Week Launch Checklist" },
      { type: "ul", items: [
        "Week 1: Auth, DB schema, core data model",
        "Week 2: Core product feature (the thing users pay for)",
        "Week 3: Billing integration + subscription gating",
        "Week 4: Onboarding flow + email sequences",
        "Week 5: Admin dashboard + basic analytics",
        "Week 6: Security audit, performance review, launch",
      ]},
      { type: "p", text: "This stack lets a team of two ship a full SaaS in 6 weeks. We've done it 12 times. The secret isn't moving fast — it's making no irreversible decisions in the first four weeks." },
    ],
  },

  {
    slug: "typescript-first-engineering",
    title: "Why TypeScript First is Non-Negotiable for Serious Products",
    excerpt: "After 8 years and 127+ projects, TypeScript has saved us more hours in debugging than any other single decision. Here's the data, the patterns, and the hard lessons.",
    emoji: "📝",
    tag: "Engineering",
    tagColor: "#059669",
    tagBg: "#ECFDF5",
    author: "Adil Hussain",
    date: "April 2026",
    dateISO: "2026-04-20",
    readTime: "7 min read",
    tags: ["TypeScript", "Engineering", "Best Practices", "JavaScript"],
    content: [
      { type: "p", text: "I've heard every argument against TypeScript. 'It slows us down.' 'It's just JavaScript with types.' 'We'll add it later.' I've seen every one of these teams pay the price — usually at 3am before a launch. Here's why TypeScript isn't optional for any product you actually care about." },
      { type: "h2", text: "The Numbers Don't Lie" },
      { type: "p", text: "In our internal post-mortems across 127 projects, we tracked the source of every bug that reached production. TypeScript projects had 40% fewer production bugs than equivalent JavaScript projects. More importantly, the bugs that did reach production were logical errors — not the stupid type errors that cost you hours to hunt down." },
      { type: "callout", text: "TypeScript doesn't slow you down. Writing a function twice — once to ship it and once to fix the null reference error you could have caught at compile time — slows you down." },
      { type: "h2", text: "The Three Patterns That Pay for Everything" },
      { type: "h3", text: "1. Branded Types for IDs" },
      { type: "p", text: "Passing a userId where an orderId was expected is one of the most common (and dangerous) bugs in any system. Branded types make this impossible:" },
      { type: "code", lang: "typescript", text: `type UserId  = string & { readonly __brand: 'UserId' };
type OrderId = string & { readonly __brand: 'OrderId' };

function getOrder(orderId: OrderId) { /* ... */ }

const uid = "user_123" as UserId;
getOrder(uid); // TS Error: Argument of type 'UserId' is not assignable to 'OrderId'` },
      { type: "h3", text: "2. Exhaustive Switch Statements" },
      { type: "p", text: "When you add a new variant to a union type, TypeScript will tell you every switch statement that needs updating. This eliminates an entire class of 'forgot to handle the new case' bugs:" },
      { type: "code", lang: "typescript", text: `type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';

function getStatusLabel(status: PaymentStatus): string {
  switch (status) {
    case 'pending':  return 'Awaiting Payment';
    case 'paid':     return 'Paid';
    case 'failed':   return 'Payment Failed';
    // Add 'refunded' to the union and TS will error here until you handle it
    default: status satisfies never; throw new Error('Unhandled status');
  }
}` },
      { type: "h3", text: "3. Zod for Runtime Validation" },
      { type: "p", text: "TypeScript only protects you at compile time. The moment data comes in from an API, a form, or a database, you're back in untyped territory. Zod bridges this gap — define your schema once and get both runtime validation and TypeScript types:" },
      { type: "code", lang: "typescript", text: `import { z } from 'zod';

const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  plan: z.enum(['free', 'pro', 'enterprise']),
  createdAt: z.coerce.date(),
});

type User = z.infer<typeof UserSchema>; // TypeScript type auto-generated

// Runtime safety at the API boundary
const user = UserSchema.parse(req.body); // throws if invalid` },
      { type: "h2", text: "Migrating an Existing JS Project" },
      { type: "p", text: "The fastest path: rename files to .ts one folder at a time, start with strict: false, and turn on rules incrementally. Don't try to migrate everything at once — you'll lose momentum. The most important rule to turn on first is strictNullChecks. It catches 60% of the value of TypeScript alone." },
      { type: "h2", text: "The Team Argument" },
      { type: "p", text: "TypeScript is a communication protocol between developers. When a new engineer joins the team, they can understand what a function expects and returns without reading the entire codebase. That's not just a nice-to-have on a team — it's the difference between a 3-day onboarding and a 3-week one." },
      { type: "p", text: "Start TypeScript on your next project. Your future self, your teammates, and your 3am incident response will thank you." },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
