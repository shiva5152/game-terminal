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

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      gameDetails,
      platform,
      releaseDate,
      overView,
      socialMedia,
    });
  };
  return (
    <div className="bg-gray-900 w-[80%] my-10 flex justify-center items-center flex-col text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Add Game Details</h1>
      <form onSubmit={handleSubmit} className="w-[60%]">
        <div className="mb-4">
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
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2">
            Platform:
          </label>
          <Select value={platformSelected} onValueChange={handlePlatformChange}>
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
        <div className="mb-4">
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
        <div className="mb-4">
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
        <div className="mb-4">
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
        <div className="mb-4">
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
        <div className="mb-4">
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
            initialValue="Welcome to TinyMCE!"
          />
        </div>

        <div>
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

        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
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
