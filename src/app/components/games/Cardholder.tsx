import React from "react";
import Card from "./cards"

function Cardholder() {
  // Array of card data
  const cardsData = [
    { id: 1,
      name: "Undead Blocks",
      description: "Description for Card 1",
      imageUrl: "/undead.png" 
    },
    { id: 1,
      name: "Sharpnel",
      description: "Description for Card 1",
      imageUrl: "/sharpnel.png" 
    },
    { id: 1,
      name: "Aresnal",
      description: "Description for Card 1",
      imageUrl: "/arsenal.png" 
    },
    { id: 1,
      name: "Out Post",
      description: "Description for Card 1",
      imageUrl: "/outpost.png" 
    },
  ];

  return (
    <div className="flex justify-between">
      {cardsData.map((card) => (
        <div key={card.id} className="w-[calc(25% - 50px)] p-2">
          <Card name={card.name} description={card.description} imageUrl={card.imageUrl} />
        </div>
      ))}
    </div>
  );
}

export default Cardholder;
