"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { workExperiences, interests } from "@/data/content"

interface WorkExperience {
    title: string
    company: string
    period: string
    description: string[]
}

interface Interest {
    title: string
    description: string
}

export default function Experience() {
    return (
        <section id="experience" className="py-20 relative">
            <div className="space-y-20">
                {/* About Me */}
                <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                    <h2 className="text-3xl font-bold tracking-tight text-secondary sticky top-20">
                        About Me
                    </h2>
                    <Card className="border-none shadow-none bg-secondary/5">
                        <CardContent className="pt-6">
                            <p className="text-muted-foreground leading-relaxed">
                                I am a passionate software engineer with a strong foundation in web development
                                and a keen interest in creating elegant solutions to complex problems. My journey
                                in technology has been driven by curiosity and a desire to build meaningful applications
                                that make a difference.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Work Experience */}
                <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                    <h2 className="text-3xl font-bold tracking-tight text-secondary sticky top-20">
                        Work Experience
                    </h2>
                    <div className="space-y-12 relative">
                        {/* Timeline line */}
                        <div className="absolute left-0 top-0 h-full w-px bg-secondary/20 ml-3" />

                        {workExperiences.map((experience, index) => (
                            <div key={index} className="relative pl-10">
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-3 w-6 h-6 rounded-full border-4 border-secondary bg-background" />

                                <Card className="border-none shadow-none bg-secondary/5">
                                    <CardHeader>
                                        <div className="space-y-1">
                                            <CardTitle className="text-secondary">{experience.title}</CardTitle>
                                            <div className="flex justify-between items-center">
                                                <CardDescription>{experience.company}</CardDescription>
                                                <span className="text-sm text-muted-foreground">{experience.period}</span>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                            {experience.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Interests */}
                <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                    <h2 className="text-3xl font-bold tracking-tight text-secondary sticky top-20">
                        Interests
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {interests.map((interest, index) => (
                            <Card key={index} className="border-none shadow-none bg-secondary/5">
                                <CardHeader>
                                    <CardTitle className="text-secondary">{interest.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{interest.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
} 