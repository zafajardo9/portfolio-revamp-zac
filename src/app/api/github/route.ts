import { NextResponse } from 'next/server';

// Define types for GitHub API response
interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface GitHubContributionsResponse {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: ContributionWeek[];
        }
      }
    }
  }
}

// GraphQL query to fetch GitHub contribution data
const GITHUB_CONTRIBUTIONS_QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              color
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_ACCESS_TOKEN;
    
    // Basic validation
    if (!username || !token) {
      return NextResponse.json(
        { error: 'GitHub username or token not configured' },
        { status: 500 }
      );
    }

    // Make request to GitHub GraphQL API
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        query: GITHUB_CONTRIBUTIONS_QUERY,
        variables: { username }
      }),
      cache: 'no-store' // Avoid caching the response
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GitHub API error:', errorText);
      return NextResponse.json(
        { error: 'Failed to fetch data from GitHub' },
        { status: response.status }
      );
    }

    const data = await response.json() as GitHubContributionsResponse;
    
    // Format the data for easier consumption by the frontend
    return NextResponse.json({
      totalContributions: data.data.user.contributionsCollection.contributionCalendar.totalContributions,
      contributions: data.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
        (week: ContributionWeek) => 
          week.contributionDays.map((day: ContributionDay) => ({
            count: day.contributionCount,
            date: day.date,
            color: day.color
          }))
      )
    });

  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub contribution data' },
      { status: 500 }
    );
  }
} 