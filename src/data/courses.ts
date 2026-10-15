export type Course = {
  name: string
  title: string
  summary: string
  topics: string[]
  /** Set once the course is public. */
  url?: string
}

export const courses: Course[] = [
  {
    name: 'devsecops-course',
    title: 'DevSecOps Foundations',
    summary: 'Learn to add security to a delivery pipeline one step at a time, with a lab for every module.',
    topics: ['Secret scanning', 'SAST & SCA', 'Container security', 'IaC scanning', 'Supply chain'],
  },
  {
    name: 'ai-security-course',
    title: 'AI Security Engineering',
    summary: 'Understand how AI and LLM applications get attacked, and how to test and protect them.',
    topics: ['Threat modelling', 'Prompt injection', 'Agent security', 'OWASP LLM Top 10', 'MITRE ATLAS'],
  },
]
