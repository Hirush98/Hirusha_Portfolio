import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export default function SideRails() {
  return (
    <>
      <div className="side-rail side-rail-left">
        <a
          href="https://github.com/Hirush98"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <FaGithub size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/hirusha-kavinda-446302303/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedin size={18} />
        </a>

        <a
          href="mailto:hirush.k2@gmail.com"
          aria-label="Email"
          title="Email"
        >
          <FaEnvelope size={18} />
        </a>

        <span className="side-rail-line"></span>
      </div>

      <div className="side-rail side-rail-right">
        <a href="mailto:hirush.k2@gmail.com">
          hirush.k2@gmail.com
        </a>

        <span className="side-rail-line"></span>
      </div>
    </>
  );
}