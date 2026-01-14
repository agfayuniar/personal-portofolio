import { ArrowUpRight, Github } from "lucide-react"

const projects = [
    {
        title: "Dentist Website",
        description: "A professional web portfolio for a dentist, designed to build patient trust and showcase services, doctor profiles, and contact information with a clean, modern interface.",
        image: "",
        tags: ["React", "Tailwind", "Responsive Design", "SEO"],
        link: "#",
        github: "#"
    },
    {
        title: "Vessel Monitoring System",
        description: "A real-time vessel monitoring web application that visualizes live ship positions on an interactive map. Users can explore vessels, view detailed information directly on the map, and monitor movements efficiently through a clean, map-driven interface.",
        image: "/projects/project2.png",
        tags: ["React", "Node.js", "PostgreSQL", "Leaflet"],
        link: "#",
        github: "#"
    },
    {
        title: "Domestic Trade Licensing System",
        description: "An internal web application designed for government officers to process and manage domestic trade licensing requests. The system includes role-based access control, user management for both officers and business entities, and a built-in CMS to manage public-facing content for business users.",
        image: "/projects/project3.png",
        tags: ["React", "Primereact", "Axios", "Node.js", "PostgreSQL", "JWT Authentication", "Git", "Trello"],
        link: "#",
        github: "#"
    },
    {
        title: "Business Licensing Portal",
        description: "A public-facing web application for business entities to submit domestic trade licensing applications in the distribution and product quality standardization sectors. The platform integrates with multiple government systems to validate legal business identities and ensure compliance before operation.",
        image: "/projects/project4.png",
        tags: ["React", "Primereact", "Axios", "Node.js", "Express.js", "PostgreSQL", "JWT Authentication", "Git", "Docker", "Figma", "RESTful APIs", "Kubernetes" ],
        link: "#",
        github: "#"
    }
]

export const Projects = () => {
    return (
        <section id="projects" className="py-28 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animated-fade-in">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects focused on
                        <br />
                        <span className="font-serif italic font-normal text-white">impact, usability, and performance</span>
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(index + 1) * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image || '/projects/project-default.png'}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Contents  */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight
                                        className="w-5 h-5 text-muted-foreground group-hover:text-primary 
                                        group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                                    />
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border-border/50 
                                            text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}