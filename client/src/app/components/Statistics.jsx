import './Statistics.css'
const Statistics = () => {
    return(
        <div className='statistics'>
            <h1>What is Happening In Bangladesh?</h1>
            <div className='stat-box-container'>
                <div className='stat-box'>
                    <h1>1/10 of bananas get eaten</h1>
                </div>
                <div className='stat-box'>
                    <h1>2/10 of bananas get eaten</h1>
                </div>
                <div className='stat-box'>
                    <h1>3/10 of bananas get eaten</h1>
                </div>
                <div className='stat-box'>
                    <h1>4/10 of bananas get eaten</h1>
                </div>
            </div>
            <button className='stat-button'>Learn more</button>
        </div>
    )
}; export default Statistics