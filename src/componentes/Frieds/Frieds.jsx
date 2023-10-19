import React, { useContext } from "react";
import Cousine from "../Cousine/Cousine";
import { MonyContacts } from "../Graendpa/Graendpa";

const Frieds = () => {
  const [money, setMoney] = useContext(MonyContacts);
  return (
    <div>
      <p>Graendpa<small>{money}</small></p>
      <button onClick={()=> setMoney(money+ 100)}> money 100 taka</button>
      <h2>Friends</h2>
      <section className="dispaly">
        <Cousine>shakib all </Cousine>
        <Cousine>mhamude</Cousine>
      </section>
    </div>
  );
};

export default Frieds;
