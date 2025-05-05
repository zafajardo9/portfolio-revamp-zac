"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { socialLinks } from '@/data/content'

interface Contribution {
  count: number
  date: string
  color: string
}

interface GitHubData {
  totalContributions: number
  contributions: Contribution[]
}

export default function GitHubActivity() {
  const [data, setData] = useState<GitHubData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const response = await fetch('/api/github')
        
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data')
        }
        
        const githubData = await response.json()
        setData(githubData)
      } catch (err) {
        console.error('Error fetching GitHub data:', err)
        setError('Could not load GitHub activity')
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  // Group contributions by month for the heatmap
  const getContributionsByMonth = () => {
    if (!data?.contributions) return []
    
    // Get the last 12 months of data (most relevant)
    const today = new Date()
    const oneYearAgo = new Date()
    oneYearAgo.setFullYear(today.getFullYear() - 1)
    
    // Filter to the last year's data
    const lastYearContributions = data.contributions.filter(contribution => {
      const contributionDate = new Date(contribution.date)
      return contributionDate >= oneYearAgo
    })
    
    return lastYearContributions
  }

  const renderHeatmap = () => {
    const contributions = getContributionsByMonth()
    if (!contributions.length) return null
    
    // Group by week for display
    const weeks: Contribution[][] = []
    let currentWeek: Contribution[] = []
    
    // Days of the week (0 = Sunday, 6 = Saturday)
    const dayOfWeek = (date: string) => new Date(date).getDay()
    
    // Group contributions by week
    contributions.forEach((contribution, index) => {
      // Start a new week on Sunday
      if (index === 0 || dayOfWeek(contribution.date) === 0) {
        if (currentWeek.length) {
          weeks.push(currentWeek)
        }
        currentWeek = [contribution]
      } else {
        currentWeek.push(contribution)
      }
    })
    
    // Add the last week
    if (currentWeek.length) {
      weeks.push(currentWeek)
    }
    
    // Render the heatmap
    return (
      <div className="overflow-x-auto py-6">
        <div className="flex flex-nowrap mx-auto" style={{ maxWidth: '900px' }}>
          {weeks.map((week, weekIndex) => (
            <div key={`week-${weekIndex}`} className="flex flex-col">
              {week.map((day) => (
                <div
                  key={`day-${day.date}`}
                  className="w-3 h-3 m-[2px] rounded-sm hover:ring-1 hover:ring-offset-1 transition-all"
                  style={{ backgroundColor: day.color }}
                  title={`${day.count} contributions on ${new Date(day.date).toLocaleDateString()}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section id="github-activity" className="py-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-secondary mb-2">GitHub Activity</h2>
        <p className="text-muted-foreground">My open source contribution history</p>
      </div>

      <Card className="border-none shadow-none bg-secondary/5">
        <CardContent className="pt-6">
          {loading ? (
            <div className="space-y-4 py-8">
              <Skeleton className="h-4 w-full max-w-[250px] mx-auto" />
              <Skeleton className="h-32 w-full mx-auto" />
            </div>
          ) : error ? (
            <p className="text-destructive text-center py-8">{error}</p>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-secondary font-bold text-lg">{data?.totalContributions || 0}</span> 
                  <span className="text-muted-foreground">contributions in the last year</span>
                </div>
                <Link 
                  href={socialLinks.github}
                  target="_blank"
                  className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>@zafajardo9</span>
                </Link>
              </div>
              
              <div className="flex justify-center">
                {renderHeatmap()}
              </div>
              
              <p className="text-center text-muted-foreground text-sm pt-2">
                Each square represents a day of contribution
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
} 