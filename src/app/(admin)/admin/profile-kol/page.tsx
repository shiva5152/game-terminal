"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDropzone } from "react-dropzone";
import shortUUID from "short-uuid";
import { addProfileDetails } from "@/redux/features/game/api";

const AddProfile: React.FC = () => {
  const [profileDetails, setProfileDetails] = useState<ProfileDetails>({
    name: "",
    category: "",
    description: "",
    price: "",
  });


  const [socialMedia, setSocialMedia] = useState([{ platform: "", link: "" }]);
  const [banner, setBanner] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfileDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const addSocialMedia = () => {
    setSocialMedia([...socialMedia, { platform: "", link: "" }]);
  };

  const handleSocialMediaChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const values = [...socialMedia];
    values[index][event.target.name as "platform" | "link"] =
      event.target.value;
    setSocialMedia(values);
  };

  const handleCategoryChange = (value: string) => {
    setProfileDetails((prevDetails) => ({
      ...prevDetails,
      category: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { name, category, description, price } = profileDetails;
    if (!name || !category || !description || !socialMedia.length || !banner || !price) {
      alert("Please fill all the fields. All fields are required.");
      setLoading(false);
      return;
    }

    await addProfileDetails({
      name,
      category,
      description,
      price,
      socialMedia,
      banner,
      uuid: shortUUID.generate(),
    });
    setLoading(false);
    setProfileDetails({
      name: "",
      category: "",
      description: "",
      price: "",
    });
    setSocialMedia([{ platform: "", link: "" }]);
    setBanner(null);
    alert("Profile Created");
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
    <h1 className="text-2xl font-bold mb-4">Create Profile</h1>
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-row justify-between gap-5 mb-4">
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="title"
              name="name"
              placeholder="Enter Name"
              value={profileDetails.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              required
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="mb-4">
          <label htmlFor="category" className="block mb-2">
              Category:
            </label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Enter Category"
              value={profileDetails.category}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              required
            />
          </div>
        </div>
      </div>
  
      <div className="flex flex-row justify-between gap-5 mb-4">
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2">
              Profile Image:
            </label>
            <div {...getBannerRootProps()} className="mb-4 border-2 px-3 py-2 rounded border-dotted">
              <input {...getBannerInputProps()} />
              <p>Drag & drop profile image here OR click to select image</p>
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
        </div>
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2">
              Description:
            </label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Descritpion"
              value={profileDetails.description}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              required
            />
          </div>
        </div>
      </div>
  
      {/* Social Links */}
      <div className="w-full mb-4">
        <label htmlFor="title" className="block mb-2">
          Social links:
        </label>
        {socialMedia.map((social, index) => (
          <div key={index} className="flex gap-5 mt-2">
            <input
              type="text"
              name="platform"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              value={social.platform}
              onChange={(event) => handleSocialMediaChange(index, event)}
              placeholder="Enter platform"
              required
            />
            <input
              type="text"
              name="link"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white "
              value={social.link}
              onChange={(event) => handleSocialMediaChange(index, event)}
              placeholder="Enter link"
              required
            />
          </div>
        ))}
        <div className="w-full  flex justify-end my-3">
          <button className="  text-blue-600" onClick={addSocialMedia}>
            Add More
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2">
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2">
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Price"
              value={profileDetails.price}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              required
            />
          </div>
        </div>
  
      {/* Submit Button */}
      <div className="w-full flex justify-center items-center">
        <button
          onClick={handleSubmit}
          type="submit"
          className="button-bg mt-4 text-white px-11 py-8 rounded"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  </div>
  
  );
};

export default AddProfile;

interface ProfileDetails {
  name: string;
  category: string;
  description: string;
  price: string;
}
