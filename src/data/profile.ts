/**
 * Copy deck for the site and CV. Voice: plain, direct, quietly confident.
 * Every claim is verified against the profile (shay.md v3 + the live
 * artifacts themselves); phrasing is written for the surface, never lifted.
 * `highlights` = scan-tight site version; `bullets` = full CV detail.
 */

export const identity = {
  name: 'Shay Henderson',
  role: 'Infrastructure & Cloud',
  location: 'Scotland, UK',
  availability: 'Open to full-time, part-time and contract work',
  pitch:
    'I keep production systems healthy — seven years of incident response, automation and internal tooling across Azure, GCP and Cloudflare.',
  email: 'contact@shayhenderson.dev',
  github: 'https://github.com/HendoBuilds',
  linkedin: 'https://www.linkedin.com/in/shay-henderson',
  x: 'https://x.com/HendoBuilds',
  site: 'https://shayhenderson.dev',
};

export interface Job {
  company: string;
  title: string;
  dates: string;
  where: string;
  /** site version — the strongest claims, scannable */
  highlights: string[];
  /** CV version — full detail */
  bullets: string[];
}

export const experience: Job[] = [
  {
    company: 'jpg.store',
    title: 'QA & Support Engineer',
    dates: 'Sep 2022 — Jun 2026',
    where: 'Remote',
    highlights: [
      'Hands-on production operations for a Cardano NFT marketplace with 168k+ users — incident response across GCP and Cloudflare, healing stuck transactions and recovering crashed services.',
      'Built internal Retool dashboards for transaction healing, listings and process health, and shipped features and fixes to the Next.js frontend.',
      'Led the move from bespoke ticketing to Intercom: help centre, AI workflows and a chatbot resolving 64.6% of conversations before they reached a human.',
      'Started on weekend tickets; finished on the final team of seven, trusted with escalation calls and working directly with the CEO, CTO and CPO.',
    ],
    bullets: [
      'Production operations for a Cardano NFT marketplace with 168k+ users: healed stuck transactions, recovered crashed services, and ran the blockchain scraper with an eye on compute costs.',
      'GCP and Cloudflare incident response — cache management, network troubleshooting, on-chain investigation. Worked directly with the CEO, CTO and CPO, trusted with escalation calls.',
      'Built internal Retool dashboards for transaction healing, listings and process health; contributed design rollouts, bugfixes and features to the Next.js frontend.',
      'Led the migration from bespoke ticketing to Intercom: help centre, AI workflows and a chatbot deflecting 64.6% of conversations. Wrote 150+ articles read by 60k+ people a year.',
      'Started on weekend tickets, earned production-infrastructure access, and stayed to the final team of seven as the company wound down.',
    ],
  },
  {
    company: 'SecurityBot',
    title: 'Support Engineer (Contract)',
    dates: 'Apr 2025 — Apr 2026',
    where: 'Remote',
    highlights: [
      'Reworked GitBook documentation into a production-ready knowledge base and ran pre-release QA — contract work delivered across two engagements.',
    ],
    bullets: [
      'Reworked GitBook documentation into a production-ready knowledge base and ran pre-release QA — contract work delivered across two engagements.',
    ],
  },
  {
    company: 'MacDIT',
    title: 'IT Support Analyst',
    dates: 'Jun 2019 — Apr 2024',
    where: 'Bathgate, Scotland',
    highlights: [
      'Apprentice to third-line over five years at an MSP serving Scottish business clients.',
      'The Microsoft stack end to end — Azure, M365, Exchange Online, Entra ID, Intune — with MFA/SSO and conditional-access rollouts, tenant setups and mailbox migrations.',
      'Networking (Meraki and DrayTek VLANs/VPNs) through the COVID remote-access push; server, DC and SQL builds, Hyper-V, Veeam DR; PowerShell against the Graph and Azure APIs.',
    ],
    bullets: [
      'Apprentice to third-line over five years at an MSP serving Scottish business clients.',
      'Microsoft stack end to end: Azure (VMs, storage, billing), M365, Exchange Online, SharePoint, AD, Entra ID, Intune — MFA/SSO and conditional-access rollouts, tenant setups, mailbox migrations.',
      'VLAN/VPN networking (Meraki, DrayTek) including the COVID remote-access push; server, DC and SQL builds, Hyper-V, Veeam DR; PowerShell against the Graph and Azure APIs.',
    ],
  },
];

export interface Project {
  name: string;
  blurb: string;
  tags: string[];
  href?: string;
  linkLabel?: string;
  note?: string;
  featured?: boolean;
}

export const projectsIntro =
  'Every side project here serves a community I’m part of.';

export const projects: Project[] = [
  {
    name: 'Skaldic',
    blurb:
      'Desktop app that turns MIDI files into playable Mordhau songs — track arrangement across lute and flute, octave shifting, preview, then sent into the game to play via LuteMod. Open source, built with Tauri and Rust, with a Windows installer and signed auto-updates.',
    tags: ['Open source', 'Tauri', 'Rust', 'v0.2.0'],
    href: 'https://github.com/HendoBuilds/skaldic',
    linkLabel: 'github.com/HendoBuilds/skaldic',
    featured: true,
  },
  {
    name: 'Foxhole Hub',
    blurb:
      'Live war tracker for Foxhole — victory points, casualties and an interactive faction-control map, refreshed from the game’s API every ten minutes, with community streams and videos alongside.',
    tags: ['Live'],
    href: 'https://foxholehub.com',
    linkLabel: 'foxholehub.com',
  },
  {
    name: 'JPG Store Help Center',
    blurb:
      'Support platform for a 168k-user marketplace: led the migration from bespoke ticketing to Intercom, designed the AI workflows and wrote most of its 150+ articles — 60k+ readers a year, 64.6% of conversations resolved before reaching a human.',
    tags: ['Intercom', 'AI workflows'],
    note: 'Taken offline when jpg.store ceased operations.',
  },
  {
    name: 'SecurityBot Knowledge Hub',
    blurb:
      'Audited SecurityBot surface by surface and documented the product from the ground up — turning scattered docs into a finished GitBook knowledge base, structured to stay maintainable and extensible.',
    tags: ['GitBook', 'Contract'],
    href: 'https://securitybot.gitbook.io/securitybot-knowledge-hub',
    linkLabel: 'securitybot.gitbook.io',
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: 'Cloud & Infrastructure',
    items: [
      'Azure (IaaS, PaaS, identity, storage, billing)',
      'GCP',
      'Cloudflare (DNS, caching, security, Workers)',
      'Vercel',
      'Supabase / Postgres',
      'Upstash Redis',
      'Hyper-V',
      'Veeam',
      'Windows Server',
      'Linux (Ubuntu)',
      'VLANs / VPNs (Meraki, DrayTek)',
    ],
  },
  {
    title: 'Microsoft Stack',
    items: [
      'M365',
      'Exchange Online',
      'SharePoint',
      'Teams',
      'Active Directory',
      'Entra ID',
      'Intune / MDM',
      'MFA / SSO / conditional access',
    ],
  },
  {
    title: 'Development',
    items: [
      'PowerShell (Graph + Azure APIs)',
      'Bash',
      'Python',
      'JavaScript / TypeScript',
      'React',
      'Next.js',
      'Astro',
      'Tauri / Rust',
      'Devvit',
    ],
  },
  {
    title: 'Tooling & Observability',
    items: [
      'GitHub Actions',
      'Git',
      'Sentry',
      'Metabase',
      'Mixpanel',
      'PostHog',
      'GCP monitoring',
      'Retool',
      'Intercom + AI workflow design',
      'AI-assisted development (Claude Code)',
    ],
  },
];

export const education = [
  {
    name: 'Diploma SCQF Level 8, Information Security',
    org: 'QA Apprenticeships',
    dates: '2022 — 2023',
  },
  {
    name: 'Diploma SCQF Level 8, IT & Telecommunications',
    org: 'QA Apprenticeships',
    dates: '2020 — 2021',
  },
  {
    name: 'HNC Computer Science',
    org: 'West Lothian College',
    dates: '2018 — 2019',
  },
];

export const certifications = [
  {
    name: 'GitHub Administration',
    org: 'Microsoft',
    dates: 'Sep 2025 — Oct 2027',
  },
  {
    name: 'GitHub Foundations',
    org: 'GitHub',
    dates: 'Mar 2025 — Mar 2028',
  },
];

export const openSource =
  'Accepted corrections to Microsoft Learn’s official AZ-104 (Azure Administrator) and DP-900 (Azure Data Fundamentals) course repositories.';
