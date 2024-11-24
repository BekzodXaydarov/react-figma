import Button from "../Button/Button";
import "./Destination.css";

export interface DestinationI {}

const Destination: React.FC<DestinationI> = () => {
  return (
    <>
      <section className="destination container-padding" id="destinations">
        <div className={`destination-card card1`} data-aos="fade-right">
          <h3>Malaysia</h3>
          <Button text="16 Tours" />
        </div>
        <div className="destination-right">
          <div className={`destination-card card2`} data-aos="fade-right">
            <h3>Dubai</h3>
            <Button text="16 Tours" />
          </div>
          <div className={`destination-card card3`} data-aos="fade-left">
            <h3>Greece</h3>
            <Button text="16 Tours" />
          </div>
          <div className={`destination-card card4`} data-aos="fade-up">
            <h3>Singapore</h3>
            <Button text="16 Tours" />
          </div>
        </div>
      </section>
      <div className="destination-footer">
        <Button text="View More" />
      </div>
    </>
  );
};

export default Destination;
