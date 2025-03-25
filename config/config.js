
import profile from './profile.png';
import { faAppStore, faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
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
      link: "https://drive.switch.ch/index.php/s/7hpJ1XxFtgQud8C",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Über mich",
  description: [
    "Ich bin Noah, 26 Jahre alt und derzeit Student im Bachelor-Studiengang Data Science an der FHNW in Brugg. Die Welt der Daten fasziniert mich ungemein, und meine Begeisterung für dieses Thema treibt mich jeden Tag an, mein Wissen zu vertiefen und neue Fähigkeiten zu entwickeln. Durch mein Studium habe ich bereits umfassende Kenntnisse in den Bereichen Datenverarbeitung, Datenanalyse, Statistik und maschinelles Lernen erworben. In verschiedenen Projekten konnte ich mein theoretisches Wissen in die Praxis umsetzen und wertvolle Erfahrungen sammeln, die mich bestens auf die Herausforderungen in der Welt der Datenwissenschaft vorbereiten.",
    "Neben der intensiven Auseinandersetzung mit Daten ist der Sport für mich ein wichtiger Ausgleich. Ob beim Mountainbiken, Bouldern oder Paddeln – Sport bringt mir nicht nur viel Freude, sondern stärkt auch meinen Teamgeist und meine Resilienz. Diese Eigenschaften sind für mich nicht nur im Sport, sondern auch in meiner beruflichen Entwicklung von großer Bedeutung.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Mobile App Development",
      description: "I create pixel perfect iOS and Andriod apps using Flutter.",
      icons: null,
    },
    {
      title: "Web Development",
      description: "I create responsive static websites using Reactjs.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projekte",
  cards: [
    {
      title: "Steinschlagrisiko",
      description: "Dieses Projekt analysierte das Risiko von Steinschlägen auf einer Kantonsstraße in Graubünden. Über drei Monate hinweg wurden Daten wie Masse und Geschwindigkeit zu Steinschlägen erfasst. Auf dieser Basis wurde ein Modell entwickelt, das die Wahrscheinlichkeit eines fatalen Unfalls innerhalb eines Jahres abschätzen soll.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/noahrecher/FHNW-Steinschlagrisiko",
        },
      ]
    },
    {
      title: "Smart Classroom",
      description: "Das Projekt untersuchte, wie unterschiedliche Lüftungsstrategien, Temperatur und der Einsatz von Zimmerpflanzen das Raumklima – insbesondere den CO₂-Gehalt und die Luftfeuchtigkeit – beeinflussen. Mithilfe eines selbst aufgebauten IoT-Systems, bestehend aus einem Mikrocontroller und einem Raspberry Pi, wurden kontinuierlich Messdaten erfasst und analysiert.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/noahrecher/FHNW-Smart_Classroom",
        },
      ]
    },
    {
      title: "Videobasiertes Tennistraining",
      description: "In diesem Projekt wurden mithilfe von 3D-Kameras Tennisspielsequenzen aufgenommen und das Bewegungsverhalten der Spieler analysiert. Das Ziel war es, Stärken, Schwächen und Verhaltensmuster der Spieler zu identifizieren. Ein wesentlicher Teil des Projekts bestand im Feature Engineering, da die Rohdaten lediglich aus Koordinaten und Geschwindigkeiten bestanden und keine Informationen zu den Spielsequenzen selbst enthielten.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/noahrecher/FHNW-Videobasiertes_Tennistraining",
        },
      ]
    },
    {
      title: "Optimierung von Abfallsammlung in Gemeinden",
      description: "Das Projekt entwickelte ein Modell zur Vorhersage des Fremdstoffanteils in Grünabfallbehältern, um die Verwertungseffizienz zu steigern. Basierend auf Koordinaten wurden die Container Gebäuden und Wohnungen zugeordnet, was eine Modellierung mithilfe demografischer Daten ermöglichte. So entstand ein Modell zur Vorhersage des Fremdstoffanteils in Grünabfallbehältern, unterstützt durch ein Dashboard und eine Datenbank zur einfachen Skalierung auf weitere Gemeinden. (NDAs unterliegend)",
      icons: [
        {
          icon: faLock,
          link: "https://github.com/noahrecher/",
        },
      ]
    },
    {
      title: "Optimierung von Elektrizitätsnetzen",
      description: "Dieses Projekt zielte darauf ab, den Stromverbrauch und die Stromeinspeisung durch Solarzellen in zwei Ortschaften anhand von Faktoren wie Wetter und Infrastruktur vorherzusagen, um eine kurzfristige Netzlastplanung zu ermöglichen. Die Grundlage dafür bildeten Smartmeter-Daten aus mehreren Quartieren. (NDAs unterliegend)",
      icons: [
        {
          icon: faLock,
          link: "https://github.com/noahrecher/",
        },
      ]
    },
    {
      title: "Preismonitoring von Medizinalprodukten",
      description: "In diesem Projekt wurde ein System zum Preismonitoring von Medizinalprodukten entwickelt, um den manuellen Aufwand bei der Konkurrenzpreisüberwachung zu minimieren. Mithilfe eines robusten, wartbaren Webscrapers werden Preisdaten automatisch erfasst, in einer Datenbank gespeichert und über ETL-Prozesse analysiert. Die anschließende Visualisierung der Preisentwicklungen unterstützt die Firma dabei, schnell auf Marktveränderungen zu reagieren und fundierte Entscheidungen zu treffen. (NDAs unterliegend)",
      icons: [
        {
          icon: faLock,
          link: "https://github.com/noahrecher/",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Kontaktieren Sie mich",
  description: "Zögern Sie nicht, mich bei Fragen oder Rückmeldungen direkt per E-Mail unter noah.recher@students.fhnw.ch zu kontaktieren.",
  buttons: [
    {
      title: "E-Mail",
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