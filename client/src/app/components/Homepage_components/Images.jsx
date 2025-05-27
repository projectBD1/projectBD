import '../Homepage_styles/Images.css';

const Images = () => {
  return (
    <div className="homepage-images">
      <div className="homepage-images-main-container">
        <div className="homepage-images-small-container">
          <img
            className="homepage-images-small"
            // src='/fire_violence.webp'
            src="/protest4.png"
            alt="Fire and Violence"
            loading="lazy"
          />
          <img
            className="homepage-images-small"
            // src='/man_fleeing.avif'
            src="protest5.png"
            alt="Man Fleeing"
            loading="lazy"
          />
        </div>
        <img
          className="homepage-images-tall"
          // src='/right_to_live.jpg'
          src="protest6.png"
          alt="Right to Live"
          loading="lazy"
        />
        <div className="homepage-images-small-container">
          <img
            className="homepage-images-small"
            // src='/military.webp'
            src="/protest2.png"
            alt="Military"
            loading="lazy"
          />
          <img
            className="homepage-images-small"
            // src='/justice.webp'
            src="/protest3.png"
            alt="Justice"
            loading="lazy"
          />
        </div>
        <img
          className="homepage-images-tall"
          // src='/prayer.jpg'
          src="/protest1.png"
          alt="Prayer"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Images;
