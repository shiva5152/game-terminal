// EditPopupForm.tsx
"use client";
import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setIsEditingTournament } from "@/redux/features/ui/slice";
import { set } from "date-fns";
import type { FormData } from "@/app/(admin)/admin/add-tournaments/page";
import type { Tournament } from "@/app/(admin)/admin/tournament/page";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
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

interface EditPopupFormProps {
  tournament: Tournament | undefined;
  onSave: () => void;
  onCancel: () => void;
}

const EditPopupForm = ({ tournament, onCancel }: EditPopupFormProps) => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<FormData>({
    map: tournament?.map || "",
    gameType: tournament?.gameType || "",
    matchDuration: (tournament?.matchDuration || 0).toString(),
    goalTarget: (tournament?.goal.target || 0).toString(),
    goalFor: tournament?.goal.targetOf || "kills",
    bonusAmount: (tournament?.bonus.amount || 0).toString(),
    bonusChain: tournament?.bonus.chain || "",
    entryFeeAmount: (tournament?.entryFee.amount || 0).toString(),
    entryFeeCurrency: tournament?.entryFee.currency || "",
    xpLevel: (tournament?.xpLevel || 0).toString(),
    players: (tournament?.players || 0).toString(),
    reEntry: tournament?.reEntry ? "allowed" : "not-allowed",
    scheduleType: tournament?.scheduleType || "daily",
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

  // const handleSaveChanges = async () => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:8000/tournaments/updateTournament/${editedTournament.tournamentId}`,
  //       {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(editedTournament),
  //       }
  //     );

  //     if (response.ok) {
  //       // Handle successful response
  //       console.log("Tournament updated successfully");
  //     } else {
  //       console.error("Failed to update tournament:", response.statusText);
  //     }
  //   } catch (error) {
  //     console.error("Error updating tournament:", error);
  //   }
  // };

  const handleCancelEdit = () => {
    dispatch(setIsEditingTournament(false));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formData", formData);
  };

  return (
    <div className="min-h-screen fixed inset-0 backdrop-blur-md w-full overflow-scroll flex justify-center items-center">
      <div className=" w-[80%]  bg-[#161616] p-4 px-8 ">
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
                {/* {loading ? "Loading..." : "Submit"} */}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPopupForm;
