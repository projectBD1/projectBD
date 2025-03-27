import Navbar from "../components/Navbar";
import Footer from "../components/Footer";  
import './About.css'; // Make sure to import the CSS file

export default function About() {
    return (
        <div className="container">
            <Navbar />
            <div className="max-width-container">
                <h1 className="title">
                    Bangladesh Genocide: A Call for Recognition
                </h1>
                <p className="intro-text">
                    The 1971 Bangladesh Genocide led to the deaths of nearly 3 million people. Decades later, 
                    activists continue to push for global recognition of this atrocity.
                </p>

                {/* Protests for Recognition */}
                <section className="section hover-effect" 
                    style={{ backgroundImage: "url('/images/protest.jpg')" }}>
                    <div className="section-content">
                        <div className="section-header">
                            <p>Protests for Recognition</p>
                            <p className="section-date">September, 2022</p>
                        </div>
                        <h2 className="subtitle">Protests for Recognition</h2>
                        <p className="section-text">
                            In September 2022, activists gathered outside the <strong>United Nations Headquarters</strong> in New York, 
                            demanding recognition of the <strong>Bangladesh Genocide of 1971</strong>. The genocide resulted in:
                        </p>
                        <ul className="section-list">
                            <li>~3 million deaths over eight months</li>
                            <li>Widespread sexual violence and religious persecution</li>
                            <li>Mass displacement and ethnic cleansing</li>
                        </ul>
                    </div>
                </section>

                {/* Historical Context */}
                <section className="section hover-effect"
                    style={{ backgroundImage: "url('/images/history.jpg')" }}>
                    <div className="section-content">
                        <div className="section-header">
                            <p>Historical Context</p>
                            <p className="section-date">1971</p>
                        </div>
                        <h2 className="subtitle">Historical Context</h2>
                        <p className="section-text">
                            The roots of the genocide trace back to <strong>1947</strong> when the Indian subcontinent was partitioned. 
                            <strong> West Pakistan</strong> politically and economically dominated <strong>East Pakistan</strong>, 
                            leading to tensions that culminated in the independence movement of 1971.
                        </p>
                        <p className="section-text">
                            On <strong>March 25, 1971</strong>, the Pakistani military launched <em>Operation Searchlight</em> to suppress the independence movement.  
                            This led to mass killings, displacement, and a severe humanitarian crisis.  
                        </p>
                    </div>
                </section>

                {/* The Fight for Independence */}
                <section className="section hover-effect"
                    style={{ backgroundImage: "url('/images/war.jpg')" }}>
                    <div className="section-content">
                        <div className="section-header">
                            <p>The Fight for Independence</p>
                            <p className="section-date">December, 1971</p>
                        </div>
                        <h2 className="subtitle">The Fight for Independence</h2>
                        <p className="section-text">
                            Despite mass violence, Bangladeshis resisted through civilian uprisings and organized forces.  
                            In December 1971, West Pakistan launched a final offensive, killing 1,000 intellectuals.  
                            However, following India’s intervention, <strong>Bangladesh was officially liberated on December 16, 1971</strong>,  
                            a day now celebrated as <strong>Bijoy Dibosh (Victory Day)</strong>.
                        </p>
                    </div>
                </section>

                {/* The Ongoing Struggle for Recognition */}
                <section className="section hover-effect"
                    style={{ backgroundImage: "url('/images/struggle.jpg')" }}>
                    <div className="section-content">
                        <div className="section-header">
                            <p>The Ongoing Struggle for Recognition</p>
                            <p className="section-date">October, 2022</p>
                        </div>
                        <h2 className="subtitle">The Ongoing Struggle for Recognition</h2>
                        <p className="section-text">
                            The <strong>United Nations</strong> has yet to formally recognize the Bangladesh Genocide.  
                            In Geneva, <strong>Sanchita Haque</strong>, Bangladesh’s Deputy Permanent Representative, urged recognition  
                            to hold the Pakistani Army accountable.
                        </p>
                        <p className="section-text">
                            Beyond historical acknowledgment, recognition could reinforce <strong>global justice</strong> and prevent future atrocities.  
                        </p>
                    </div>
                </section>

                {/* Religious Persecution */}
                <section className="religious-persecution-section">
                    <div className="section-background" style={{ backgroundImage: "url('/hindu_temple_attack.png')" }}>
                        <div className="section-content hover-effect">
                            <div className="section-header">
                                <p>Religious Persecution</p>
                                <p className="section-date">October, 2021</p>
                            </div>
                            <h2 className="subtitle">Religious Persecution in Bangladesh Today</h2>
                            <p className="section-text">
                                Religious violence remains an issue in Bangladesh. The <strong>Hindu population</strong> has dropped from 
                                <strong> 20% in 1971 to just 8.9% today</strong>, with thousands fleeing due to persecution.
                            </p>
                            <p className="section-text">
                                In October 2021, <strong>Durga Puja celebrations</strong> were marred by attacks on Hindu temples, killings, and mass arrests. Many minorities now celebrate under heavy security.
                            </p>
                        </div>
                    </div>
                </section>

                {/* A Call to Action */}
                <section className="religious-persecution-section">
                    <div className="section-background" style={{ backgroundImage: "url('/hindu_temple_attack.png')" }}>
                        <div className="section-content hover-effect">
                            <div className="section-header">
                                <p>A Call to Action</p>
                                <p className="section-date">October, 2022</p>
                            </div>
                            <h2 className="subtitle">A Call to Action</h2>
                            <p className="section-text">
                                On October 14, 2022, <strong>Representative Steve Chabot</strong> introduced <em>Resolution 1430</em>  
                                to the U.S. House of Representatives, seeking official recognition of the Bangladesh Genocide.
                            </p>
                            <p className="section-text">How You Can Help:</p>
                            <ul className="section-list">
                                <li>Raise awareness through social media and community discussions</li>
                                <li>Sign petitions urging the <strong>U.S. Congress</strong> and <strong>UN</strong> to recognize the genocide</li>
                                <li>Support organizations working on minority rights in Bangladesh</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            
        </div>
    );
}
