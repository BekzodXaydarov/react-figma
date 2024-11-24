import { TourData } from "../../utils";
import "./Tour.css";

export interface TourI {}

const Tour: React.FC<TourI> = () => {
  return (
    <section className="tour container-padding" id="tours">
      {TourData.map((item, index) => {
        return (
          <div key={index} className="tour-card" data-aos="fade-up">
            <img src={item.img} alt={item.img} />
            <div className="tour-card-info">
              <h2>
                {item.title}
                <span>
                  {item.day} {item.day > 0 ? "days" : "day"} trip
                </span>
              </h2>
              <p>${item.price}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Tour;
