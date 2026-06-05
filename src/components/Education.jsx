import { motion } from "motion/react";

const education = [
  {
    title: "BSc (Hons) Information Technology — Information Technology",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "2023 — Present",
    location: "Malabe, Sri Lanka",
    description:
      "Undergraduate degree focused on information technology, machine learning, software development,Database management. Building practical skills through academic projects, full-stack development, and data-driven systems.",
    badges: ["Information Technology", "Machine Learning", "Software Development", "Database Management"]
  },
 
  {
    title: "G.C.E Advanced Level (A/L) — Technology Stream",
    institution: "Hanwella Central College",
    period: "2015 — 2017",
    location: "Hanwella, Sri Lanka",
    description:
      "Completed Advanced Level studies in the Technology stream, specializing in Information & Communication Technology (ICT), Science for Technology, and Engineering Technology. Gained a strong foundation in computing concepts, technological problem-solving, analytical thinking, and practical application of modern technologies.",
    badges: ["ICT", "Technology", "Problem Solving"]
  },
  {
    title: "G.C.E Ordinary Level (O/L)",
    institution: "Hanwella Central College",
    period: "2013 — 2014",
    location: "Hanwella, Sri Lanka",
    description:
      "Completed Ordinary Level education with a strong academic foundation that supported further studies in science, technology, and computing.",
    badges: ["Secondary Education", "Academic Foundation"]
  }
];

export default function Education() {
  return (
    <section id="education">
      <div style={{ marginBottom: "3rem" }} className="reveal">
        <div className="section-label">Education</div>

        <h2 className="section-title">
          Academic <span className="grad-text">Journey</span>
        </h2>
      </div>

      <div className="education-timeline">
        {education.map((item, index) => (
          <motion.article
            key={item.title}
            className="education-timeline-item"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          >
            <span className="education-marker"></span>

            <motion.div
              className="glass education-timeline-card motion-soft-glow reveal"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="education-card-top">
                <div>
                  <h3 className="education-title">{item.title}</h3>
                  <p className="education-institution">{item.institution}</p>
                </div>

                <span className="education-period">{item.period}</span>
              </div>

              <p className="education-location">{item.location}</p>
              <p className="education-description">{item.description}</p>

              <div className="education-badges">
                {item.badges.map((badge) => (
                  <span className="education-badge" key={badge}>
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}