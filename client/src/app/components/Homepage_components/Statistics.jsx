import '../Homepage_styles/Statistics.css';

const Statistics = () => {
    return (
        <div className='statistics'>
            <h1 className='stat-header'>What is Happening In Bangladesh?</h1>
            <div className='stat-container'>
                <div className='stat-box'>
                    <img className='stat-box-img' src='fire_in_hand.png'/>
                    <div className='stat-box-text-container'>
                        <h2>Statistic 1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae libero dui.</p>
                    </div>
                </div>
                <div className='stat-box'>
                    <img className='stat-box-img' src='temporary_temple.webp'/>
                    <div className='stat-box-text-container'>
                        <h2>Statistic 1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae libero dui.</p>
                    </div>
                </div>
                <div className='stat-box'>
                    <img className='stat-box-img' src='temporary_temple2.webp'/>
                    <div className='stat-box-text-container'>
                        <h2>Statistic 1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae libero dui.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
