export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export interface GitHubStats {
  followers: number;
  public_repos: number;
  total_stars: number;
  recent_activity: number; // total events in last 30 days
}

const GITHUB_USERNAME = 'saanidhyasharma-blip';

export async function getGitHubStats(): Promise<GitHubStats> {
  try {
    const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!userRes.ok) throw new Error('Failed to fetch user');
    const userData = await userRes.json();

    const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
    if (!reposRes.ok) throw new Error('Failed to fetch repos');
    const reposData: any[] = await reposRes.json();

    const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);

    return {
      followers: userData.followers,
      public_repos: userData.public_repos,
      total_stars: totalStars,
      recent_activity: 0, // Placeholder
    };
  } catch (error) {
    console.error('GitHub API Error:', error);
    // Fallback to static data
    return {
      followers: 12,
      public_repos: 45,
      total_stars: 128,
      recent_activity: 84,
    };
  }
}

export async function getRecentRepos(limit = 6): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${limit}`);
    if (!res.ok) throw new Error('Failed to fetch repos');
    return await res.json();
  } catch (error) {
    console.error('GitHub API Error:', error);
    return [];
  }
}
