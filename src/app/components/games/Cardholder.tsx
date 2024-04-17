import React from "react";
import Card from "./cards"

function Cardholder() {
  // Array of card data
  const cardsData = [
    { id: 1,
      name: "Undead_Blocks",
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
    // <div className="sm:flex flex flex-row  sm:flex-row sm:w-full justify-between">
    //   {cardsData.map((card) => (
    //     <div key={card.id} className="flex flex-col sm:w-[calc(25% - 50px)] w-full p-2">
    //       <Card name={card.name} description={card.description} imageUrl={card.imageUrl} />
    //     </div>
    //   ))}
    // </div>
    <div className="sm:flex flex  sm:w-full flex-wrap justify-between">
      {cardsData.map((card) => (
        <div key={card.id} className="flex flex-col w-1/2 sm:w-1/4 sm:w-[calc(50% - 20px)] p-2">
          <Card name={card.name} description={card.description} imageUrl={card.imageUrl} />
        </div>
      ))}
    </div>

  );
}

export default Cardholder;
