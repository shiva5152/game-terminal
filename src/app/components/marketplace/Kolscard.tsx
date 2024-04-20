'use client'
import React,{ useState,useEffect } from "react";
import axios from "axios";
import Namecard from "./Namecard"; 

interface Card {
  id: number;
  name: string;
  category: string;
  description: string;
  banner: string;
  price: number;
}

function Kolscard() {

  

  const [cardsData, setCardsData] = useState<Card[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/profile/allprofiles`);
        setCardsData(response.data.profiles); 
        console.log(response.data.profiles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); 

  const screenWidth = window.innerWidth;
  const chunkSize = screenWidth < 768 ? 2 : 4;

  // const chunkedData = [];
  // for (let i = 0; i < cardsData.length; i += chunkSize) {
  //   chunkedData.push(cardsData.slice(i, i + chunkSize));
  // }

  return (
    <div>
      <div className="sm:flex sm:w-full sm:flex-wrap justify-center flex flex-wrap">
        {cardsData?.map((card, index) => (
          <div key={card.id} className={`sm:flex-1 flex-wrap flex w-1/2 ${index % 4 === 0 ? 'flex-row' : 'flex-col'}`}>
            <Namecard
              name={card.name}
              description={card.description}
              category={card.category}
              imageUrl={`${process.env.NEXT_PUBLIC_S3_DOMAIN}/${card.banner}`}
              price={card.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default Kolscard;
