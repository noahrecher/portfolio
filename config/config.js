
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Noah",
  links: [
    {
      title: "Über mich",
      link: "#about",
    },
    {
      title: "Projekte",
      link: "#projects",
    },
    {
      title: "Kontakt",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    {
      title: "Blog",
      link: "https://medium.com/@noah.recher",
    }
  ],
}
export const intro = {
  title: "Hallo, ich bin Noah",
  description: "Entdecken Sie mein Portfolio.",
  image: profile.src,
  buttons: [
    {
      title: "Kontakt",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Download CV",
      link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Über mich",
  description: [
    "I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering. I kick started my professional career as a mobile application developer working remotely for a UK based startup — Lessgo.",
    "The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I opensource my code from a place of empathy - for future developers, teammates, users, and with accessibility in mind. I also love joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in tech. I’m sharing my programming journey on instagram, helping people who are just getting into the space of programming.",
    "When I’m not programming, I focus on my hobbies which are: diary writing, doodling, meeting people and growing my network.",
  ],
}

export const projects = {
  title: "Projekte",
  cards: [
    {
      title: "Steinschlagrisiko",
      description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/star_book",
        },
      ]
    },
    {
      title: "Abfallsammlungen",
      description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/portfolio",
        },
      ]
    },
    {
      title: "Smart Classroom",
      description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/portfolio",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Kontaktieren Sie mich",
  description: "Zögern Sie nicht, mich bei Fragen oder Rückmeldungen direkt per E-Mail unter hashirshoaeb@gmail.com zu kontaktieren.",
  buttons: [
    {
      title: "Email",
      link: "mailto:noah.recher@students.fhnw.ch",
      isPrimary: true,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Noah Recher | Data Science Student",
  description: "",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@noahrecher",
  description: "Data Science Student",
  cards: [
    {
      title: "Webseite",
      link: "https://noahrecher.github.io/portfolio/",
    },
    {
      title: "GitHub",
      link: "https://github.com/noahrecher",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/noah-recher-78487124b/",
    },
  ]
}