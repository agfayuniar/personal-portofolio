import { Brain, Code2, Rocket, Users } from "lucide-react"

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Readable, maintainable, and thoughtfully structured code built to last."
    },
    {
        icon: Rocket,
        title: "Performance",
        description: "Optimizing for speed and delivering lightning-fast user experiences."
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Clear communication and teamwork across design, product, and engineering."
    },
    {
        icon: Brain,
        title: "Thoughtful Engineering",
        description: "Intentional decisions with long-term impact in mind."
    },
]

export const About = () => {
    return (
        <section id="about" className="py-28 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            <span className="font-normal text-white">Bridging{" "}</span>
                            design & engineering{" "}
                            <span className="font-normal text-white">to create{" "}</span>
                            <span className="font-serif italic font-normal text-white">
                                real-world impact.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>A full-stack web developer with experience working in an IT consulting environment, where I build reliable, scalable, and user-focused web applications for real-world business needs.</p>
                            <p>I work across the stack—designing clean, intuitive interfaces while engineering robust backend systems that perform well under real constraints. My experience in consulting has shaped how I approach development: thinking beyond features to consider maintainability, performance, and long-term value for both users and stakeholders.</p>
                            <p>I enjoy working with modern web technologies, writing clean and thoughtful code, and collaborating closely with teams to deliver solutions that are practical, scalable, and impactful.</p>
                            <p>I’m comfortable collaborating in Bahasa Indonesia, English, and German, and I value clear communication, continuous improvement, and purposeful software design.</p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "My mission is to build thoughtfully designed, reliable digital solutions that deliver real-world value and scale over time."
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{
                                    animationDelay: `${(index + 1) * 100}ms`
                                }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

