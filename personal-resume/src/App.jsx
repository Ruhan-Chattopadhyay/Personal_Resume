import React from "react";
import "./App.css";

const Resume = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header-content">
          <h1 className="name">RUHAN CHATTOPADHYAY</h1>
          <p className="title">B.Tech Student | Computer Science &amp; Engineering</p>
        </div>
      </div>

      <div className="contact-bar">
        <div className="contact-item">📍 Kolkata, India</div>
        <div className="contact-item">📞 9007395791</div>
        <div className="contact-item">✉️ ruhan.chattopadhyay@gmail.com</div>
        <div className="contact-item">🔗 linkedin.com/in/ruhan-chattopadhyay</div>
        <div className="contact-item">🔗 github.com/Ruhan-Chattopadhyay</div>
      </div>

      <div className="content">
        {/* Objective */}
        <section className="section">
          <h2 className="section-title">About me</h2>
          <p className="objective">
            Motivated and detail-oriented student with strong academic performance
            and practical project experience in web development. Proficient in Java-based
            applications. Seeking opportunities to apply technical and creative skills to design
            beautiful and functional websites.
          </p>
        </section>

        {/* Projects */}
        <section className="section">
          <h2 className="section-title">Projects</h2>

          {/* CineNox */}
          <div className="project-item">
            <div className="project-header">
              <span className="project-name">
                CineNox – Movie Ticket Reservation System
              </span>
              <span className="project-tech">Java, File I/O</span>
            </div>
            <p className="project-description">
              Created a comprehensive terminal-based movie ticket booking system demonstrating
              real-world backend logic and system design.
            </p>
            <ul className="project-highlights">
              <li>Implemented user authentication system with login functionality</li>
              <li>
                Developed movie and showtime selection interface with multiple screening options
              </li>
              <li>
                Built real-time seat layout visualization showing availability across different
                shows
              </li>
              <li>Integrated food ordering module with itemized billing</li>
              <li>Designed automatic bill generation with transaction summary</li>
              <li>
                Utilized file-based persistent storage ensuring data retention across sessions
              </li>
              <li>
                Applied modular code architecture with clean input validation and error handling
              </li>
              <li>
                Released stable version (v1.0.0) with comprehensive documentation and MIT license
              </li>
            </ul>
          </div>

          {/* Tic Tac Toe */}
          <div className="project-item">
            <div className="project-header">
              <span className="project-name">Tic-Tac-Toe Web Game</span>
              <span className="project-tech">HTML5, CSS3, JavaScript</span>
            </div>
            <p className="project-description">
              Developed a fully functional browser-based two-player Tic-Tac-Toe game with clean UI
              and complete game logic.
            </p>
            <ul className="project-highlights">
              <li>Implemented turn-based gameplay with alternating player moves</li>
              <li>Built win condition detection algorithm (rows, columns, diagonals)</li>
              <li>Created draw condition logic for completed boards</li>
              <li>Designed visual indicator system for game state updates</li>
              <li>Deployed live application using GitHub Pages</li>
            </ul>
          </div>

          {/* School Codes */}
          <div className="project-item">
            <div className="project-header">
              <span className="project-name">
                School Codes – Java Programs (VMS &amp; Class 10–12)
              </span>
              <span className="project-tech">Java</span>
            </div>
            <p className="project-description">
              Comprehensive collection of hundreds of structured Java programs developed over
              multiple years, forming the foundation of programming expertise.
            </p>
            <ul className="project-highlights">
              <li>
                Built extensive array and matrix manipulation programs (sorting, searching,
                traversal)
              </li>
              <li>
                Developed string processing applications (parsing, tokenizing, pattern matching)
              </li>
              <li>Implemented recursive algorithms and advanced problem-solving logic</li>
              <li>
                Created file handling systems with persistent data storage capabilities
              </li>
              <li>
                Designed multi-class modular program structures following VMS format
              </li>
              <li>
                Demonstrated long-term consistency, discipline, and strong algorithmic foundations
              </li>
            </ul>
          </div>

          {/* Additional Projects */}
          <div className="project-item">
            <div className="project-header">
              <span className="project-name">Additional Projects</span>
            </div>
            <ul className="project-highlights">
              <li>
                <strong>Static Restaurant Website (Adare):</strong> Built responsive restaurant
                website with modern CSS and semantic HTML
              </li>
              <li>
                <strong>Hackathon Prototype:</strong> Developed rapid prototype with core logic,
                deployment, and debugging
              </li>
              <li>
                <strong>Utility Exploration:</strong> Explored Google Photos Takeout organization
                utility, improved code readability
              </li>
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-category-title">Programming</div>
              <div className="skill-category-content">
                Java (Intermediate), JavaScript (Beginner), HTML5 (Beginner), CSS3 (Beginner), React (Beginner)
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-category-title">Core Competencies</div>
              <div className="skill-category-content">
                OOP, Data Structures, Arrays, Modular Programming, I/O handling
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-category-title">Web Development</div>
              <div className="skill-category-content">
                Frontend Development, DOM Manipulation, GitHub Pages, Basic Backend Logic
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-category-title">Tools &amp; Platforms</div>
              <div className="skill-category-content">
                Git, GitHub, Netlify, Visual Studio Code
              </div>
            </div>
          </div>
        </section>

        {/* Education & Achievements */}
        <section className="section">
          <h2 className="section-title">Education &amp; Achievements</h2>
          <div className="education-item">
            <div className="education-header">
              B.Tech in Computer Science &amp; Engineering
            </div>
            <div className="education-details">
              Kalinga Institute of Industrial Technology | 2025 – Present
            </div>
          </div>
          <div className="education-item">
            <div className="education-header">
              Vivekananda Mission School – High School Diploma
            </div>
            <div className="education-details">ISC (Class 12) – 87.2%</div>
            <div className="education-details">ICSE (Class 10) – 96.4%</div>
            <div className="education-details">
              Activities &amp; societies: • Member, Student Quality Circle (SQC); <br />
              • 3rd Place :- Coding Fest, PB Academy; <br />
              • 3rd Place :- Coding Fest, The Future Foundation School; <br />
              • International Rank 3 (twice) <br />
              • International English Olympiad (IEO), Science Olympiad Foundation (SOF); <br />
              • Achieved 10/10 pointer equivalent with perfect scores in Computer Applications,
              Geography, and English Literature (Class 10 Board Examinations). <br />
            </div>
          </div>
        </section>

        {/* Interests */}
        <section className="section">
          <h2 className="section-title">Interests</h2>
          <div className="interests-grid">
            <div className="interest-item">Web Development</div>
            <div className="interest-item">UI/UX</div>
            <div className="interest-item">System Architecture</div>
            <div className="interest-item">Graphics Design</div>
            <div className="interest-item">Photography</div>
            <div className="interest-item">Videography</div>
          </div>
        </section>

        {/* Certificates */}
        <section className="section">
          <h2 className="section-title">Certificates</h2>
          <ul className="achievements">
            <li className="certificate-item">
              <div className="achievements_l1">
                Fundamentals of Machine Learning and Artificial Intelligence
              </div>
              <div className="achievements_l2">Amazon Web Services (AWS)</div>
              <div className="achievements_l3">Issued Oct 2025</div>
            </li>

            <li className="certificate-item">
              <div className="achievements_l1">
                Tata - Cybersecurity Analyst Job Simulation
              </div>
              <div className="achievements_l2">Forage</div>
              <div className="achievements_l3">Issued Oct 2025</div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
