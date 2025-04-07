import React from "react";
import { useState } from "react";
import { TarotCard } from "../types";
import data from "../assets/tarotDeck.json";

const SoulDesires = () => {
  const deck = data.tarotDeck;
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(deck[0]);

  return (
    <div>
      <h1>Soul Desires Component is Working!</h1>
      <p>Deck Length: {deck.length}</p>
      {selectedCard && (
        <div>
          <h2>Selected Card:</h2>
          <p>Name: {selectedCard.name}</p>
          <p>Meaning: {selectedCard.meaning}</p>
          <p>Message: {selectedCard.message}</p>
          <p>Affirmation: {selectedCard.affirmation}</p>
          <p>Action Step: {selectedCard.actionStep}</p>
          {/* <img
            src={require(`../assets/tarot/${selectedCard.image}`)}
            alt={selectedCard.name}
            width={200}
            height={300}
          /> */}
          {/* Add more properties as needed */}
        </div>
      )}
    </div>
  );
};

export default SoulDesires;
