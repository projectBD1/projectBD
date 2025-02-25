import '../Homepage_styles/Mission.css'
const Mission = () => {
    return(
        <div className="mission">
            <div className='mission-container'>
            <img className='mission-img' src='fire_in_hand.png'/>
            <div className='mission-text'>
                <h1 className='mission-text-header'>Our Mission</h1>
                <p className='mission-text-body'>Our mission is to raise awareness about the ongoing religious persecution and destruction of Hindu communities in
                Bangladesh. By bringing global attention to these injustices, we aim to mobilize foreign aid to support organizations 
                dedicated to protecting Hindus and advocating for their rights. Additionally, we seek to apply political pressure on the
                Bangladeshi government to implement stronger measures ensuring the safety and security of its Hindu population.</p>
                <button className='mission-text-button'>Learn more</button>
            </div>
            </div>
        </div>
    )
}; export default Mission