"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format, set } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Editor } from "@tinymce/tinymce-react";
import { Accept, useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import instance from "@/config/axios";
import axios from "axios";
import { addGameDetails } from "@/redux/features/game/api";
import type { GameDetailsForm } from "@/types/user";
import shortUUID from "short-uuid";

const AddGameDetailsPage: React.FC = () => {
  const [gameDetails, setGameDetails] = useState<GameDetails>({
    title: "",
    developer: "",
    publisher: "",
    recommendedAge: "",
  });
  const [releaseDate, setReleaseDate] = React.useState<Date>();
  const [platform, setPlatform] = useState<string[]>([]);
  const [overView, setOverView] = useState<string>("");
  const [socialMedia, setSocialMedia] = useState([{ platform: "", link: "" }]);
  const [banner, setBanner] = useState<File | null>(null);
  const [previewImages, setPreviewImages] = useState<File[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setGameDetails((prevDetails) => ({
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
  const [platformSelected, setPlatformSelected] = useState<string>("");

  const handlePlatformChange = (value: string) => {
    if (!platform.includes(value)) setPlatform([...platform, value]);
    setPlatformSelected("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      gameDetails,
      platform,
      releaseDate,
      overView,
      socialMedia,
      banner,
      previewImages,
    });
    setLoading(true);
    const { title, developer, publisher, recommendedAge } = gameDetails;
    if (
      !title ||
      !developer ||
      !publisher ||
      !recommendedAge ||
      !releaseDate ||
      !overView ||
      !socialMedia.length ||
      !banner ||
      !previewImages.length
    ) {
      alert("Please fill all the fields all fields are required");
      return;
    }

    await addGameDetails({
      title,
      developer,
      publisher,
      recommendedAge,
      platform,
      releaseDate,
      overView,
      socialMedia,
      banner,
      previewImages,
      uuid: shortUUID.generate(),
    });
    setLoading(false);
    setGameDetails({
      title: "",
      developer: "",
      publisher: "",
      recommendedAge: "",
    });
    setPlatform([]);
    setReleaseDate(undefined);
    setOverView("");
    setSocialMedia([{ platform: "", link: "" }]);
    setBanner(null);
    setPreviewImages([]);
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

  const {
    getRootProps: getPreviewRootProps,
    getInputProps: getPreviewInputProps,
  } = useDropzone({
    accept: "image/*" as any,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length) setPreviewImages(acceptedFiles);
    },
  });

  return (
    <div className="bg-[#161616] w-full my-10 flex justify-center items-center flex-col text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Add Game Details</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-wrap justify-between gap-5"
      >
        <div className=" flex flex-wrap justify-between gap-5 ">
          <div className="mb-4 w-[49%]">
            <label htmlFor="title" className="block mb-2">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={gameDetails.title}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              required
            />
          </div>
          <div className="mb-4 w-[49%]">
            <label htmlFor="title" className="block mb-2">
              Developer:
            </label>
            <input
              type="text"
              id="developer"
              name="developer"
              value={gameDetails.developer}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              required
            />
          </div>
          <div className="mb-4 w-[49%]">
            <label htmlFor="title" className="block mb-2">
              Platform:
            </label>
            <Select
              value={platformSelected}
              onValueChange={handlePlatformChange}
            >
              <SelectTrigger className="bg-gray-800 text-white">
                <SelectValue placeholder="Select platforms" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white">
                <SelectGroup>
                  <SelectItem value="Web">Web</SelectItem>
                  <SelectItem value="Playstation">Playstation</SelectItem>
                  <SelectItem value="Desktop">Desktop</SelectItem>
                  <SelectItem value="Xbox">Xbox</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className=" flex gap-2 flex-wrap mt-3">
              {platform.map((p, index) => (
                <div
                  onClick={() => {
                    setPlatform(platform.filter((item) => item !== p));
                  }}
                  title="Click to remove"
                  className="text-gray-800 text-center flex  cursor-pointer bg-white rounded-[2rem] p-2 px-3"
                >
                  <span key={index} className="">
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4 w-[49%]">
            <label htmlFor="title" className="block mb-2">
              Release Date:
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "bg-gray-800 text-white w-full justify-start text-left font-normal",
                    !releaseDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {releaseDate ? (
                    format(releaseDate, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto  p-0">
                <Calendar
                  mode="single"
                  selected={releaseDate}
                  onSelect={setReleaseDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="mb-4 w-[49%]">
            <label htmlFor="title" className="block h mb-2">
              Recommended Age:
            </label>
            <input
              type="text"
              id="recommendedAge"
              name="recommendedAge"
              value={gameDetails.recommendedAge}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              required
            />
          </div>

          <div className="mb-4 w-[49%]">
            <label htmlFor="title" className="block mb-2">
              Publisher:
            </label>
            <input
              type="text"
              id="publisher"
              name="publisher"
              value={gameDetails.publisher}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              required
            />
          </div>

          <div className="mb-4 w-[49%]">
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
          <div className="mb-4 w-[49%]">
            <label htmlFor="title" className="block mb-2">
              Preview Images:
            </label>
            <div
              {...getPreviewRootProps()}
              className="mb-4 border-2 rounded px-3 py-2 border-dotted"
            >
              <input {...getPreviewInputProps()} />
              <p>
                Drag 'n' drop preview images here, or click to select images
              </p>
            </div>
            <div className=" flex gap-2 flex-wrap mt-3">
              {previewImages.map((p, index) => (
                <div
                  onClick={() =>
                    setPreviewImages(previewImages.filter((item) => item !== p))
                  }
                  title="Click to remove"
                  className="text-gray-800 text-center flex  cursor-pointer bg-white rounded-[2rem] p-2 px-3"
                >
                  <span key={index} className="">
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[100%]">
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
        <div className="mb-4 w-[100%]">
          <label htmlFor="title" className="block mb-2">
            Overview:
          </label>
          <Editor
            onEditorChange={(content) => setOverView(content)}
            apiKey="5ck4fbg67tr2aopfaf7zp04pl5d1z2xfvv15qu0uunww5ss5"
            init={{
              plugins:
                "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
            }}
            initialValue="Type here..."
          />
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
      </form>
    </div>
  );
};

export default AddGameDetailsPage;

interface GameDetails {
  title: string;
  recommendedAge: string;
  developer: string;
  publisher: string;
}
