"use client";
import React, { useState } from "react";
import { Accept, useDropzone } from "react-dropzone";
import { addWeapontails } from "@/redux/features/game/api";
import shortUUID from "short-uuid";

const AddWeaponDetailsPage: React.FC = () => {
  const [weaponDetails, setweaponDetails] = useState<WeaponDetails>({
    name:"",
    price: "",
    code:"",
    crypto:""

  });

  const [banner, setBanner] = useState<File | null>(null);

  const [loading, setLoading] = useState<boolean>(false);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setweaponDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      weaponDetails,
      banner,
    });
    setLoading(true);
    const { name, crypto, price, code } = weaponDetails;
    if (
      !name ||
      !crypto||
      !price||
      !code||
      !banner
    ){
      alert("Please fill all the fields all fields are required");
      return;
    }

    await addWeapontails({
      name,
      code,
      price,
      crypto,
      banner,
      uuid: shortUUID.generate(),
    });
    setLoading(false);
    setweaponDetails({
      name: "",
      price: "",
      crypto: "",
      code: "",
    });
    setBanner(null);
    alert("Weapons Data added successfully");
      return;
  };

  const {
    getRootProps: getBannerRootProps,
    getInputProps: getBannerInputProps,
  } = useDropzone({
    accept: "image/*" as any,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length) setBanner(acceptedFiles[0]);
    },
  });


  return (
    <div className="bg-[#161616] w-full my-10 flex justify-center items-center flex-col text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Add Weapons Details</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-wrap justify-between gap-5"
      >
        <div className=" flex flex-wrap justify-between gap-5 ">
          <div className="mb-4 w-[49%]">
            <label htmlFor="title" className="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name" 
              value={weaponDetails.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              required
            />
          </div>
          <div className="mb-4 w-[49%]">
            <label htmlFor="title" className="block mb-2">
              Code:
            </label>
            <input
              type="text"
              id="code"
              name="code"
              value={weaponDetails.code}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              required
            />
          </div>
          <div className="mb-4 w-[49%]">
            <label htmlFor="title" className="block mb-2">
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={weaponDetails.price}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              required
            />
          </div>
          <div className="mb-4 w-[49%]">
            <label htmlFor="title" className="block mb-2">
              Crypto:
            </label>
            <input
              type="text"
              id="crypto"
              name="crypto"
              value={weaponDetails.crypto}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              required
            />
          </div>

          <div className="mb-4 w-[100%]">
            <label htmlFor="title" className="block mb-2">
              Banner Image:
            </label>
            <div
              {...getBannerRootProps()}
              className="mb-4 border-2 px-3 py-2 rounded border-dotted"
            >
              <input {...getBannerInputProps()} />
              <p>Drag 'n' drop banner image here, or click to select image</p>
            </div>
            {banner && (
              <div className=" flex gap-2 flex-wrap mt-3">
                <div
                  onClick={() => setBanner(null)}
                  title="Click to remove"
                  className="text-gray-800 text-center flex  cursor-pointer bg-white rounded-[2rem] p-2 px-3"
                >
                  <span className="">{banner.name}</span>
                </div>
              </div>
            )}
          </div>
          

        

        <div className="w-full flex justify-center items-center">
          <button
            onClick={handleSubmit}
            type="submit"
            className=" button-bg mt-4  text-white px-11 py-8 rounded"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default AddWeaponDetailsPage;

interface WeaponDetails {
  name: string;
  code: string;
  price: string;
  crypto: string;
}
