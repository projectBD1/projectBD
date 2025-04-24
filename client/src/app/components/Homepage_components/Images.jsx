import '../Homepage_styles/Images.css'

const Images = () => {
    return (
        <div className='homepage-images'>
            <div className='homepage-images-main-container'>
                <div className='homepage-images-small-container'>
                    <img
                        className='homepage-images-small'
                        src='/fire_violence.webp'
                        alt='Fire and Violence'
                        loading="lazy"
                    />
                    <img
                        className='homepage-images-small'
                        src='/man_fleeing.avif'
                        alt='Man Fleeing'
                        loading="lazy"
                    />
                </div>
                <img
                    className='homepage-images-tall'
                    src='/right_to_live.jpg'
                    alt='Right to Live'
                    loading="lazy"
                />
                <div className='homepage-images-small-container'>
                    <img
                        className='homepage-images-small'
                        src='/military.webp'
                        alt='Military'
                        loading="lazy"
                    />
                    <img
                        className='homepage-images-small'
                        src='/justice.webp'
                        alt='Justice'
                        loading="lazy"
                    />
                </div>
                <img
                    className='homepage-images-tall'
                    src='/prayer.jpg'
                    alt='Prayer'
                    loading="lazy"
                />
            </div>
        </div>
    )
};

export default Images