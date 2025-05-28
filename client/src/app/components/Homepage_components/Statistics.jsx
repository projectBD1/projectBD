import '../Homepage_styles/Statistics.css';

const Statistics = () => {
  return (
    <div className="statistics">
      <h1 className="stat-header">What is Happening In Bangladesh?</h1>
      <div className="stat-container">
        <div className="stat-box box1">
          <img
            className="stat-box-img"
            src="widespread_impact.png"
            loading="lazy"
          />
          <div className="stat-box-text-container">
            <h2>Widespread Geographic Impact</h2>
            <p>
              Violence and attacks were reported in over 35 distinct locations
              across all 8 administrative divisions of Bangladesh (Dhaka,
              Chittagong, Khulna, Mymensingh, Rajshahi, Rangpur, Sylhet,
              Barisal), showing a nationwide pattern of communal violence.
            </p>
          </div>
        </div>
        <div className="stat-box box2">
          <img
            className="stat-box-img"
            src="business_attack2.png"
            loading="lazy"
          />
          <div className="stat-box-text-container">
            <h2>Scale of Property and Religious Site Attacks</h2>
            <p>
             In 2024 100+ Hindu homes and businesses were looted and vandalized. 20+ temples and religious idols were attacked and destroyed.
            </p>
          </div>
        </div>
        <div className="stat-box box3">
          <img
            className="stat-box-img"
            src="homes_attack.png"
            loading="lazy"
          />
          <div className="stat-box-text-container">
            <h2>Spike in Incidents During Political Instability</h2>
            <p>
              After the resignation of the former Bangladeshi government in 2024, violence spiked. Incidents were reported in at least 6 districts, suggesting a coordinated wave. In October 2024, with 35+ incidents reported, it was the most violent month for Hindu communities in that year.
            </p>
          </div>
        </div>
      </div>
      <button className="stat-button">Learn More</button>
    </div>
  );
};

export default Statistics;
