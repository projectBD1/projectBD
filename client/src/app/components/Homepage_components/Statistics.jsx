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
              Violent attacks occurred in 35+ locations across all 8 divisions in Bangladesh.

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
              Just last year, over 100 Hindu homes and businesses were looted, and over 20 temples were vandalized.
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
              In October last year, 35+ incidents were reported involving brutal assaults, destruction of property, and theft of Hindu goods.
            </p>
          </div>
        </div>
      </div>
      <button className="stat-button">Learn More</button>
    </div>
  );
};

export default Statistics;
