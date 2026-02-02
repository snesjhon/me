export interface Achievement {
  title: string;
  description?: string;
  link?: string;
  technologies?: string[];
  date?: string;
}

export interface CareerEntry {
  company: string;
  title: string;
  period: string;
  companyUrl: string;
  icon: 'briefcase' | 'star' | 'rocket' | 'building';
  achievements: Achievement[];
}

export interface TimelinePeriod {
  year: string;
  entries: CareerEntry[];
}

export const careerTimeline: TimelinePeriod[] = [
  {
    year: '2021 - 2025',
    entries: [
      {
        company: 'Shopify',
        title: 'Software Engineer',
        period: 'Mar 2021 - Nov 2025',
        companyUrl: 'https://www.shopify.com/',
        icon: 'briefcase',
        achievements: [
          {
            title: 'Led major frontend and full-stack initiatives',
            description:
              "Across Shopify's Analytics and Product Taxonomy platforms, including the architecture for Unified Analytics and the frontend implementation of the Standard Product Taxonomy",
            technologies: ['React', 'TypeScript', 'GraphQL', 'Ruby on Rails'],
          },
          {
            title: 'Improved system resiliency',
            description:
              'Strengthened performance profiling, expanded integration and visual regression testing, and overhauled error tracing across millions of log events',
            technologies: ['Playwright', 'Chromatic', 'GitHub Actions'],
          },
          {
            title: 'Supported cross-team operations',
            description:
              'Through AI-driven multi-agent support workflows and mentored interns and junior engineers to accelerate team growth',
          },
        ],
      },
    ],
  },
  {
    year: '2018 - 2021',
    entries: [
      {
        company: 'conDati Analytics',
        title: 'Sr. UI Engineer',
        period: 'May 2018 - Mar 2021',
        companyUrl: 'https://condati.com/',
        icon: 'briefcase',
        achievements: [
          {
            title: 'Implemented UI infrastructure from ground up',
            description:
              'Built the complete frontend architecture for the conDati Analytics Platform, establishing patterns and best practices for the engineering team',
            technologies: ['React', 'Redux', 'Webpack', 'TypeScript'],
          },
          {
            title: 'Built analytics data visualization platform',
            description:
              'Created interactive dashboards and visualizations to transform complex ML-powered analytics into accessible insights',
            technologies: ['React', 'D3.js', 'Python'],
          },
          {
            title: 'Modernized legacy codebase',
            description:
              'Reduced technical debt and improved system maintainability through strategic refactoring and modern tooling adoption',
            technologies: ['TypeScript', 'Webpack'],
          },
        ],
      },
    ],
  },
  {
    year: '2015 - 2018',
    entries: [
      {
        company: 'Akamai Technologies',
        title: 'Software Engineer II',
        period: 'Jan 2015 - May 2018',
        companyUrl: 'https://www.akamai.com/',
        icon: 'briefcase',
        achievements: [
          {
            title: 'Lead developer for UI infrastructure modernization',
            description:
              'Spearheaded the modernization of Akamai mPulse, transitioning from legacy architecture to modern React-based components',
            technologies: ['React', 'JavaScript', 'Redux'],
          },
          {
            title: 'Delivered highly performant Timeline project',
            description:
              'Built a complex data visualization dashboard using React Virtualized to handle millions of real user monitoring data points with smooth scrolling and rendering',
            technologies: ['React', 'React Virtualized', 'D3.js'],
          },
          {
            title: 'Performance optimization tools',
            description:
              'Created tools to identify and analyze third-party resource bottlenecks affecting site performance',
          },
        ],
      },
    ],
  },
];
