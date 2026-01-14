import { Button } from "@/components/Button"
import { ArrowRight, ChevronDown, Github, Linkedin, Twitter, Download } from "lucide-react"
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"

const skills = [
    "React",
    "Tailwind CSS",
    "PrimeReact",
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "JWT Authentication",
    "PostgreSQL",
    "Git",
    "Docker",
    "Kubernetes",
    "Leaflet",
    "Figma",
    "Trello"
]

export const Hero = () => {
    return <section className="relative min-h-screen flex items center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
            <img
                src="/hero-bg.png"
                alt="Hero Background"
                className="w-full h-full object-cover opacity-40"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
        </div>

        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...new Array(30)].map((_, index) => (
                <div
                    key={Math.random() + index}
                    className="absolute w-1 h-1 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#20B2A6",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}
        </div>

        {/* Contents */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Image */}
                <div className="relative">
                    {/* Profile Image */}
                    <div className="relative max-w-md mx-auto">
                        <div
                            className="absolue inset-0 rounded-3xl bg-gradient-to-br
                            from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
                        />
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img
                                src="/profile-picture-theme.png"
                                alt="Hagi Agfayuniar"
                                className="w-full aspect-[5/5] object-cover rounded-2xl" />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-sm font-medium">Available for work</span>
                                </div>
                            </div>
                            {/* Stats Badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                <div className="text-2xl font-bold text-primary">5+</div>
                                <div className="text-xs text-muted-foreground">Years Exp.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Text */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Web Developer
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                            Crafting{" "}
                            <span className="font-serif italic font-normal text-white">
                                Digital Magic
                            </span>
                            <br />
                            <span className="text-muted-foreground">
                                with Purpose{" "}
                                <span className="text-primary">by Design</span>
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            Hi, I'm Hagi - a passionate web developer focused on building
                            modern, performant, and user-focused applications.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            Contact Me <ArrowRight className="w-5 h-5" />
                        </Button>
                        <AnimatedBorderButton>
                            <Download className="w-5 h-5" />
                            Download CV
                        </AnimatedBorderButton>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow Me: </span>
                        {
                            [
                                { icon: Github, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Twitter, href: "#" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    {<social.icon className="w-5 h-5" />}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-10 animate-fade-in animation-delay-600">
                <p className="text-sm font-bold text-muted-foreground mb-1 text-center">
                    Technologies I work with
                </p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, index) => (
                            <div key={index} className="flex-shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Scroll Button */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a
                href="#about"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
            >
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>
    </section>
}