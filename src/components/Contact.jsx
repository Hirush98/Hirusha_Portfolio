export default function Contact() {
  return (
    <section id="contact" className="contact-clean-section">
      <div className="projects-header reveal">
        <div className="section-label">Contact</div>

        <h2 className="section-title">
          Let&apos;s <span className="grad-text">Connect</span>
        </h2>

        <p className="contact-clean-subtitle">
          I&apos;m currently looking for internship opportunities and
          collaboration opportunities in Full-stack, and Software
          Engineering.
        </p>
      </div>

      <div className="glass contact-clean-card reveal">
        <h3>Get In Touch</h3>

        <p>
          Whether you have an opportunity, a project idea, or just want to say
          hello, my inbox is always open. I&apos;ll do my best to get back to
          you.
        </p>

        <a
          href="mailto:hirush.k2@gmail.com"
          className="btn btn-primary contact-clean-btn"
        >
          <span>✉</span>
          Say Hello
        </a>
      </div>
    </section>
  );
}