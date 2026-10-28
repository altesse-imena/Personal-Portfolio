export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Altesse Imena",
    "givenName": "Altesse",
    "familyName": "Imena",
    "alternateName": ["Altesse", "altesseimena"],
    "image": "https://altesseimena.com/images/my-headshot.jpeg",
    "jobTitle": "Software Engineer",
    "description": "Passionate software developer specializing in web applications and interactive experiences",
    "url": "https://altesseimena.com",
    "sameAs": [
      "https://www.linkedin.com/in/altesseimena",
      "https://github.com/altesse-imena"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Pulse"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Southern Alberta Institute of Technology",
      "description": "Bachelor of Technology – Software Development"
    },
    "knowsAbout": [
      "Software Development",
      "Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Python",
      "Full-Stack Development",
      "Frontend Development",
      "Backend Development"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://altesseimena.com"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
