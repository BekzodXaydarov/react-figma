import { ActivityData } from "../../utils"
import "./Activity.css"

export interface ActivityI {}

const Activity:React.FC<ActivityI> = () => {
    return (
        <section className="activity container-padding">
            {
                ActivityData.map((item, index) => (
                    <div className="activity-card" key={index} data-aos="fade-up">
                        <img src={item.img2} alt={item.img2} className="card-img1" />
                        <img src={item.img} alt={item.img} className="card-img2" />
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                ))
            }
        </section>
    )
}

export default Activity