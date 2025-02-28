import '../Homepage_styles/Images.css'
const Images = () => {
    return(
        <div className='homepage-images'>
            <div className='homepage-images-main-container'>
                <div className='homepage-images-small-container'>
                    <img className='homepage-images-small' src='fire_violence.webp'/>
                    <img className='homepage-images-small' src='man_fleeing.avif'/>
                </div>
                <img className='homepage-images-tall' src='right_to_live.jpg'/>
                <div className='homepage-images-small-container'>
                    <img className='homepage-images-small' src='military.webp'/>
                    <img className='homepage-images-small' src='justice.webp'/>
                </div>
                <img className='homepage-images-tall' src='prayer.jpg'/>
            </div>
        </div>
    )
}; export default Images