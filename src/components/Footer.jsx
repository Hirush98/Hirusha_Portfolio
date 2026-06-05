import psLogo from "../assets/logo7.png";

const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certificates" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

const socialLinks = [
  { label: "Email", href: "mailto:hirush.k2@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hirusha-kavinda-446302303/" },
  { label: "GitHub", href: "https://github.com/Hirush98" },
  {
    label: "CV",
    href: "/cv/Hirusha_Kavinda_cv.pdf"
  }
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow"></div>

      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#hero" className="footer-logo">
            <span className="footer-logo-mark">
              <img src={psLogo} alt="HK Portfolio Logo" />
            </span>
          </a>
          <p>Turning data, code, and ideas into intelligent solutions.</p>
        </div>

        <div className="footer-links">
          {footerLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-social-modern">
          {socialLinks.map((link) => {
            const external = link.href.startsWith("http");

            return (
              <a
                href={link.href}
                key={link.label}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="footer-bottom">
          <p>© 2026 Hirusha Kavinda. Designed & Built with ♥.</p>
        </div>
      </div>
    </footer>
  );
}