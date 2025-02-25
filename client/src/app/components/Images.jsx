import './Images.css'
const Images = () => {
    return(
        <div className='homepage-images'>
            <div className='homepage-images-main-container'>
                <div className='homepage-images-small-container'>
                    <img className='homepage-images-small' src='fire_in_hand.png'/>
                    <img className='homepage-images-small' src='temporary_temple2.webp'/>
                </div>
                <img className='homepage-images-tall' src='temporary_temple.webp'/>
                <div className='homepage-images-small-container'>
                    <img className='homepage-images-small' src='fire_in_hand.png'/>
                    <img className='homepage-images-small' src='temporary_temple2.webp'/>
                </div>
                <img className='homepage-images-tall' src='temporary_temple.webp'/>
            </div>
        </div>
    )
}; export default Images