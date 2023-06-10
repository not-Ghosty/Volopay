import React from "react";
import axios from "axios";
import x from "./body.module.css";
import img1 from "./credit-card.png";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Body = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/data").then((res) => {
      setCard(res.data);
      console.log(res.data);
    });
  }, [card]);

  const j = card.map((i) => (
    <Link to={`/yourcards/${i.owner_id}`} style={{ width: "20%" }}>
      <section className={x.Card}>
        <h3>Owner ID: {i.owner_id}</h3>
        <img src={img1} alt="" id={x.imgs} />
        <br />
        <br />
        <strong>Card type: {i.card_type}</strong>
      </section>
    </Link>
  ));
  return <div id={x.body}>{j}</div>;
};

export default Body;
