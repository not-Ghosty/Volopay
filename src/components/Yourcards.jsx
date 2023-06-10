import React from "react";
import axios from "axios";
import x from "./body.module.css";
import img1 from "./credit-card.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Yourcards = () => {
  const [card, setCard] = useState([]);
  let { index } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/data/${index}`).then((res) => {
      setCard(res.data);
      console.log(res.data);
    });
  }, [index]);

  return (
    <div>
      <section className={x.newcard}>
        <h3>Owner ID :{card.owner_id}</h3>

        <br />
        <br />
        <strong>Card type: {card.card_type}</strong>
        <br />
        {card.card_type === "burner" ? (
          <strong>Expiry:{card.expiry}</strong>
        ) : (
          <strong>Limit:{card.limit}</strong>
        )}
      </section>
    </div>
  );
};

export default Yourcards;
