"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            if (!response.ok) throw new Error('Failed to send message')

            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            })

            setFormData({ name: '', email: '', message: '' })

        } catch {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again later.",
                variant: "destructive"
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section id="contact" className="py-20 relative">

            <div className="relative max-w-5xl mx-auto">
                {/* Background Card */}
                <Card className="absolute -right-4 -top-4 w-full h-full bg-secondary/5 border-none" />

                {/* Main Content */}
                <Card className="relative bg-background border-none">
                    <div className="grid md:grid-cols-2">
                        {/* Contact Form */}
                        <CardContent className="p-6 md:p-8">
                            <div className="mb-6">
                                <CardTitle className="text-secondary mb-2">Get in Touch</CardTitle>
                                <CardDescription>
                                    Fill out the form and I'll get back to you as soon as possible.
                                </CardDescription>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Input
                                        required
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                        className="border-none bg-secondary/5 focus-visible:ring-primary"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        required
                                        type="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                        className="border-none bg-secondary/5 focus-visible:ring-primary"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Textarea
                                        required
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                        className="min-h-[150px] border-none bg-secondary/5 focus-visible:ring-primary"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-primary hover:bg-primary/90 text-background"
                                >
                                    {isLoading ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        </CardContent>

                        {/* Quote Section */}
                        <div className="bg-secondary/5 p-6 md:p-8 flex items-center">
                            <div className="space-y-4">
                                <blockquote className="text-xl md:text-2xl font-medium text-secondary italic">
                                    &quot;Programming isn&apos;t about what you know; it&apos;s about what you can figure out.&quot;
                                </blockquote>
                                <p>
                                    Let&apos;s collaborate and build something amazing together. Whether you have a project in mind
                                    or just want to connect, I&apos;m always open to discussing new opportunities and ideas.
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
} 