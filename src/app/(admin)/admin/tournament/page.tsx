"use client";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import EditPopupForm from "@/app/components/admin/Editpopup";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setIsEditingTournament } from "@/redux/features/ui/slice";
import Link from "next/link";

export type Tournament = {
  _id?: string;
  map: string;
  tournamentId?: string;
  gameType: string;
  scheduleType: "daily" | "weekly";
  matchDuration: number;
  goal: {
    target: number;
    targetOf: "kills" | "headshot";
  };
  reEntry: boolean;
  bonus: {
    amount: number;
    chain: string;
  };
  xpLevel: number;
  entryFee: {
    amount: number;
    currency: string;
  };
  addParticipantsHash?: string;
  players: number;
  startDate: Date;
  endDate?: Date;
};

const Page: React.FC = () => {
  const dispatch = useAppDispatch();
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(false);

  const [selectedTournament, setSelectedTournament] = useState<
    Tournament | undefined
  >();

  const { isEditingTournament } = useAppSelector((state) => state.ui);

  useEffect(() => {
    const fetchTournaments = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/tournament/getTournaments`
        );
        if (response.ok) {
          const data = await response.json();
          setTournaments(data.tournaments);
        } else {
          console.error("Failed to fetch tournaments:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  const handleEditTournament = (tournamentId: string) => {
    console.log("Editing tournament with ID:", tournamentId);

    dispatch(setIsEditingTournament(true));
    if (tournaments)
      setSelectedTournament(
        tournaments.find((tournament) => tournament._id === tournamentId)
      );
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full my-10 flex justify-center items-center flex-col text-white p-4">
          <h1 className="text-2xl font-bold mb-4">Add Tournaments</h1>

          <div className="flex w-[100%] flex-wrap gap-5 justify-evenly px-8 py-4">
            {tournaments.map((tournament) => (
              <div
                key={tournament._id}
                className="bg-gray-800 rounded-md p-4 mb-4 w-[45%]"
              >
                <h2 className="text-xl font-semibold mb-2 text-white">
                  Tournament Details
                </h2>
                <div className="flex justify-end">
                  <Link
                    href={`/admin/tournament/${tournament._id}`}
                    className="text-white bg-blue-500 px-4 py-2 rounded-md"
                  >
                    Edit
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-gray-400">Tournament ID:</span>
                    <span className="text-white">
                      {tournament.tournamentId}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400">Map:</span>
                    <span className="text-white">{tournament.map}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400">Game Type:</span>
                    <span className="text-white">{tournament.gameType}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400">Schedule Type:</span>
                    <span className="text-white">
                      {tournament.scheduleType}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400">Match Duration:</span>
                    <span className="text-white">
                      {tournament.matchDuration}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400">Re-Entry:</span>
                    <span className="text-white">
                      {tournament.reEntry.toString()}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400">XP Level:</span>
                    <span className="text-white">{tournament.xpLevel}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400">Players:</span>
                    <span className="text-white">{tournament.players}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400">Start Date:</span>
                    <span className="text-white">
                      {format(
                        new Date(tournament.startDate),
                        "yyyy-MM-dd HH:mm"
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {isEditingTournament && (
        <EditPopupForm
          tournament={selectedTournament}
          onSave={() => {}}
          onCancel={() => {}}
        />
      )}
    </div>
  );
};

export default Page;
