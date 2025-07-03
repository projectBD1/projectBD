import React, { useState } from 'react';

const CallToAction = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const cardBaseStyle = {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    textAlign: 'center',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  };

  const hoveredStyle = {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
    cursor: 'pointer',
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
            {[
              {
                href: "https://cohna.org/",
                imgSrc: "./CoalitionOfHindusOfNorthAmerica.jpg",
                alt: "Coalition of Hindus of North America",
                title: "Coalition of Hindus of North America",
                desc: "Advocates for the fair and accurate representation of Hindus in public discourse and policy across North America.",
              },
              {
                href: "https://www.hindustudentscouncil.org/",
                imgSrc: "./HSC.png",
                alt: "Hindu Students Council",
                title: "Hindu Students Council",
                desc: "Empowers Hindu youth through cultural education, community building, and leadership development on college campuses.",
              },
              {
                href: "https://www.amnesty.org/",
                imgSrc: "./AmnestyInternational.png",
                alt: "Amnesty International",
                title: "Amnesty International",
                desc: "A global human rights organization fighting injustice and advocating for freedom, dignity, and equality for all.",
              },
              {
                href: "https://minorityrights.org/",
                imgSrc: "./MinorityRightsGroup.png",
                alt: "Minority Rights Group",
                title: "Minority Rights Group",
                desc: "Defends the rights of ethnic, religious, and indigenous minorities through legal advocacy, training, and global campaigns.",
              },
              {
                href: "https://hrcbm.org/",
                imgSrc: "/HRCBM.png",
                alt: "HRCBM",
                title: "Human Rights Congress for Bangladesh Minorities",
                desc: "Documents and advocates against human rights violations targeting minorities in Bangladesh, especially Hindus.",
              },
              {
                href: "https://sewausa.org/",
                imgSrc: "/SewaUSA.png",
                alt: "Sewa USA",
                title: "Sewa USA",
                desc: "A Hindu faith-based humanitarian group providing disaster relief, education, and community development worldwide.",
              },
              {
                href: "https://bangladeshhindumandir.org/",
                imgSrc: "/BangladeshHinduMandir.png",
                alt: "Bangladesh Hindu Mandir",
                title: "Bangladesh Hindu Mandir",
                desc: "Preserves and promotes the religious and cultural traditions of Bangladeshi Hindus in the diaspora.",
              },
              {
                href: "https://www.savetemples.org/",
                imgSrc: "/GlobalHinduHeritageFoundation.png",
                alt: "GHHF",
                title: "Global Hindu Heritage Foundation",
                desc: "Works to preserve Hindu temples, traditions, and dharmic values while opposing religious conversions and temple control.",
              },
              {
                href: "https://www.hinduamerican.org/",
                imgSrc: "/HinduAmericanFoundation.png",
                alt: "HAF",
                title: "Hindu American Foundation",
                desc: "Champions civil rights, religious freedom, and accurate representation of Hinduism through education and policy advocacy.",
              },
              {
                href: "https://www.hindusforhumanrights.org/",
                imgSrc: "/HindusForHumanRights.png",
                alt: "Hindus for Human Rights",
                title: "Hindus for Human Rights",
                desc: "Promotes pluralism and social justice by challenging religious nationalism and standing up for human rights in South Asia.",
              },
            ].map(({ href, imgSrc, alt, title, desc }, index) => (
              <a
                key={index}
                href={href}
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
                  }}
                >
                  <img
                    src={imgSrc}
                    alt={alt}
                    style={{ width: index === 2 ? '200px' : '30%', height: '80px', marginBottom: '15px' }}
                  />
                  <h3 style={{ marginBottom: '10px' }}>{title}</h3>
                  <p>{desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
