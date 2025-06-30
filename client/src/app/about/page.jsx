"use client";
import { useState, useEffect } from "react";
import NormalNavbar from "../Donate/NewComponents/NormalNavbar";
import Footer from "../components/Footer";
import "./About.css";
import Link from "next/link";

export default function About() {
  const [activeSection, setActiveSection] = useState("intro");

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".content-section");
      let current = "";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="genocide-awareness-page">
      <NormalNavbar />
      
      {/* Hero Section with Impactful Image */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Bangladesh Genocide</h1>
          <p className="hero-subtitle">A Call for Recognition and Justice</p>
          <button 
            className="cta-button" 
            onClick={() => scrollToSection("take-action")}
          >
            Take Action Now
          </button>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="quick-nav">
        <div className="max-width-container">
          <ul className="nav-list">
            <li 
              className={activeSection === "intro" ? "active" : ""}
              onClick={() => scrollToSection("intro")}
            >
              Introduction
            </li>
            <li 
              className={activeSection === "historical-context" ? "active" : ""}
              onClick={() => scrollToSection("historical-context")}
            >
              Historical Context
            </li>
            <li 
              className={activeSection === "independence" ? "active" : ""}
              onClick={() => scrollToSection("independence")}
            >
              Fight for Independence
            </li>
            <li 
              className={activeSection === "recognition" ? "active" : ""}
              onClick={() => scrollToSection("recognition")}
            >
              Recognition Efforts
            </li>
            <li 
              className={activeSection === "persecution" ? "active" : ""}
              onClick={() => scrollToSection("persecution")}
            >
              Religious Persecution
            </li>
            <li 
              className={activeSection === "take-action" ? "active" : ""}
              onClick={() => scrollToSection("take-action")}
            >
              Take Action
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <div className="max-width-container">
          {/* Introduction Section */}
          <section id="intro" className="content-section">
            <div className="section-container">
              <div className="text-content">
                <h2 className="section-title">A Forgotten Tragedy</h2>
                <div className="section-divider"></div>
                <p className="lead-paragraph">
                  The 1971 Bangladesh Genocide led to the deaths of nearly 3 million people. 
                  Decades later, activists continue to push for global recognition of this atrocity.
                </p>
                <div className="stat-grid">
                  <div className="stat-box">
                    <h3>3 Million</h3>
                    <p>Lives Lost</p>
                  </div>
                  <div className="stat-box">
                    <h3>10 Million</h3>
                    <p>Refugees</p>
                  </div>
                  <div className="stat-box">
                    <h3>200,000+</h3>
                    <p>Women Assaulted</p>
                  </div>
                  <div className="stat-box">
                    <h3>50+ Years</h3>
                    <p>Without Recognition</p>
                  </div>
                </div>
              </div>
              <div className="media-content">
                <img 
                  src="/memorial.jpg" 
                  alt="Bangladesh Genocide Memorial" 
                  className="feature-image"
                />
                <p className="image-caption">
                  Memorial to victims of the 1971 Bangladesh Genocide
                </p>
              </div>
            </div>
          </section>

          {/* Historical Context Section */}
          <section id="historical-context" className="content-section">
            <div className="section-container">
              <div className="media-content">
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">1947</div>
                    <div className="timeline-content">
                      Indian Subcontinent partition creates East and West Pakistan
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">1952</div>
                    <div className="timeline-content">
                      Bengali Language Movement begins
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">1970</div>
                    <div className="timeline-content">
                      Awami League wins elections but denied power
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">March 25, 1971</div>
                    <div className="timeline-content">
                      Operation Searchlight begins the genocide
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">December 16, 1971</div>
                    <div className="timeline-content">
                      Bangladesh achieves independence
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-content">
                <h2 className="section-title">Historical Context</h2>
                <div className="section-divider"></div>
                <p>
                  The roots of the genocide trace back to <strong>1947</strong> when the Indian subcontinent 
                  was partitioned. <strong>West Pakistan</strong> politically and economically dominated 
                  <strong> East Pakistan</strong>, leading to tensions that culminated in the independence 
                  movement of 1971.
                </p>
                <p>
                  Despite being separated by 1,000 miles of Indian territory, a shared religion was deemed 
                  sufficient basis for a unified Pakistan. However, linguistic, cultural, and economic 
                  disparities grew over the decades.
                </p>
                <p>
                  On <strong>March 25, 1971</strong>, the Pakistani military launched <em>Operation Searchlight</em> to 
                  suppress the independence movement. This led to mass killings, displacement, and 
                  a severe humanitarian crisis.
                </p>
                <blockquote className="historical-quote">
                  "The Pakistani military's actions in East Pakistan in 1971 constitute one of the most 
                  significant cases of state-sponsored mass murder in the twentieth century."
                  <cite>— R.J. Rummel, Political Scientist</cite>
                </blockquote>
              </div>
            </div>
          </section>

          {/* Independence Section */}
          <section id="independence" className="content-section">
            <div className="section-container">
              <div className="text-content">
                <h2 className="section-title">The Fight for Independence</h2>
                <div className="section-divider"></div>
                <p>
                  Despite mass violence, Bangladeshis resisted through civilian uprisings and organized forces.
                  The <strong>Mukti Bahini</strong> (Liberation Army) formed to fight the Pakistani military, 
                  engaging in guerrilla warfare across the country.
                </p>
                <p>
                  In December 1971, West Pakistan launched a final offensive, systematically killing 
                  approximately 1,000 intellectuals, including professors, journalists, doctors, and lawyers, 
                  in an attempt to cripple the new nation's future leadership.
                </p>
                <p>
                  Following India's intervention, <strong>Bangladesh was officially liberated on December 16, 1971</strong>, 
                  a day now celebrated as <strong>Bijoy Dibosh (Victory Day)</strong>.
                </p>
                <div className="key-figure">
                  <img src="/sheikh-mujibur.jpg" alt="Sheikh Mujibur Rahman" />
                  <div>
                    <h4>Sheikh Mujibur Rahman</h4>
                    <p>Founding leader of Bangladesh and recognized as "Father of the Nation"</p>
                  </div>
                </div>
              </div>
              <div className="media-content">
                <img 
                  src="/liberation-war.jpg" 
                  alt="Bangladesh Liberation War" 
                  className="feature-image"
                />
                <p className="image-caption">
                  Freedom fighters of the Mukti Bahini during the Liberation War
                </p>
              </div>
            </div>
          </section>

          {/* Recognition Efforts Section */}
          <section id="recognition" className="content-section">
            <div className="section-container">
              <div className="media-content">
                <img 
                  src="/UN_bangladesh_protest.jpg" 
                  alt="Protests at United Nations" 
                  className="feature-image"
                />
                <p className="image-caption">
                  Activists rally for genocide recognition at the United Nations
                </p>
              </div>
              <div className="text-content">
                <h2 className="section-title">The Ongoing Struggle for Recognition</h2>
                <div className="section-divider"></div>
                <p>
                  The <strong>United Nations</strong> has yet to formally recognize the Bangladesh Genocide.
                  In Geneva, <strong>Sanchita Haque</strong>, Bangladesh's Deputy Permanent Representative, urged recognition 
                  to hold the Pakistani Army accountable.
                </p>
                <p>
                  In September 2022, activists gathered outside the <strong>United Nations Headquarters</strong> in New York, 
                  demanding recognition of the <strong>Bangladesh Genocide of 1971</strong>.
                </p>
                <p>
                  On October 14, 2022, <strong>Representative Steve Chabot</strong> introduced <em>Resolution 1430</em> 
                  to the U.S. House of Representatives, seeking official recognition of the Bangladesh Genocide.
                </p>
                <p>
                  Beyond historical acknowledgment, recognition could reinforce <strong>global justice</strong> and prevent future atrocities.
                </p>
                <div className="recognition-status">
                  <h4>Current Recognition Status:</h4>
                  <ul>
                    <li><span className="status pending">Pending</span> United Nations</li>
                    <li><span className="status pending">Pending</span> United States</li>
                    <li><span className="status recognized">Recognized</span> Bangladesh</li>
                    <li><span className="status recognized">Recognized</span> India</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Religious Persecution Section */}
          <section id="persecution" className="content-section">
            <div className="section-container">
              <div className="text-content">
                <h2 className="section-title">Religious Persecution</h2>
                <div className="section-divider"></div>
                <p>
                  During the genocide, religious minorities, particularly Hindus, were specifically targeted.
                  The systematic persecution was designed to eliminate religious diversity in East Pakistan.
                </p>
                <p>
                  Religious violence remains an issue in Bangladesh. The <strong>Hindu population</strong> has dropped from 
                  <strong> 20% in 1971 to just 8.9% today</strong>, with thousands fleeing due to persecution.
                </p>
                <p>
                  In October 2021, <strong>Durga Puja celebrations</strong> were marred by attacks on Hindu temples, 
                  killings, and mass arrests. Many minorities now celebrate under heavy security.
                </p>
                <div className="chart-container">
                  <h4>Hindu Population Decline in Bangladesh</h4>
                  <div className="population-chart">
                    <div className="chart-bar">
                      <div className="bar-fill" style={{ width: "20%" }}></div>
                      <div className="bar-label">1971: 20%</div>
                    </div>
                    <div className="chart-bar">
                      <div className="bar-fill" style={{ width: "13.5%" }}></div>
                      <div className="bar-label">1981: 13.5%</div>
                    </div>
                    <div className="chart-bar">
                      <div className="bar-fill" style={{ width: "10.5%" }}></div>
                      <div className="bar-label">1991: 10.5%</div>
                    </div>
                    <div className="chart-bar">
                      <div className="bar-fill" style={{ width: "9.2%" }}></div>
                      <div className="bar-label">2011: 9.2%</div>
                    </div>
                    <div className="chart-bar">
                      <div className="bar-fill" style={{ width: "8.9%" }}></div>
                      <div className="bar-label">2022: 8.9%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-content">
                <img 
                  src="/hindu_temple_damage.jpeg" 
                  alt="Damaged Hindu Temple" 
                  className="feature-image"
                />
                <p className="image-caption">
                  A Hindu temple damaged during recent violence in Bangladesh
                </p>
              </div>
            </div>
          </section>

          {/* Take Action Section */}
          <section id="take-action" className="content-section action-section">
            <h2 className="section-title centered">A Call to Action</h2>
            <div className="section-divider centered"></div>
            <p className="centered-text">
              Join us in the fight for recognition and justice for the victims of the Bangladesh Genocide.
              Your support can make a difference in ensuring this historical atrocity is acknowledged globally.
            </p>
            
            <div className="action-grid">
              {/* <div className="action-card">
                <div className="action-icon">
                  <span className="material-icon">Campaign</span>
                </div>
                <h3>Raise Awareness</h3>
                <p>Share information about the Bangladesh Genocide on social media and in your community.</p>
                <button className="action-button">Share Now</button>
              </div> */}
              
              {/* <div className="action-card">
                <div className="action-icon">
                  <span className="material-icon">Petition</span>
                </div>
                <h3>Sign the Petition</h3>
                <p>Add your voice to the petition urging the UN and US Congress to recognize the genocide.</p>
                <button className="action-button">Sign Petition</button>
              </div> */}
              
              <div className="action-card">
                <div className="action-icon">
                  <span className="material-icon">Donate</span>
                </div>
                <h3>Support Organizations</h3>
                <p>Donate to organizations working on minority rights and historical justice in Bangladesh.</p>
                <Link href="/Donate"><button className="action-button">Donate</button></Link>
              </div>
              
              <div className="action-card">
                <div className="action-icon">
                  <span className="material-icon">Share</span>
                </div>
                <h3>Spread Awareness</h3>
                <p>Share stories and facts about the genocide on social media to educate others and amplify voices.</p>
                <button className="action-button">Share Now</button>
              </div>
            </div>
            
            {/* <div className="newsletter-container">
              <h3>Stay Informed</h3>
              <p>Subscribe to our newsletter to receive updates on recognition efforts and upcoming events.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email address" />
                <button className="submit-button">Subscribe</button>
              </div>
            </div> */}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}