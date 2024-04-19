'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { createGameTournament } from "@/redux/features/game/api";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useDropzone } from "react-dropzone";
import shortUUID from "short-uuid";

type FormData = {
  map: string;
  gameType: string;
  matchDuration: string;
  goalTarget: string;
  goalFor: string;
  bonusAmount: string;
  bonusChain: string;
  entryFeeAmount: string;
  entryFeeCurrency: string;
  xpLevel: string;
  players: string;
  reEntry: string;
  scheduleType: string;
};

interface Tournament {
  _id: string;
  tournamentId: string;
  map: string;
  gameType: string;
  scheduleType: string;
  matchDuration: number;
  reEntry: boolean;
  xpLevel: number;
  players: number;
  startDate: string;
}

interface EditPopupFormProps {
  tournament: Tournament;
  onSave: () => void;
  onCancel: () => void;
}

const EditPopupForm: React.FC<EditPopupFormProps> = ({ tournament, onSave, onCancel }) => {
  const [editedTournament, setEditedTournament] = useState<Tournament>(tournament);
  const [formData, setFormData] = useState<FormData>({
    map: "",
    gameType: "",
    matchDuration: "",
    goalTarget: "",
    goalFor: "",
    bonusAmount: "",
    bonusChain: "",
    entryFeeAmount: "",
    entryFeeCurrency: "",
    xpLevel: "",
    players: "",
    reEntry: "allowed",
    scheduleType: "",
  });
  const [releaseDate, setReleaseDate] = React.useState<Date>();

  const handleSetFormData = (property: keyof FormData, value: string) => {
    console.log("value", value);
    setFormData({
      ...formData,
      [property]: value,
    });
  };
  const handleValueChange = (property: keyof FormData) => (value: string) => {
    handleSetFormData(property, value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedTournament(prevState => ({
      ...prevState,
      [name]: name === 'reEntry' ? value === 'true' : value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`http://localhost:8000/tournaments/updateTournament/${editedTournament.tournamentId}`, {
        method: 'PATHCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedTournament),
      });

      if (response.ok) {
        onSave();
      } else {
        console.error('Failed to update tournament:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating tournament:', error);
    }
  };

  return (
    <div className="bg-gray-800 rounded-md p-4 mb-4 w-full">
      <h2 className="text-xl font-semibold mb-2 text-white">Edit Tournament</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <span className="text-gray-400">Tournament ID:</span>
          <input
            type="text"
            name="tournamentId"
            value={editedTournament.tournamentId}
            onChange={handleInputChange}
            className="text-white bg-gray-700 p-2 rounded"
          />
        </div>
        <div className="mb-4 w-[49%]">
          <label htmlFor="map" className="block mb-2">
            Map :
          </label>
          <Select
            value={editedTournament.map}
            onValueChange={value => setEditedTournament(prevState => ({ ...prevState, map: value }))}
          >
            <SelectTrigger className="bg-gray-800 text-white">
              <SelectValue placeholder="Select Map" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 text-white">
              <SelectGroup>
                <SelectItem value="IsLand">Is Land</SelectItem>
                <SelectItem value="Industry">Industry</SelectItem>
                <SelectItem value="Factory">Factory</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4 w-[49%]">
            <label htmlFor="title" className="block mb-2">
              Game Type:
            </label>
            <Select
              value={formData.gameType}
              onValueChange={handleValueChange("gameType")}
            >
              <SelectTrigger className="bg-gray-800 text-white">
                <SelectValue placeholder="Select game type" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white">
                <SelectGroup>
                  <SelectItem value="teamDeathMatch">
                    Team Death Match
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4 w-[49%]">
            <label htmlFor="title" className="block mb-2">
              Schedule Type:
            </label>
            <Select
              value={formData.scheduleType}
              onValueChange={handleValueChange("scheduleType")}
            >
              <SelectTrigger className="bg-gray-800 text-white">
                <SelectValue placeholder="Select Schedule Type" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white">
                <SelectGroup>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4 w-[49%]">
            <label htmlFor="title" className="block mb-2">
              Match Duration:
            </label>
            <Select
              value={formData.matchDuration}
              onValueChange={handleValueChange("matchDuration")}
            >
              <SelectTrigger className="bg-gray-800 text-white">
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white">
                <SelectGroup>
                  <SelectItem value="15">15 min</SelectItem>
                  <SelectItem value="30">30 min</SelectItem>
                  <SelectItem value="45">45 min</SelectItem>
                  <SelectItem value="60">60 min</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4 w-[49%]">
            <label htmlFor="title" className="block mb-2">
              Match Re-Entry:
            </label>
            <Select
              value={formData.reEntry}
              onValueChange={handleValueChange("reEntry")}
            >
              <SelectTrigger className="bg-gray-800 text-white">
                <SelectValue placeholder="Select Re-entry" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white">
                <SelectGroup>
                  <SelectItem value="allowed">Allowed</SelectItem>
                  <SelectItem value="notAllowed">Not Allowed</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4 w-[49%]">
            <label htmlFor="title" className="block h mb-2">
              Xp Level:
            </label>
            <input
              type="number"
              id="xpLevel"
              name="xpLevel"
              value={formData.xpLevel}
              onChange={(e) => handleSetFormData("xpLevel", e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-600 text-white"
            />
          </div>
          <div className="mb-4 w-[49%]">
            <label htmlFor="title" className="block h mb-2">
              Players:
            </label>
            <input
              type="number"
              id="players"
              name="players"
              value={formData.players}
              max={12}
              min={1}
              onChange={(e) => handleSetFormData("players", e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-600 text-white"
            />
          </div>
          <div className="mb-4 w-[49%]">
            <label htmlFor="title" className="block mb-2">
              Start Time:
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
      </div>
      <div className="w-[49%]">
            <label htmlFor="title" className="block h mb-2">
              Goal:
            </label>
            <div className="mb-4">
              <label htmlFor="title" className="block h mb-2">
                Target:
              </label>
              <input
                type="number"
                id="target"
                name="goalTarget"
                value={formData.goalTarget}
                onChange={(e) =>
                  handleSetFormData("goalTarget", e.target.value)
                }
                className="w-full px-3 py-2 rounded bg-gray-600 text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block h mb-2">
                For:
              </label>
              <Select
                value={formData.goalFor}
                onValueChange={handleValueChange("goalFor")}
              >
                <SelectTrigger className="bg-gray-600 text-white">
                  <SelectValue placeholder="Select Goal For" />
                </SelectTrigger>
                <SelectContent className="bg-gray-600 text-white">
                  <SelectGroup>
                    <SelectItem value="kills">Kills</SelectItem>
                    <SelectItem value="headshot">Head Shot</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
      <div className="flex justify-end mt-4">
        <button
          className="text-white bg-blue-500 px-4 py-2 rounded-md mr-2"
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
        <button
          className="text-white bg-red-500 px-4 py-2 rounded-md"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditPopupForm;
