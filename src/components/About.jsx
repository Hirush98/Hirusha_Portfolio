export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-card-col reveal">
          <div className="glass about-main-card">
            <div className="about-avatar-circle">
              <img
                src="/MY_pic.jpeg"
                alt="B. Hirusha Kavinda"
                className="about-avatar-img"
              />
            </div>

            <div className="about-name-sm">B. Hirusha Kavinda</div>
            <div className="about-role-sm">Information Technology · SLIIT</div>

            <div className="about-mini-stats">
              <div className="mini-stat">
                <div className="mini-stat-num">3rd</div>
                <div className="mini-stat-label">Year</div>
              </div>

              <div className="mini-stat">
                <div className="mini-stat-num">6+</div>
                <div className="mini-stat-label">Projects</div>
              </div>

              <div className="mini-stat">
                <div className="mini-stat-num">IT</div>
                <div className="mini-stat-label">Information Technology</div>
              </div>

              <div className="mini-stat">
                <div className="mini-stat-num">Open</div>
                <div className="mini-stat-label">Internships</div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: ".15s" }}>
          <div className="section-label">About Me</div>

          <h2 className="section-title">
           Turning ideas into <span className="grad-text">modern full-stack</span>  web applications and smart digital experiences
          </h2>

          <div className="about-text-col">
            <h3>Who I Am</h3>
            <p>
              I am an undergraduate at Sri Lanka Institute of Information Technology (SLIIT) with a strong interest in Full Stack Web Development. I specialize in building modern web applications using the MERN stack (MongoDB, Express, React, Node.js) and also have hands-on experience in WordPress development.


            </p>

            <p>
              I enjoy developing scalable, user-friendly applications and continuously improving my skills by working on real-world projects. My experience includes implementing authentication systems, REST APIs, and responsive frontend designs
            </p>

            <h3>What I Do</h3>

            <p>
              I am gaining hands-on experience in full-stack development by building projects with modern web technologies. Alongside this, I am exploring the fundamentals of artificial intelligence and machine learning through self-learning and experimentation

            </p>
          </div>

          <div className="interest-list">
            <span className="interest-tag">🤖 Machine Learning</span>
            <span className="interest-tag">🌐 Modern Web Applications</span>
            <span className="interest-tag">🎨 UI/UX Focused Design</span>
            <span className="interest-tag">🚀 Scalable Software Solutions</span>
            <span className="interest-tag">📊 Data-Driven Applications</span>
            <span className="interest-tag">🧩 Problem Solving</span>
          </div>
        </div>
      </div>
    </section>
  );
}