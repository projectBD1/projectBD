import React, { useState } from 'react';

const CallToAction = ({ isOpen, onOpen }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const cardBaseStyle = {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    textAlign: 'center',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  };

  const hoveredStyle = {
    transform: 'scale(1.03)',
    boxShadow: '0px 8px 16px rgba(0,0,0,0.1)',
  };

  return (
    <div
      style={{
        backgroundColor: '#121212',
        width: '100%',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <section
        style={{
          backgroundColor: '#004830',
          padding: '80px 0',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          <h2
            style={{
              fontSize: '2.5rem',
              marginBottom: '20px',
            }}
          >
            Your Support Makes a Difference
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              marginBottom: '30px',
            }}
          >
            Every donation, no matter the size, contributes to positive change in
            our community.
          </p>
          <button
            style={{
              backgroundColor: 'white',
              color: '#004830',
              padding: '15px 40px',
              border: 'none',
              borderRadius: '30px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
            }}
          >
            Donate Now
          </button>
        </div>
      </section>

      <div style={{ marginTop: '100px' }}></div>

      <section
        style={{
          backgroundColor: '#ffffff',
          padding: '60px 0',
          color: '#121212',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            Other Organizations Making an Impact
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
            }}
          >
            <a
              href="https://cohna.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={() => setHoverIndex(0)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div
                style={{
                  ...cardBaseStyle,
                  ...(hoverIndex === 0 ? hoveredStyle : {}),
                }}
              >
                <img
                  src="./CoalitionOfHindusOfNorthAmerica.jpg"
                  alt="Coalition of Hindus of North America"
                  style={{ width: '30%', height: '80px', marginBottom: '15px' }}
                />
                <h3 style={{ marginBottom: '10px' }}>
                  Coalition of Hindus of North America
                </h3>
                <p>
                  Advocates for the fair and accurate representation of Hindus in
                  public discourse and policy across North America.
                </p>
              </div>
            </a>

            <a
              href="https://www.hindustudentscouncil.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={() => setHoverIndex(1)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div
                style={{
                  ...cardBaseStyle,
                  ...(hoverIndex === 1 ? hoveredStyle : {}),
                }}
              >
                <img
                  src="./HSC.png"
                  alt="Hindu Students Council"
                  style={{ width: '30%', height: '80px', marginBottom: '15px' }}
                />
                <h3 style={{ marginBottom: '10px' }}>Hindu Students Council</h3>
                <p>
                  Empowers Hindu youth through cultural education, community
                  building, and leadership development on college campuses.
                </p>
              </div>
            </a>

            <a
              href="https://www.amnesty.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={() => setHoverIndex(2)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div
                style={{
                  ...cardBaseStyle,
                  ...(hoverIndex === 2 ? hoveredStyle : {}),
                }}
              >
                <img
                  src="./AmnestyInternational.png"
                  alt="Amnesty International"
                  style={{ width: '200px', height: '80px', marginBottom: '15px' }}
                />
                <h3 style={{ marginBottom: '10px' }}>Amnesty International</h3>
                <p>
                  A global human rights organization fighting injustice and
                  advocating for freedom, dignity, and equality for all.
                </p>
              </div>
            </a>

            <a
              href="https://minorityrights.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={() => setHoverIndex(3)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div
                style={{
                  ...cardBaseStyle,
                  ...(hoverIndex === 3 ? hoveredStyle : {}),
                }}
              >
                <img
                  src="./MinorityRightsGroup.png"
                  alt="Minority Rights Group"
                  style={{ width: '30%', height: '80px', marginBottom: '15px' }}
                />
                <h3 style={{ marginBottom: '10px' }}>Minority Rights Group</h3>
                <p>
                  Defends the rights of ethnic, religious, and indigenous minorities
                  through legal advocacy, training, and global campaigns.
                </p>
              </div>
            </a>

            <a
              href="https://hrcbm.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={() => setHoverIndex(4)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div
                style={{
                  ...cardBaseStyle,
                  ...(hoverIndex === 4 ? hoveredStyle : {}),
                }}
              >
                <img
                  src="/HRCBM.png"
                  alt="HRCBM"
                  style={{ width: '30%', height: '80px', marginBottom: '15px' }}
                />
                <h3 style={{ marginBottom: '10px' }}>
                  Human Rights Congress for Bangladesh Minorities
                </h3>
                <p>
                  Documents and advocates against human rights violations targeting
                  minorities in Bangladesh, especially Hindus.
                </p>
              </div>
            </a>

            <a
              href="https://sewausa.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={() => setHoverIndex(5)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div
                style={{
                  ...cardBaseStyle,
                  ...(hoverIndex === 5 ? hoveredStyle : {}),
                }}
              >
                <img
                  src="/SewaUSA.png"
                  alt="Sewa USA"
                  style={{ width: '30%', height: '80px', marginBottom: '15px' }}
                />
                <h3 style={{ marginBottom: '10px' }}>Sewa USA</h3>
                <p>
                  A Hindu faith-based humanitarian group providing disaster relief,
                  education, and community development worldwide.
                </p>
              </div>
            </a>

            <a
              href="https://bangladeshhindumandir.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={() => setHoverIndex(6)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div
                style={{
                  ...cardBaseStyle,
                  ...(hoverIndex === 6 ? hoveredStyle : {}),
                }}
              >
                <img
                  src="/BangladeshHinduMandir.png"
                  alt="Bangladesh Hindu Mandir"
                  style={{ width: '30%', height: '80px', marginBottom: '15px' }}
                />
                <h3 style={{ marginBottom: '10px' }}>Bangladesh Hindu Mandir</h3>
                <p>
                  Preserves and promotes the religious and cultural traditions of
                  Bangladeshi Hindus in the diaspora.
                </p>
              </div>
            </a>

            <a
              href="https://www.savetemples.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={() => setHoverIndex(7)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div
                style={{
                  ...cardBaseStyle,
                  ...(hoverIndex === 7 ? hoveredStyle : {}),
                }}
              >
                <img
                  src="/GlobalHinduHeritageFoundation.png"
                  alt="GHHF"
                  style={{ width: '80px', height: '80px', marginBottom: '15px' }}
                />
                <h3 style={{ marginBottom: '10px' }}>Global Hindu Heritage Foundation</h3>
                <p>
                  Works to preserve Hindu temples, traditions, and dharmic values
                  while opposing religious conversions and temple control.
                </p>
              </div>
            </a>

            <a
              href="https://www.hinduamerican.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={() => setHoverIndex(8)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div
                style={{
                  ...cardBaseStyle,
                  ...(hoverIndex === 8 ? hoveredStyle : {}),
                }}
              >
                <img
                  src="/HinduAmericanFoundation.png"
                  alt="HAF"
                  style={{ width: '200px', height: '80px', marginBottom: '15px' }}
                />
                <h3 style={{ marginBottom: '10px' }}>Hindu American Foundation</h3>
                <p>
                  Champions civil rights, religious freedom, and accurate
                  representation of Hinduism through education and policy advocacy.
                </p>
              </div>
            </a>

            <a
              href="https://www.hindusforhumanrights.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={() => setHoverIndex(9)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div
                style={{
                  ...cardBaseStyle,
                  ...(hoverIndex === 9 ? hoveredStyle : {}),
                }}
              >
                <img
                  src="/HindusForHumanRights.png"
                  alt="Hindus for Human Rights"
                  style={{ width: '200px', height: '80px', marginBottom: '15px' }}
                />
                <h3 style={{ marginBottom: '10px' }}>Hindus for Human Rights</h3>
                <p>
                  Promotes pluralism and social justice by challenging religious
                  nationalism and standing up for human rights in South Asia.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
