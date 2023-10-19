import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Frieds from "../Frieds/Frieds";
import Uncale from "../Uncale/Uncale";
import "./Graendpa.css";
export const RingContacts = createContext("golndring");
export const MonyContacts = createContext(0);

const Graendpa = () => {
  const raing = "diemon";
  const [money, setMoney] = useState(0)
  return (
    <div className="Graendpa">
      <p>Graendpa{money}</p>
      <h2>Graendpa</h2>
      <section className="dispaly">
        <MonyContacts.Provider value={[money, setMoney]}>
          <RingContacts.Provider value="golnd -ringe">
            <Father raing={raing}></Father>
            <Frieds></Frieds>
            <Uncale raing={raing}></Uncale>
          </RingContacts.Provider>
        </MonyContacts.Provider>
      </section>
    </div>
  );
};

export default Graendpa;
