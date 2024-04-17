import React from "react";
import ProfileLine from "../../components/profile/profileline";
import Images from "../../components/profile/image";
import Editpopup from "../../components/profile/editpopup";

const page = () => {
  return (
    <div>
      <div>
        <ProfileLine />
      </div>

      <div>
        <Images />
        <Images />
        <Images />

        {/* <Editpopup  closePopup={handleClosePopup}/> */}
      </div>
    </div>
  );
};

export default page;
