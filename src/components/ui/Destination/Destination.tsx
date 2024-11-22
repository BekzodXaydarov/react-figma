import Button from "../Button/Button";
import "./Destination.css";

export interface DestinationI {}

const Destination:React.FC<DestinationI> = () => {
  //   const [size, setSize] = useState<number>(4);
  //   const data = useMemo(() => {
  //     let count = 0;
  //     return DestinationData.map((item) => {
  //       count++;
  //       if (count === 5) {
  //         count = 0;
  //       }
  //       return { ...item, state: `state${count}` };
  //     });
  //   }, [DestinationData]);
  return (
    <>
      <div className="destination container-padding">
        <div className={`destination-card card1`} data-aos="fade-right">
          <h3>
            Malaysia
          </h3>
          <Button text="16 Tours" />
        </div>
        <div className="destination-right">
          <div className={`destination-card card2`} data-aos="fade-right">
            <h3>
              Dubai
            </h3>
            <Button text="16 Tours" />
          </div>
          <div className={`destination-card card3`} data-aos="fade-left">
            <h3>
              Greece
            </h3>
            <Button text="16 Tours" />
          </div>
          <div className={`destination-card card4`} data-aos="fade-up">
            <h3>
              Singapore
            </h3>
            <Button text="16 Tours" />
          </div>
        </div>
      </div>
      <div className="destination-footer">
      <Button text="View More" />
      </div>
    </>
  );
};

export default Destination;
