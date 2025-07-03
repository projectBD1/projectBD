import React, { useState } from 'react';

const CallToAction = ({ isOpen, onOpen }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

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

  const organizations = [
    {
      name: 'Coalition of Hindus of North America',
      url: 'https://cohna.org/',
      image: './CoalitionOfHindusOfNorthAmerica.jpg',
      alt: 'Coalition of Hindus of North America',
      description: 'Advocates for the fair and accurate representation of Hindus in public discourse and policy across North America.',
      imageMaxWidth: '120px'
    },
    {
      name: 'Hindu Students Council',
      url: 'https://www.hindustudentscouncil.org/',
      image: './HSC.png',
      alt: 'Hindu Students Council',
      description: 'Empowers Hindu youth through cultural education, community building, and leadership development on college campuses.',
      imageMaxWidth: '120px'
    },
    {
      name: 'Amnesty International',
      url: 'https://www.amnesty.org/',
      image: './AmnestyInternational.png',
      alt: 'Amnesty International',
      description: 'A global human rights organization fighting injustice and advocating for freedom, dignity, and equality for all.',
      imageMaxWidth: '200px'
    },
    {
      name: 'Minority Rights Group',
      url: 'https://minorityrights.org/',
      image: './MinorityRightsGroup.png',
      alt: 'Minority Rights Group',
      description: 'Defends the rights of ethnic, religious, and indigenous minorities through legal advocacy, training, and global campaigns.',
      imageMaxWidth: '120px'
    },
    {
      name: 'Human Rights Congress for Bangladesh Minorities',
      url: 'https://hrcbm.org/',
      image: '/HRCBM.png',
      alt: 'HRCBM',
      description: 'Documents and advocates against human rights violations targeting minorities in Bangladesh, especially Hindus.',
      imageMaxWidth: '120px'
    },
    {
      name: 'Sewa USA',
      url: 'https://sewausa.org/',
      image: '/SewaUSA.png',
      alt: 'Sewa USA',
      description: 'A Hindu faith-based humanitarian group providing disaster relief, education, and community development worldwide.',
      imageMaxWidth: '200px'
    },
    {
      name: 'Bangladesh Hindu Mandir',
      url: 'https://bangladeshhindumandir.org/',
      image: '/BangladeshHinduMandir.png',
      alt: 'Bangladesh Hindu Mandir',
      description: 'Preserves and promotes the religious and cultural traditions of Bangladeshi Hindus in the diaspora.',
      imageMaxWidth: '200px'
    },
    {
      name: 'Global Hindu Heritage Foundation',
      url: 'https://www.savetemples.org/',
      image: '/GlobalHinduHeritageFoundation.png',
      alt: 'GHHF',
      description: 'Works to preserve Hindu temples, traditions, and dharmic values while opposing religious conversions and temple control.',
      imageMaxWidth: '80px'
    },
    {
      name: 'Hindu American Foundation',
      url: 'https://www.hinduamerican.org/',
      image: '/HinduAmericanFoundation.png',
      alt: 'HAF',
      description: 'Champions civil rights, religious freedom, and accurate representation of Hinduism through education and policy advocacy.',
      imageMaxWidth: '200px'
    },
    {
      name: 'Hindus for Human Rights',
      url: 'https://www.hindusforhumanrights.org/',
      image: '/HindusForHumanRights.png',
      alt: 'Hindus for Human Rights',
      description: 'Promotes pluralism and social justice by challenging religious nationalism and standing up for human rights in South Asia.',
      imageMaxWidth: '200px'
    }
  ];

  // Show first 6 organizations initially, show all when showAll is true
  const displayedOrganizations = showAll ? organizations : organizations.slice(0, 6);

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
          backgroundColor: '#f8f9fa',
          padding: '80px 0',
          color: '#121212',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          <h2
            style={{
              fontSize: '2.5rem',
              textAlign: 'center',
              marginBottom: '60px',
              fontWeight: '700',
              color: '#1a1a1a',
            }}
          >
            Other Organizations Making an Impact
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '40px',
            }}
          >
            {displayedOrganizations.map((org, index) => (
              <a
                key={index}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div
                  style={{
                    ...cardBaseStyle,
                    ...(hoverIndex === index ? hoveredStyle : {}),
                    padding: '30px',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    height: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ textAlign: 'center', marginBottom: '20px', flexShrink: 0 }}>
                    <img
                      src={org.image}
                      alt={org.alt}
                      style={{
                        maxWidth: org.imageMaxWidth,
                        maxHeight: '80px',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <h3 style={{ 
                    marginBottom: '15px', 
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    flexShrink: 0,
                  }}>
                    {org.name}
                  </h3>
                  <p style={{ lineHeight: '1.6', color: '#666', flex: 1 }}>
                    {org.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {organizations.length > 6 && (
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <button
                onClick={() => setShowAll(!showAll)}
                style={{
                  backgroundColor: '#004830',
                  color: 'white',
                  padding: '12px 30px',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    backgroundColor: '#003a26',
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
