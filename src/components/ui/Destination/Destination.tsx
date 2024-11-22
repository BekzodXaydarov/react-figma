import { useMemo, useState } from "react";
import "./Destination.css";
import { DestinationData } from "../../utils";

const DestinationState = (n: string) => {
  if (n === "state1") {
    return "card1";
  } else if (n === "state2" || n === "state3") {
    return "card2";
  } else if (n === "state4") {
    return "card3";
  }
};

const Destination = () => {
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
        <div className={`destination-card`}></div>
      </div>
    </>
  );
};

export default Destination;
