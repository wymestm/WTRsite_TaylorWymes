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
    introduction: string;
    employerDetails: string;
    positionDetails: string;
    projects: string[];
    skills: string[];
    goals: string[];
    conclusions: string;
    acknowledgments: string;
}

const placements: Placement[] = [
    {
        id: "placement-1",
        company: "DHL Express Canada",
        shortName: "DHL",
        role: "IT Project Support & Power Platform Development Co-op",
        term: "Summer 2026",
        location: "Brampton, ON",
        color: "#A8B58A",
        tabColor: "#8fa372",
        introduction:
            "Joined the data platform team to help scale internal reporting infrastructure. Contributed to migrating a legacy ETL pipeline to a modern cloud-based solution, reducing processing time by 40%. Collaborated closely with senior engineers in bi-weekly sprint reviews and code walkthroughs.",
        employerDetails:
            "DHL Express Canada is a leading logistics company specializing in international shipping and courier services. The IT department focuses on building scalable internal tools and data pipelines to support global operations.",
        positionDetails:
            "As an IT Project Support and Power Platform Development Co-op, I was responsible for supporting and maintaining the company's internal IT systems and developing new features using Microsoft Power Platform.",
        projects: [
            "Redesigned ETL pipeline using Apache Airflow on AWS",
            "Built a real-time metrics dashboard in React with WebSocket data feeds",
            "Automated weekly report generation, saving 6+ hours of manual work per week",
        ],
        skills: ["Python", "Apache Airflow", "AWS S3", "React", "SQL", "Agile / Scrum"],

        goals: [
            "Aimed to deepen understanding of cloud infrastructure and data engineering patterns. Grew significantly in writing production-grade Python and navigating large, unfamiliar codebases with confidence.",
        ],
        conclusions:
            "This work term solidified my interest in backend and data engineering. I learned the importance of clear documentation, code reviews, and testing in maintaining a reliable data platform.",
        acknowledgments:
            "I would like to thank my mentor, Jane Doe, for her guidance and support throughout the term. Her insights into system design and best practices were invaluable.",
    },
    {
        id: "placement-2",
        company: "DHL Express Canada",
        shortName: "DHL",
        role: "IT Project Support & Power Platform Development Co-op",
        term: "Fall 2026",
        location: "Brampton, ON",
        color: "#A9B7C6",
        tabColor: "#8fa0b3",
        introduction:
            "Embedded in the product engineering team building B2B SaaS tooling for logistics companies. Took ownership of two feature modules end-to-end — from database schema design through API implementation to frontend delivery. Participated in product planning sessions and user research debriefs.",
        employerDetails:
            "DHL Express Canada is a leading logistics company specializing in international shipping and courier services. The IT department focuses on building scalable internal tools and data pipelines to support global operations.",
        positionDetails:
            "As an IT Project Support and Power Platform Development Co-op, I was responsible for supporting and maintaining the company's internal IT systems and developing new features using Microsoft Power Platform.",
        projects: [
            "Developed a shipment tracking module with live map integration",
            "Implemented role-based access control across the platform API",
            "Wrote comprehensive unit and integration tests, raising code coverage from 52% to 81%",
        ],
        skills: ["TypeScript", "Node.js", "PostgreSQL", "Vue.js", "Docker", "REST APIs"],
        goals: [
            "Wanted to experience the full product development lifecycle on a real customer-facing application.", "Gained hands-on exposure to system design trade-offs and the value of thorough documentation."
        ],
        conclusions:
            "This work term solidified my interest in backend and data engineering. I learned the importance of clear documentation, code reviews, and testing in maintaining a reliable data platform.",
        acknowledgments:
            "I would like to thank my mentor, Jane Doe, for her guidance and support throughout the term. Her insights into system design and best practices were invaluable.",
    },
    {
        id: "placement-3",
        company: "Coming Soon",
        shortName: "",
        role: "TBD",
        term: "Summer 2027",
        location: "TBD",
        color: "#B46A72",
        tabColor: "#9e5860",
        introduction:
            "Coming soon! This work term has yet to be completed. Stay tuned for updates on my experience and projects during this placement.",
        employerDetails:
            "",
        positionDetails:
            "",
        projects: [],
        skills: [],
        goals: [],
        conclusions:
            "",
        acknowledgments:
            "",
    },
    {
        id: "placement-4",
        company: "Coming Soon",
        shortName: "",
        role: "TBD",
        term: "Winter 2028",
        location: "TBD",
        color: "#e8a8b8",
        tabColor: "#c4849a",
        introduction:
            "Coming soon! This work term has yet to be completed. Stay tuned for updates on my experience and projects during this placement.",
        employerDetails:
            "",
        positionDetails:
            "",
        projects: [],
        skills: [],
        goals: [],
        conclusions:
            "",
        acknowledgments:
            "",
    },
    {
        id: "placement-5",
        company: "Coming Soon",
        shortName: "",
        role: "TBD",
        term: "Summer 2028",
        location: "TBD",
        color: "#9D8CA6",
        tabColor: "#8a788f",
        introduction:
            "Coming soon! This work term has yet to be completed. Stay tuned for updates on my experience and projects during this placement.",
        employerDetails:
            "",
        positionDetails:
            "",
        projects: [],
        skills: [],
        goals: [],
        conclusions:
            "",
        acknowledgments:
            "",
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
                        <span>🗓️ {placement.term}</span>
                    </div>

                    {/* Divider */}
                    <hr className="border-border mb-7"/>

                    {/* Introduction */}
                    <section className="mb-7">
                        <h2 className="text-xs tracking-widest uppercase mb-3 font-sans font-semibold" style={{ color: placement.tabColor }}>
                            Introduction
                        </h2>
                        <p className="text-base leading-relaxed text-foreground font-sans">
                            {placement.introduction}
                        </p>
                    </section>

                    {/* Employer Details */}
                    <section className="mb-7">
                        <h2 className="text-xs tracking-widest uppercase mb-3 font-sans font-semibold" style={{ color: placement.tabColor }}>
                            Employer Details
                        </h2>
                        <p className="text-base leading-relaxed text-foreground font-sans">
                            {placement.employerDetails}
                        </p>
                    </section>

                    {/* Position Details */}
                    <section className="mb-7">
                        <h2 className="text-xs tracking-widest uppercase mb-3 font-sans font-semibold" style={{ color: placement.tabColor }}>
                            Position Details
                        </h2>
                        <p className="text-base leading-relaxed text-foreground font-sans">
                            {placement.positionDetails}
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
                    <section className="mb-7">
                        <h2 className="text-xs tracking-widest uppercase mb-3 font-sans font-semibold" style={{ color: placement.tabColor }}>
                            Goals & Reflections
                        </h2>
                        <ul className="space-y-2">
                            {placement.goals.map((p, i) => (
                                <li key={i} className="flex gap-3 text-base leading-snug text-foreground font-sans">
                                    <span className="shrink-0 mt-[2px]" style={{ color: placement.tabColor }}>▸</span>
                                    <span>{p}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Conclusions */}
                    <section className="mb-7">
                        <h2 className="text-xs tracking-widest uppercase mb-3 font-sans font-semibold" style={{ color: placement.tabColor }}>
                            Conclusions
                        </h2>
                        <p className="text-base leading-relaxed text-foreground font-sans">
                            {placement.conclusions}
                        </p>
                    </section>

                    {/* Acknowledgments */}
                    <section>
                        <h2 className="text-xs tracking-widest uppercase mb-3 font-sans font-semibold" style={{ color: placement.tabColor }}>
                            Acknowledgments
                        </h2>
                        <p className="text-base leading-relaxed text-foreground font-sans">
                            {placement.acknowledgments}
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
                    <a href="https://www.linkedin.com/in/taylor-wymes/" className="hover:text-white transition-colors">
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
