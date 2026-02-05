export interface WorkItem {
  company: string;
  title: string;
  year: string;
  tags: string[];
  description: string;
  images: string[];
  technologies: string[];
}

export const workItems: WorkItem[] = [
  {
    company: "conDati",
    title: "Sr. UI Engineer",
    year: "2018 - 2021",
    tags: ["Lead UI Developer", "Infrastructure", "Design"],
    description: "Apply AI and Machine Learning algorithms to build analytic solutions that transform massive volumes of customer, event, and transaction data into accessible dashboards, alerts and automatic reports",
    images: ["condati1.jpg", "condati2.jpg", "condati3.jpg"],
    technologies: ["JavaScript", "TypeScript", "React", "Python", "Redux"]
  },
  {
    company: "Akamai mPulse",
    title: "Software Engineer II",
    year: "2017 - 2018",
    tags: ["UI Developer", "Design"],
    description: "Get granular visibility into how end users perceive performance, and take action against third-party resources that are slowing you down. Maximize your business outcomes by prioritizing enhancements that matter.",
    images: ["akamai1.jpg", "akamai2.jpg", "akamai3.jpg"],
    technologies: ["JavaScript", "React", "Redux"]
  },
  {
    company: "SOASTA",
    title: "Software Engineer",
    year: "2015 - 2017",
    tags: ["Lead Designer", "Wordpress Developer"],
    description: "Cloud-based testing services, and created a browser-based website testing product. Website tests include load testing, software performance testing, functional testing and user interface testing.",
    images: ["soasta1.jpg", "soasta2.jpg", "soasta3.jpg"],
    technologies: ["JavaScript", "Wordpress"]
  },
  {
    company: "Hawk Ridge Systems",
    title: "Web Developer",
    year: "2013 - 2015",
    tags: ["UI Developer", "Wordpress Developer"],
    description: "The largest worldwide partner for Dassault Systèmes SOLIDWORKS, our goal at Hawk Ridge Systems is to provide you with the the widest selection of 3D design and manufacturing solutions, and access to the most experienced team of professionals in the industry.",
    images: ["hrs1.jpg", "hrs2.jpg", "hrs3.jpg"],
    technologies: ["Wordpress"]
  }
];
