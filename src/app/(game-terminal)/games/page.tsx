import React from "react";
import Card from "../../components/games/cards";
import Header1 from "../../components/games/header1";
import Header2 from "../../components/games/header2";
import Header3 from "../../components/games/header3";
import Header4 from "../../components/games/header4";
import Cardholder from "../../components/games/Cardholder";
import ImageGrid from "../../components/games/ImageGrid";
import ImageGrid2 from "../../components/games/ImageGrid2";

const page = () => {
  return (
    <div className="sm:p-6 p-4">
      <Header1 />
      <div className="sm:p-4">
        <Cardholder />
      </div>
      <Header2 />
      <div className="sm:p-4">
        <ImageGrid />
      </div>
      <Header3 />
      <div>
        <ImageGrid2 />
      </div>
      <Header4 />
      <div className="sm:p-4">
        <Cardholder />
      </div>
    </div>
  );
};

export default page;
