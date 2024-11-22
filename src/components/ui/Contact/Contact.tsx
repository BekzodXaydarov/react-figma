import "./Contact.css"

export interface ContactI { }

const Contact: React.FC<ContactI> = () => {
    return (
        <div className="contact">
            <div className="contact-img">
                <img src="/images/contactImg.png" alt="" />
            </div>
            <div className="contact-info">
                <h1>Get Our Monthly
                    Newsletter</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <form>
                    <input type="text" placeholder="Input your emaill address in here" /> <button> <img src="/svgs/arrow.svg" alt="" /> </button>
                </form>
            </div>
        </div>
    )
}

export default Contact