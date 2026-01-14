import { serviceId, templateId, publicKey } from "@/config/env"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/Button"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(true)
        setSubmitStatus({ type: null, message: "" })
        try {
            if (!serviceId || !templateId || !publicKey) {
                return null
            }

            if (!formData.name || !formData.email || !formData.message) {
                return alert("Fill the form first!")
            }

            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message
            }, publicKey)

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon."
            })
            setFormData({ name: "", email: "", message: "" })
        } catch (error) {
            console.log("EmailJS error: ", error)
            setSubmitStatus({
                type: "error",
                message: error.text || "Failed to send message. Please try again later."
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            </div>

            {/* Section Header */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-mendium tracking-wider uppercase animate-fade-in">
                        Get in touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Let’s turn ideas into
                        <br />
                        <span className="font-serif italic font-normal text-white">
                            reliable solutions.
                        </span>
                    </h2>
                </div>
            </div>

            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-0">
                <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium mb-2"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                required
                                placeholder="Your name..."
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                placeholder="your@mail.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                type="text"
                                required
                                placeholder="Your message..."
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                            />
                        </div>

                        <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                            {
                                isLoading ? (
                                    <>Sending...</>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-5 h-5" />
                                    </>
                                )
                            }

                        </Button>

                        {
                            submitStatus.type && (
                                <div
                                    className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success"
                                        ? "bg-green-500/10 border border-green-500/20 text-green"
                                        : "bg-red-500/10 border border-red-500/20 text-red"
                                        }`}
                                >
                                    {
                                        submitStatus.type === "success" ? (
                                            <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                        )
                                    }
                                    <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )
                        }
                    </form>
                </div>
            </div>
        </section >
    )
}