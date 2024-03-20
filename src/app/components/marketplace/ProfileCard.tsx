import React from "react";
import Card from "../games/cards";

function Cardholder() {
  // Array of card data
  const cardsData = [
    {
      id: 1,
      name: "Undead Blocks",
      description: "Description for Card 1",
      imageUrl: "/undead.png",
    },
    {
      id: 2,
      name: "Sharpnel",
      description: "Description for Card 2",
      imageUrl: "/sharpnel.png",
    },
    {
      id: 3,
      name: "Arsenal",
      description: "Description for Card 3",
      imageUrl: "/arsenal.png",
    },
    {
      id: 4,
      name: "Out Post",
      description: "Description for Card 4",
      imageUrl: "/outpost.png",
    },
    {
      id: 5,
      name: "Out Post",
      description: "Description for Card 5",
      imageUrl: "/outpost.png",
    },
    {
      id: 6,
      name: "Out Post",
      description: "Description for Card 6",
      imageUrl: "/outpost.png",
    },
    {
      id: 7,
      name: "Out Post",
      description: "Description for Card 7",
      imageUrl: "/outpost.png",
    },
    {
      id: 8,
      name: "Out Post",
      description: "Description for Card 8",
      imageUrl: "/outpost.png",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {cardsData.map((card) => (
        <div key={card.id}>
          <Card name={card.name} description={card.description} imageUrl={card.imageUrl} />
        </div>
      ))}
    </div>
  );
}

export default Cardholder;
