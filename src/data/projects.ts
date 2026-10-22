export type Project = {
  name: string
  summary: string
  /** Set once the repository is public. */
  url?: string
}

export type ProjectGroup = {
  name: string
  summary: string
  projects: Project[]
}

export const projectGroups: ProjectGroup[] = [
  {
    name: 'DevSecOps',
    summary: 'Security checks built into how code is built, shipped and deployed.',
    projects: [
      {
        name: 'devsecops-pipelines',
        summary: 'Ready-to-use security steps for GitLab CI, Jenkins, GitHub Actions and Bitbucket, with results sent to DefectDojo.',
      },
      {
        name: 'argocd-gitops',
        summary: 'An Argo CD setup using the app-of-apps pattern, from first install to daily operations.',
        url: 'https://github.com/hoangbeard/argocd-gitops',
      },
      { name: 'secure-base-images', summary: 'Hardened container base images, scanned with Trivy, with an SBOM and a Cosign signature.' },
      { name: 'jenkins-platform', summary: 'Jenkins as code: Docker-in-Docker, monitoring, an AWS ECS deployment and a shared library.' },
    ],
  },
  {
    name: 'Cloud & Infrastructure',
    summary: 'Infrastructure as code and self-hosted services, with secure defaults.',
    projects: [
      { name: 'infra-as-code', summary: 'Terraform modules, Terragrunt layouts and Ansible roles for AWS.' },
      {
        name: 'selfhosted-stacks',
        summary: 'Docker Compose stacks for tools like Graylog, GLPI, Pomerium, PowerDNS and Dependency-Track, with hardening notes.',
      },
      { name: 'ops-toolbox', summary: 'Small scripts for everyday cloud and operations work: AWS, Cloudflare, shell and Python.' },
    ],
  },
  {
    name: 'Security Labs',
    summary: 'Hands-on labs to see how attacks and defences work.',
    projects: [
      { name: 'kubernetes-labs', summary: 'Kubernetes labs on admission control (Pod Security, Kyverno, Gatekeeper), Gateway API and EKS.' },
      { name: 'security-labs', summary: 'Reproductions of known vulnerabilities in a safe lab, with notes on how to detect them.' },
    ],
  },
  {
    name: 'AI Security',
    summary: 'Using AI in security work, and keeping AI systems secure.',
    projects: [{ name: 'rexops', summary: 'An AI agent that updates GitOps config, scans the change and opens a merge request.' }],
  },
  {
    name: 'Knowledge',
    summary: 'Reference material collected over years of hands-on work.',
    projects: [{ name: 'security-handbook', summary: 'Checklists, runbooks and best practices for security and operations.' }],
  },
  {
    name: 'Tools',
    summary: 'Small tools that solve one problem well.',
    projects: [
      {
        name: 'awsce',
        summary: 'See where your AWS money goes and where to save, from the command line. On PyPI.',
        url: 'https://github.com/hoangbeard/awsce',
      },
      {
        name: 'career-intelligence',
        summary: 'AI skills for Claude Code, Codex and Cursor that help you review job posts, compare offers and tailor your CV.',
        url: 'https://github.com/hoangbeard/career-intelligence',
      },
    ],
  },
  {
    name: 'Products',
    summary: 'Open-core products built under @hoangbeard-labs.',
    projects: [
      { name: 'rexbloom', summary: 'A personal finance app that turns everyday spending data into a simple plan.' },
    ],
  },
]
