import axios from "axios";
import React, { useState, useEffect } from "react";

const JJ = () => {
  const CardList = () => {
    const [cards, setCards] = useState([]);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [cardTypeFilter, setCardTypeFilter] = useState("");

    useEffect(() => {
      // Fetch data from API
      axios.get("http://localhost:5000/data").then((res) => {
        setCards(res.data);
      });
    }, []);

    const handleLoadMore = () => {
      // Load more data from API
      setPage(page + 1);
    };

    const handleSearch = (event) => {
      // Update search term
      setSearchTerm(event.target.value);
    };

    const handleCardTypeFilter = (event) => {
      // Update card type filter
      setCardTypeFilter(event.target.value);
    };

    const filteredCards = cards.filter((card) => {
      // Filter cards based on search term and card type
      return (
        card.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (cardTypeFilter === "" || cardTypeFilter === card.card_type)
      );
    });

    return (
      <div>
        <input
          type="text"
          placeholder="Search by card name"
          onChange={handleSearch}
        />
        <select onChange={handleCardTypeFilter}>
          <option value="">All</option>
          <option value="burner">Burner</option>
          <option value="subscription">Subscription</option>
        </select>

        {filteredCards.map((card, index) => (
          <div key={index}>
            <div>{card.name}</div>
            <div>{card.budget_name}</div>
            <div>{card.owner_id}</div>
            <div>{card.spent.value}</div>
            <div>{card.available_to_spend.value}</div>
            <div>{card.card_type}</div>
            {card.card_type === "burner" && <div>Expiry: {card.expiry}</div>}
            {card.card_type === "subscription" && (
              <div>Limit: {card.limit}</div>
            )}
            <div>{card.status}</div>
          </div>
        ))}

        <button onClick={handleLoadMore}>Load More</button>
      </div>
    );
  };
};

export default JJ;
