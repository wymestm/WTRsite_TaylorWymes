import { useState } from "react";

interface Placement {
    id: string;
    company: string;
    shortName: string;
    role: string;
    term: string;
    location: string;
    color: string;
    tabColor: string;
    overview: string;
    projects: string[];
    skills: string[];
    goals: string;
}

const placements: Placement[] = [
    {
        id: "placement-1",
        company: "Meridian Analytics",
        shortName: "MA",
        role: "Software Developer Intern",
        term: "Summer 2026",
        location: "Brampton, ON",
        color: "#A8B58A",
        tabColor: "#8fa372",
        overview:
            "Joined the data platform team to help scale internal reporting infrastructure. Contributed to migrating a legacy ETL pipeline to a modern cloud-based solution, reducing processing time by 40%. Collaborated closely with senior engineers in bi-weekly sprint reviews and code walkthroughs.",
        projects: [
            "Redesigned ETL pipeline using Apache Airflow on AWS",
            "Built a real-time metrics dashboard in React with WebSocket data feeds",
            "Automated weekly report generation, saving 6+ hours of manual work per week",
        ],
        skills: ["Python", "Apache Airflow", "AWS S3", "React", "SQL", "Agile / Scrum"],
        goals:
            "Aimed to deepen understanding of cloud infrastructure and data engineering patterns. Grew significantly in writing production-grade Python and navigating large, unfamiliar codebases with confidence.",
    },
    {
        id: "placement-2",
        company: "Northlight Systems",
        shortName: "NL",
        role: "Full Stack Developer Intern",
        term: "Fall 2026",
        location: "Brampton, ON",
        color: "#A9B7C6",
        tabColor: "#8fa0b3",
        overview:
            "Embedded in the product engineering team building B2B SaaS tooling for logistics companies. Took ownership of two feature modules end-to-end — from database schema design through API implementation to frontend delivery. Participated in product planning sessions and user research debriefs.",
        projects: [
            "Developed a shipment tracking module with live map integration",
            "Implemented role-based access control across the platform API",
            "Wrote comprehensive unit and integration tests, raising code coverage from 52% to 81%",
        ],
        skills: ["TypeScript", "Node.js", "PostgreSQL", "Vue.js", "Docker", "REST APIs"],
        goals:
            "Wanted to experience the full product development lifecycle on a real customer-facing application. Gained hands-on exposure to system design trade-offs and the value of thorough documentation.",
    },
    {
        id: "placement-3",
        company: "Redwood Financial",
        shortName: "RF",
        role: "Software Engineering Intern",
        term: "Summer 2027",
        location: "Calgary, AB (Remote)",
        color: "#B46A72",
        tabColor: "#9e5860",
        overview:
            "Worked within the core banking platform team on compliance and reporting tooling. Built and tested features under strict regulatory requirements, gaining exposure to fintech-specific engineering constraints including audit logging, data privacy, and zero-downtime deployments.",
        projects: [
            "Built configurable audit log viewer with advanced filtering and CSV export",
            "Integrated third-party KYC verification API into the onboarding flow",
            "Contributed to internal developer tooling documentation and onboarding guides",
        ],
        skills: ["Java", "Spring Boot", "Oracle DB", "Kafka", "JUnit", "CI/CD (Jenkins)"],
        goals:
            "Set out to understand engineering in a highly regulated environment. Learned how compliance shapes architectural decisions and developed a much stronger grasp of backend systems at scale.",
    },
    {
        id: "placement-4",
        company: "Lumen Creative Studio",
        shortName: "LC",
        role: "Frontend Developer Intern",
        term: "Winter 2028",
        location: "Vancouver, BC",
        color: "#e8a8b8",
        tabColor: "#c4849a",
        overview:
            "Joined a boutique digital agency working across client projects in e-commerce, media, and wellness. Translated high-fidelity Figma designs into polished, accessible web experiences. Collaborated daily with designers and project managers in a fast-paced, client-driven environment.",
        projects: [
            "Led frontend build for a wellness brand's e-commerce redesign (Shopify + custom React)",
            "Developed an interactive editorial lookbook with scroll-driven animations",
            "Improved Lighthouse performance scores across 3 client sites from 60s to 90+",
        ],
        skills: ["React", "Next.js", "Tailwind CSS", "Figma", "Shopify Liquid", "GSAP"],
        goals:
            "Wanted to sharpen design-to-code skills and learn to work in a creative agency environment. Came away with a much stronger eye for visual polish and a faster workflow bridging design and development.",
    },
    {
        id: "placement-5",
        company: "Capsule Health Tech",
        shortName: "CH",
        role: "Mobile Developer Intern",
        term: "Summer 2028",
        location: "Ottawa, ON",
        color: "#9D8CA6",
        tabColor: "#8a788f",
        overview:
            "Contributed to the development of a patient-facing mobile application used by over 50,000 active users. Worked on feature development, performance optimization, and accessibility improvements across iOS and Android platforms. Participated in sprint ceremonies and design critique sessions.",
        projects: [
            "Built a medication reminder system with local notification scheduling",
            "Refactored navigation architecture to React Navigation v6, reducing load time by 30%",
            "Added WCAG 2.1 AA accessibility support including screen reader labels and focus management",
        ],
        skills: ["React Native", "Expo", "TypeScript", "Firebase", "Accessibility (WCAG)", "Jest"],
        goals:
            "Aimed to gain experience in mobile development and healthcare technology. Developed deep appreciation for accessibility as a core engineering responsibility, not an afterthought.",
    },
];

// Paper clip SVG
function SkillPill({ label }: { label: string }) {
    return (
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border border-border text-muted bg-foreground/5 font-sans">
            {label}
        </span>
    );
}

// Document view
function DocumentView({ placement, onClose }: { placement: Placement; onClose: () => void; }) {
    return (
        <div
            className="doc-scrim fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8 px-4 bg-black/70"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div className="doc-paper relative w-full max-w-2xl rounded-sm bg-[#FDFAF3] shadow-[0_8px_40px_#00000047,0_2px_8px_#0000001f] -rotate-[0.3deg] mb-8">
                {/* Folder top tab */}
                <div className="h-3 rounded-t-sm w-full" style={{ backgroundColor: placement.color }}/>

                <div className="px-10 pt-8 pb-12 sm:px-14">
                    {/* Close file button */}
                    <button
                        onClick={onClose}
                        className="flex items-center gap-1.5 text-sm font-medium mb-8 group text-muted font-sans"
                        aria-label="Close document"
                    >
                        <span className="text-base leading-none group-hover:translate-x-[-2px] transition-transform inline-block">←</span>
                        <span className="group-hover:underline">Close Folder</span>
                    </button>

                    {/* Document header */}
                    <div className="mb-2">
                        <p className="text-xs tracking-widest uppercase mb-3 text-muted font-sans">
                            Work Term Report · {placement.term}
                        </p>
                        <h1 className="text-3xl sm:text-4xl font-semibold leading-tight mb-1 font-serif text-foreground">
                            {placement.company}
                        </h1>
                        <p className="text-lg text-muted font-sans">
                            {placement.role}
                        </p>
                    </div>

                    {/* Meta row */}
                    <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 mb-6 text-sm text-muted font-sans">
                        <span>📍 {placement.location}</span>
                        <span>🗓 {placement.term}</span>
                    </div>

                    {/* Divider */}
                    <hr className="border-border mb-7"/>

                    {/* Overview */}
                    <section className="mb-7">
                        <h2 className="text-xs tracking-widest uppercase mb-3 font-sans font-semibold" style={{ color: placement.tabColor }}>
                            Overview
                        </h2>
                        <p className="text-base leading-relaxed text-foreground font-sans">
                            {placement.overview}
                        </p>
                    </section>

                    {/* Projects */}
                    <section className="mb-7">
                        <h2 className="text-xs tracking-widest uppercase mb-3 font-sans font-semibold" style={{ color: placement.tabColor }}>
                            Key Projects
                        </h2>
                        <ul className="space-y-2">
                            {placement.projects.map((p, i) => (
                                <li key={i} className="flex gap-3 text-base leading-snug text-foreground font-sans">
                                    <span className="shrink-0 mt-[2px]" style={{ color: placement.tabColor }}>▸</span>
                                    <span>{p}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Skills */}
                    <section className="mb-7">
                        <h2 className="text-xs tracking-widest uppercase mb-3 font-sans font-semibold" style={{ color: placement.tabColor }}>
                            Skills Developed
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {placement.skills.map((s, i) => ( <SkillPill key={i} label={s} />))}
                        </div>
                    </section>

                    {/* Goals */}
                    <section>
                        <h2 className="text-xs tracking-widest uppercase mb-3 font-sans font-semibold" style={{ color: placement.tabColor }}>
                            Goals & Reflections
                        </h2>
                        <p className="text-base leading-relaxed text-foreground font-serif italic">
                            {placement.goals}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

// Folder card
function FolderCard({placement, index, onClick}: {placement: Placement; index: number; onClick: () => void;}) {
    return (
        <div
            className="folder-card group relative select-none transition-all duration-200 hover:-translate-y-3 hover:scale-[1.025] hover:saturate-115 hover:brightness-105"
            onClick={onClick}
            aria-label={`Open ${placement.company} work term report`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
        >
            {/* Folder tab */}
            <div className="absolute top-0 left-6 flex items-end px-5 pb-0 h-[32px] rounded-t-md min-w-[140px] z-10" 
                style={{ backgroundColor: placement.tabColor }}
            >
                <span className="text-xs pb-1.5 truncate text-[#fff7e6eb] font-sans font-semibold tracking-[0.06em]">
                    {placement.term}
                </span>
            </div>

            {/* File peeking out via swing on hover */}
            <div className="absolute left-[28%] right-[3%] top-[34px] h-[70px] bg-[#FDFAF3] rounded-t-sm z-20 origin-bottom-left transition-transform duration-300 group-hover:rotate-[-9deg] group-hover:shadow-folder-hover"/>

            {/* Folder body & shadow */}
            <div
                className="relative overflow-hidden rounded-lg mt-[30px] min-h-[200px] p-7 pb-6 z-30 shadow-folder group-hover:shadow-folder-hover transition-shadow duration-300"
                style={{ backgroundColor: placement.color }}>

                {/* Large watermark initial */}
                <div className="absolute right-5 bottom-3 text-8xl font-bold leading-none select-none pointer-events-none font-serif text-white/20">
                    {placement.shortName}
                </div>

                <div className="relative z-10">
                    <p className="text-xs tracking-widest uppercase mb-2 font-sans text-white/75">
                        {String(index + 1).padStart(2, "0")} / Work Term
                    </p>
                    <h3 className="text-2xl font-semibold leading-tight mb-1 font-serif text-white">
                        {placement.company}
                    </h3>
                    <p className="text-sm font-sans text-white/80">
                        {placement.role}
                    </p>
                    <p className="text-xs mt-3 font-sans text-white/60">
                        {placement.location}
                    </p>
                </div>

                {/* Click hint */}
                <div className="absolute bottom-4 right-5 text-xs font-sans text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Open report →
                </div>
            </div>
        </div>
    );
}

export default function App() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const activePlacement = placements.find((p) => p.id === activeId) ?? null;

    return (
        <div className="min-h-full flex flex-col bg-background">
            {/* Header */}
            <header className="w-full px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-accent">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-semibold leading-tight font-serif text-accent-fg">
                        Taylor Wymes
                    </h1>
                    <p className="text-sm mt-0.5 font-sans text-accent-fg/50">
                        BComp Honours Co-op Software Engineering · University of Guelph
                    </p>
                </div>
                <div className="flex gap-5 text-sm flex-wrap font-sans, text-accent-fg/70">
                    <a href="mailto:your.email@example.com" className="hover:text-white transition-colors">
                        twymes@uoguelph.ca
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        LinkedIn ↗
                    </a>
                </div>
            </header>

            {/* Main content */}
            <main className="flex-1 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
                {/* Section heading */}
                <div className="mb-10">
                    <p className="text-xs tracking-widest uppercase mb-2 text-muted font-sans">
                        Co-op Portfolio
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-semibold font-serif text-foreground">
                        Work Terms
                    </h2>
                    <p className="mt-3 text-base max-w-lg text-muted font-sans">
                        Click any folder to open the full work term report.
                    </p>
                </div>

                {/* Folder grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {placements.map((placement, i) => ( 
                        <FolderCard key={placement.id} placement={placement} index={i} onClick={() => setActiveId(placement.id)}/>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full px-6 sm:px-10 lg:px-16 py-5 border-t border-border text-center sm:text-left">
                <p className="text-xs text-muted font-sans">
                    Taylor Wymes · BComp Honours Co-op Software Engineering · University of Guelph · Graduating Spring 2029
                </p>
            </footer>

            {/* Document view overlay */}
            {activePlacement && ( <DocumentView placement={activePlacement} onClose={() => setActiveId(null)}/> )}
        </div>
    );
}
