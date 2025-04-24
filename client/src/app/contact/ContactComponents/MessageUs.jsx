import "../ContactStyles/MessageUs.css"
const MessageUs = () => {
    return(
        <div className="MessageUs">
            Message Us
            
            <form>
                <div className="MessageUs-row">
                    <input placeholder="First name"/>
                    <input placeholder="Last name"/>
                </div>
                <div className="MessageUs-row">
                    <input placeholder="Email"/>
                </div>
                <div className="MessageUs-row">
                    <input placeholder="Phone"/>
                </div>
                <div className="MessageUs-row">
                    <input placeholder="Country"/>
                </div>
                <div className="MessageUs-row">
                    <textarea placeholder="Your Message"/>
                </div>
                <button>Submit</button>
            </form>

        </div>
    )
}; export default MessageUs