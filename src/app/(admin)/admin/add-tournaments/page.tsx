"use client";
import { DateTimePicker } from "@/components/ui/date-time-picker/date-time-picker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { giveDate } from "@/lib/giveDate";
import { createGameTournament } from "@/redux/features/game/api";
import React, { useState } from "react";
import { DateValue } from "react-aria";
import shortUUID from "short-uuid";

export type MyDate = DateValue & {
  hour: number;
  minute: number;
};

export type FormData = {
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

const AddGameDetailsPage: React.FC = () => {
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
  const [startDate, setStartDate] = React.useState<DateValue>();

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

  const [loading, setLoading] = useState<boolean>(false);
  console.log(startDate);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate) {
      alert("Please select start date");
      return;
    }
    const myDate = startDate as MyDate;
    const data = {
      tournamentId: shortUUID.generate(),
      map: formData.map,
      gameType: formData.gameType,
      matchDuration: parseInt(formData.matchDuration),
      goal: {
        target: parseInt(formData.goalTarget),
        targetOf: formData.goalFor,
      },
      reEntry: formData.reEntry === "allowed",
      bonus: {
        amount: parseInt(formData.bonusAmount),
        chain: formData.bonusChain,
      },
      xpLevel: parseInt(formData.xpLevel),
      entryFee: {
        amount: parseInt(formData.entryFeeAmount),
        currency: formData.entryFeeCurrency,
      },
      players: parseInt(formData.players),
      startDate: giveDate(
        myDate.year,
        myDate.month,
        myDate.day,
        myDate.hour,
        myDate.minute,
        0,
        0
      ),
      scheduleType: formData.scheduleType,
    };
    console.log(data);
    setLoading(true);
    try {
      await createGameTournament(data);
      setFormData({
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
      setStartDate(undefined);
      alert("Game Details added successfully");
    } catch (e) {
      console.error(e);
      alert("Failed to add game details");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#161616] w-full my-10 flex justify-center items-center flex-col text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Add Tournaments</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-wrap justify-between "
      >
        <div className="w-full flex flex-wrap justify-between gap-5 ">
          <div className="mb-4 w-[49%]">
            <label htmlFor="title" className="block mb-2">
              Map :
            </label>
            <Select
              value={formData.map}
              onValueChange={handleValueChange("map")}
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
              Start Time: (UTC)
            </label>
            <DateTimePicker
              onChange={(value: any) => setStartDate(value)}
              value={startDate}
              granularity={"minute"}
            />
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
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
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
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
            />
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
                className="w-full px-3 py-2 rounded bg-gray-800 text-white"
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
                <SelectTrigger className="bg-gray-800 text-white">
                  <SelectValue placeholder="Select Goal For" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white">
                  <SelectGroup>
                    <SelectItem value="kills">Kills</SelectItem>
                    <SelectItem value="headshot">Head Shot</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="w-[49%]">
            <label htmlFor="title" className="block h mb-2">
              Bonus:
            </label>
            <div className="mb-4">
              <label htmlFor="title" className="block h mb-2">
                Amount:
              </label>
              <input
                type="number"
                id="amount"
                name="bonusAmount"
                value={formData.bonusAmount}
                onChange={(e) =>
                  handleSetFormData("bonusAmount", e.target.value)
                }
                className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block h mb-2">
                chain:
              </label>
              <Select
                value={formData.bonusChain}
                onValueChange={handleValueChange("bonusChain")}
              >
                <SelectTrigger className="bg-gray-800 text-white">
                  <SelectValue placeholder="Select Bonus Chain" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white">
                  <SelectGroup>
                    <SelectItem value="telos">Telos</SelectItem>
                    <SelectItem value="polygon">Polygon</SelectItem>
                    <SelectItem value="ethereum">Ethereum</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="w-[49%]">
            <label htmlFor="title" className="block h mb-2">
              Entry Fee:
            </label>
            <div className="mb-4">
              <label htmlFor="title" className="block h mb-2">
                Amount:
              </label>
              <input
                type="number"
                id="amount"
                name="entryFeeAmount"
                value={formData.entryFeeAmount}
                onChange={(e) =>
                  handleSetFormData("entryFeeAmount", e.target.value)
                }
                className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block h mb-2">
                Currency:
              </label>
              <Select
                value={formData.entryFeeCurrency}
                onValueChange={handleValueChange("entryFeeCurrency")}
              >
                <SelectTrigger className="bg-gray-800 text-white">
                  <SelectValue placeholder="Select Currency" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white">
                  <SelectGroup>
                    <SelectItem value="hmove">HMove</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="w-[49%] flex justify-center items-center">
            <button
              onClick={handleSubmit}
              type="submit"
              className=" h-fit mx-auto  button-bg mt-4  text-white px-11 py-8"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddGameDetailsPage;
