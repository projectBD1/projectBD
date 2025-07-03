'use client';
import { useRouter } from 'next/navigation';
import '../Homepage_styles/Statistics.css';

const Statistics = () => {
  const router = useRouter();
  const handleLogoClick = () => {
      router.push('/about'); // Navigate to the about page
  };

  return (
    <div className="statistics">
      <h1 className="stat-header">What is Happening In Bangladesh?</h1>
      <div className="stat-container">
        <div className="stat-box box1">
          <img
            className="stat-box-img"
            //src="widespread_impact.png"
            src="temporary_temple.webp"
            loading="lazy"
          />
          <div className="stat-box-text-container">
            <h2>Widespread Geographic Impact</h2>
            <p>
              Violent attacks were reported in over 35 disinct locations across 8 divisions of Bangladesh.
             
            </p>
          </div>
        </div>
        <div className="stat-box box2">
          <img
            className="stat-box-img"
            //src="business_attack2.png"
            src="bangladeshprotest.avif"
            loading="lazy"
          />
          <div className="stat-box-text-container">
            <h2>Scale of Property and Religious Site Attacks</h2>
            <p>
              Just last year, over 100 Hindu homes and businesses were looted, and over 20 temples were vandalized.
            </p>
          </div>
        </div>
        <div className="stat-box box3">
          <img
            className="stat-box-img"
            //src="homes_attack.png"
            src="temporary_temple2.webp"
            loading="lazy"
          />
          <div className="stat-box-text-container">
            <h2>Spike in Incidents During Political Instability</h2>
            <p>
              In Octover 2024, 35+ incidents were reported and violence started to spike further.
            </p>
          </div>
        </div>
      </div>
      <button className="stat-button" onClick={handleLogoClick}>Learn More</button>
    </div>
  );
};

export default Statistics;
