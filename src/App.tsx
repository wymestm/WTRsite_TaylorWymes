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
    bannerImage: string;
    introduction: string;
    positionDetails: string;
    projects: string[];
    skills: string[];
    goals: string[];
    reflections: string[];
    conclusions: string;
    acknowledgments: string;
    gallery: string[];
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
        bannerImage: "./assets/DHL-banner.jpg",
        introduction:
            "DHL is a global logistics leader operating in over 220 countries and territories with a workforce of over 580,000 employees. \
            Within this network is DHL Express, a specialized premium subdivision focused on time-sensitive, international shipping. \
            In Canada alone, DHL Express employs over 3,000 people across a vast system of hubs, gateways, and service centers to ensure fast and reliable shipments and deliveries. \
            In the context of computer science, a logistics network of this scale relies heavily on various types of IT systems and software to manage daily operations, handle millions of global shipments, and maintain system reliability.",
        positionDetails:
            "As an IT Project Support and Power Platform Development Co-op Student, I worked within the IT Programs team, which is responsible for building, implementing, and maintaining the internal systems that drive many of the company's daily operations. \
            My role centered on developing automations and scripts to streamline workflows including project management, invoicing, shipment documentation, and data reporting.\
            This position provided me with the opportunity to work on a variety of projects and gain hands-on experience in the development of internal tools and systems. \
            I was able to build upon my existing knowledge of Python and REST APIs while rapidly picking up new skills and technologies, such as Microsoft Power BI and Microsoft Power Automate, on the job. \
            Beyond technical growth, navigating this corporate environment significantly strengthened my professional soft skills, particularly in cross-functional collaboration, stakeholder communication and agile project management.",
        projects: [
            "CBSA Manifest Management System: Developed a Python-based system to automate the generation and management of international shipment manifests for CBSA verification. This solution integrates DHL's internal records, the CBSA system, and external APIs to streamline workflows, significantly reducing manual effort and improving data accuracy. Development of this project is actively ongoing and will continue in the remainder of my placement.",
            "EDIFACT Translation System: Developed a Python script to automate the translation of EDIFACT files into a pipe-separated format for internal use. This tool was created to bring data-translation processes in-house and reduce reliance on third-party service providers.",
        ],
        skills: ["Python", "REST APIs", "HTTP Requests", "Microsoft Power BI", "Microsoft Power Automate", "Microsoft Sharepoint", "ETL Pipelines", "Agile / Scrum Methodologies", "Cross-functional Collaboration", "Stakeholder Presentations & Communication"],
        goals: [
            "I: Reach an intermediate level of proficiency in the usage of Microsoft Power BI by the end of August 2026. I strive to have the ability to use the program comfortably, create mid-complexity dashboards and reports without major issue, and complete work assignments without much or any additional support from colleagues and supervisors.",
            "II: Reach an intermediate level of proficiency in the usage of Microsoft Power Automate by January 2027. I strive to have the ability to use Power Automate comfortably, create mid-complexity flows without major issue, and integrate the system into work assignments and projects without much or any additional support from colleagues and supervisors.",
            "III: Reach an intermediate level of proficiency in the usage of Python by the end of August 2026. I strive to have the ability to write medium complexity programs in Python and integrate libraries and database access, without much or any additional support from both online resources, and colleagues and supervisors.",
        ],
        reflections: [
            "I: While I have yet to reach intermediate-level proficiency as I had planned, I feel as though I have definitely surpassed a beginner-level skillset. I am able to connect Excel worksheets to Power BI reports and dashboard to express hidden insights and general information by using built-in visual widgets. I hope to continue this goal into the next 4 months of my work term.",
            "II: While I have yet to reach intermediate-level proficiency as I had planned, I feel as though I have definitely surpassed a beginner-level skillset. I have experience developing low to mid complexity flows, with some support, that can be connected to and used within other systems such as Power Apps. I look forward to continue improving on my skills in the next 4 months of my work term.",
            "III: I feel as though I have reached my goal and achieved an intermediate level of proficiency in Python development. Throughout the past 4 months at DHL I have worked on a variety of Python projects in which I honed my ability to develop comfortably and independently. I had the chance to work with numerous new libraries and APIs during my development, increasing my development skillset and ability to create a wide range of programs. I have also reduced the frequency in which I need to research elements of python programming such as functions and logic methods.",
        ],
        conclusions:
            "My first work term at DHL Express Canada has been an incredibly rewarding experience that has allowed me to grow both technically and professionally while bridging the gap between my academic studies and real-world software engineering.\
            By working on projects such as the EDIFACT Translation System and CBSA Manifest Management System, I was able to leverage python to solve complex logistical challenges and automate workflows that directly impact the efficiency of DHL's operations.\
            Beyond technical growth, this role has taught me how to effectively navigate a corporate environment and collaborate with cross-functional teams on a large scale. I am grateful for the opportunity to work alongside talented professionals at DHL Express Canada and contribute to the company's mission of providing fast and reliable shipping solutions worldwide. \
            I look forward to continuing my work term in the next 4 monthsand further developing my skills and knowledge in the field of software engineering.",
        acknowledgments:
            "I would like to thank my former co-op advisor, Anne-Marie Zawadski, for her invaluable guidance during the job search and interview process. Anne-Marie's support was instrumental in helping me secure this position at DHL Express Canada. \
            I am also deeply grateful to my supervisor and mentor, Marco Eli Fernandez Felix. His mentorship has been essential to my technical development and overall growth as a software engineer.\
            Finally, a special thank you to my colleagues on the IT Programs team at DHL Express Canada. Their expertise, collaboration, and willingness to share knowledge made this work term an incredibly rewarding experience.",
        gallery: [
            "./assets/DHL-Bathroom.jpeg",
            "./assets/Robot-Creation.jpeg",
            "./assets/Appreciation-Day.jpeg",
            "./assets/IT-Gift.JPG"
        ]
    },
    {
        id: "placement-2",
        company: "DHL Express Canada - TBC",
        shortName: "DHL",
        role: "IT Project Support & Power Platform Development Co-op",
        term: "Fall 2026",
        location: "Brampton, ON",
        color: "#A9B7C6",
        tabColor: "#8fa0b3",
        bannerImage: "./assets/DHL-banner.jpg",
        introduction:
            "DHL is a global logistics leader operating in over 220 countries and territories with a workforce of over 580,000 employees. \
            Within this network is DHL Express, a specialized premium subdivision focused on time-sensitive, international shipping. \
            In Canada alone, DHL Express employs over 3,000 people across a vast system of hubs, gateways, and service centers to ensure fast and reliable shipments and deliveries. \
            In the context of computer science, a logistics network of this scale relies heavily on various types of IT systems and software to manage daily operations, handle millions of global shipments, and maintain system reliability.",
        positionDetails:
            "As an IT Project Support and Power Platform Development Co-op, I was under the supervision of the IT Programs team which is responsible for managing and implementing various internal scripts and systems that support the company's operations and business processes. \
            This includes developing and maintaining internal tools, automating workflows, and ensuring the smooth functioning of IT systems across the organization.",
        projects: [],
        skills: ["Python", "REST APIs", "HTTP Requests", "Microsoft Power BI", "Microsoft Power Automate", "Microsoft Sharepoint", "ETL Pipelines", "Agile / Scrum Methodologies", "Cross-functional Collaboration", "Stakeholder Presentations & Communication"],
        goals: [],
        reflections: [],
        conclusions:
            "",
        acknowledgments:
            "",
        gallery: []
    },
    {
        id: "placement-3",
        company: "Coming Soon",
        shortName: "",
        role: "",
        term: "Summer 2027",
        location: "",
        color: "#B46A72",
        tabColor: "#9e5860",
        bannerImage: "",
        introduction:
            "Coming soon! This work term has yet to be completed. Stay tuned for updates on my experience and projects during this placement.",
        positionDetails:
            "",
        projects: [],
        skills: [],
        goals: [],
        reflections: [],
        conclusions:
            "",
        acknowledgments:
            "",
        gallery: []
    },
    {
        id: "placement-4",
        company: "Coming Soon",
        shortName: "",
        role: "",
        term: "Winter 2028",
        location: "",
        color: "#e8a8b8",
        tabColor: "#c4849a",
        bannerImage: "",
        introduction:
            "Coming soon! This work term has yet to be completed. Stay tuned for updates on my experience and projects during this placement.",
        positionDetails:
            "",
        projects: [],
        skills: [],
        goals: [],
        reflections: [],
        conclusions:
            "",
        acknowledgments:
            "",
        gallery: []
    },
    {
        id: "placement-5",
        company: "Coming Soon",
        shortName: "",
        role: "",
        term: "Summer 2028",
        location: "",
        color: "#9D8CA6",
        tabColor: "#8a788f",
        bannerImage: "",
        introduction:
            "Coming soon! This work term has yet to be completed. Stay tuned for updates on my experience and projects during this placement.",
        positionDetails:
            "",
        projects: [],
        skills: [],
        goals: [],
        reflections: [],
        conclusions:
            "",
        acknowledgments:
            "",
        gallery: []
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
            <div className="doc-paper relative w-full max-w-2xl rounded-sm bg-[#FDFAF3] shadow-[0_8px_40px_#00000047,0_2px_8px_#0000001f] mb-8">
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
                        {placement.role && (
                            <p className="text-lg text-muted font-sans">
                                {placement.role}
                            </p>
                        )}
                    </div>

                    {/* Meta row */}
                    <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 mb-6 text-sm text-muted font-sans">
                        {placement.location && (<span>📍 {placement.location}</span>)}
                        <span>🗓️ {placement.term}</span>
                    </div>

                    {/* Divider */}
                    <hr className="border-border mb-7"/>

                    {/* Banner Image */}
                    {placement.bannerImage && (
                        <div className="mb-8 w-full rounded-none overflow-hidden shadow-sm border border-foreground/10">
                            <img 
                                src= {placement.bannerImage}
                                alt="Banner Image"
                                className="w-full h-auto"
                            />
                        </div>
                    )}
                    

                    {/* Introduction */}
                    <section className="mb-7">
                        <h2 className="text-xs tracking-widest uppercase mb-3 font-sans font-semibold" style={{ color: placement.tabColor }}>
                            Introduction
                        </h2>
                        <p className="text-base leading-relaxed text-foreground font-sans">
                            {placement.introduction}
                        </p>
                    </section>

                    {/* Position Details */}
                    {placement.positionDetails && (
                        <section className="mb-7">
                            <h2 className="text-xs tracking-widest uppercase mb-3 font-sans font-semibold" style={{ color: placement.tabColor }}>
                                Position Details
                            </h2>
                            <p className="text-base leading-relaxed text-foreground font-sans">
                                {placement.positionDetails}
                            </p>
                        </section>
                    )}

                    {/* Projects */}
                    {placement.projects && placement.projects.length > 0 &&(
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
                    )}

                    {/* Skills */}
                    {placement.skills && placement.skills.length > 0 &&(
                        <section className="mb-7">
                            <h2 className="text-xs tracking-widest uppercase mb-3 font-sans font-semibold" style={{ color: placement.tabColor }}>
                                Skills & Technologies
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {placement.skills.map((s, i) => ( <SkillPill key={i} label={s} />))}
                            </div>
                        </section>
                    )}

                    {/* Goals */}
                    {placement.goals && placement.goals.length > 0 && (
                        <section className="mb-7">
                            <h2 className="text-xs tracking-widest uppercase mb-3 font-sans font-semibold" style={{ color: placement.tabColor }}>
                                Goals
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
                    )}

                    {/* Reflections */}
                    {placement.reflections && placement.reflections.length > 0 && (
                        <section className="mb-7">
                            <h2 className="text-xs tracking-widest uppercase mb-3 font-sans font-semibold" style={{ color: placement.tabColor }}>
                                Reflections
                            </h2>
                            <ul className="space-y-2">
                                {placement.reflections.map((p, i) => (
                                    <li key={i} className="flex gap-3 text-base leading-snug text-foreground font-sans">
                                        <span className="shrink-0 mt-[2px]" style={{ color: placement.tabColor }}>▸</span>
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Conclusions */}
                    {placement.conclusions && (
                        <section className="mb-7">
                            <h2 className="text-xs tracking-widest uppercase mb-3 font-sans font-semibold" style={{ color: placement.tabColor }}>
                                Conclusions
                            </h2>
                            <p className="text-base leading-relaxed text-foreground font-sans">
                                {placement.conclusions}
                            </p>
                        </section>
                    )}

                    {/* Acknowledgments */}
                    {placement.acknowledgments && (
                        <section>
                            <h2 className="text-xs tracking-widest uppercase mb-3 font-sans font-semibold" style={{ color: placement.tabColor }}>
                                Acknowledgments
                            </h2>
                            <p className="text-base leading-relaxed text-foreground font-sans">
                                {placement.acknowledgments}
                            </p>
                        </section>
                    )}

                    {/* Image Gallery */}
                    {placement.gallery && placement.gallery.length > 0 && (
                        <section className="mt-12 pt-8 border-t border-foreground/10">
                            <h2 className="text-xs tracking-widest uppercase mb-6 font-sans font-semibold" style={{ color: placement.tabColor }}>
                                Gallery
                            </h2>
                            {/* Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {placement.gallery.map((link, i) => (
                                    <div key={i} className="rounded-xl overflow-hidden shadow-sm border border-foreground/10 aspect-square relative transition-all duration-300 hover:scale-105 hover:shadow-md">
                                        <img 
                                            src={link}
                                            alt={`Gallery Snapshot ${i + 1}`} 
                                            className="w-full h-full object-cover" 
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
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
                    <a href="https://github.com/wymestm" className="hover:text-white transition-colors">
                        Github ↗
                    </a>
                </div>
            </header>

            {/* Main content */}
            <main className="flex-1 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
                {/* Introduction section */}
                <div className="mb-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                    {/* Headshot */}
                    <div className="shrink-0">
                        <img src="./assets/Headshot-TaylorW.jpeg" alt="Taylor Wymes Headshot" 
                            className="w-40 h-52 md:w-56 md:h-72 rounded-xl object-cover shadow-sm border border-foreground/10"
                        />
                    </div>
                    <div>
                        <p className="text-xs tracking-widest uppercase mb-2 text-muted font-sans">
                            Co-op Portfolio
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-semibold font-serif text-foreground">
                            Welcome
                        </h2>
                        <p className="mt-3 text-base text-muted font-sans">
                            Welcome to my co-op portfolio. This website is designed to give you an inside look into my progression as a software engineer & developer. 
                            Whether I am architecting backend data pipelines or refining accessible user interfaces, I hope you walk away from these reports with a clear sense of my technical adaptability, my problem-solving approach, and the tangible impact I strive to bring to every development team I join.
                        </p>
                    </div>
                </div>

                {/* Work Terms section */}
                <div className="mb-10">
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
