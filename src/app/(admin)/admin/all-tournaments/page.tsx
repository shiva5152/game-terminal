'use client'
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import EditPopupForm from '@/app/components/admin/Editpopup';

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

const Page: React.FC = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(false);
  const [editTournamentId, setEditTournamentId] = useState<string | null>(null);

  useEffect(() => {
    const fetchTournaments = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8000/tournament/getTournaments");
        if (response.ok) {
          const data = await response.json();
          setTournaments(data.tournaments);
        } else {
          console.error('Failed to fetch tournaments:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching tournaments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  const handleEditTournament = (tournamentId: string) => {
    console.log("Editing tournament with ID:", tournamentId);
    setEditTournamentId(tournamentId);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {tournaments.map((tournament) => (
            <div key={tournament._id} className="bg-gray-800 rounded-md p-4 mb-4 w-full">
              <h2 className="text-xl font-semibold mb-2 text-white">Tournament Details</h2>
              <div className="flex justify-end">
                <button
                  className="text-white bg-blue-500 px-4 py-2 rounded-md"
                  onClick={() => handleEditTournament(tournament._id)}
                >
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-400">Tournament ID:</span>
                  <span className="text-white">{tournament.tournamentId}</span>
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
                  <span className="text-white">{tournament.scheduleType}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400">Match Duration:</span>
                  <span className="text-white">{tournament.matchDuration}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400">Re-Entry:</span>
                  <span className="text-white">{tournament.reEntry.toString()}</span>
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
                  <span className="text-white">{format(new Date(tournament.startDate), "yyyy-MM-dd HH:mm")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {editTournamentId && (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <EditPopupForm
          tournament={tournaments.find(tournament => tournament._id === editTournamentId) || {
            _id: '',
            tournamentId: '',
            map: '',
            gameType: '',
            scheduleType: '',
            matchDuration: 0,
            reEntry: false,
            xpLevel: 0,
            players: 0,
            startDate: ''
          }}
          onCancel={() => setEditTournamentId(null)}
          onSave={() => {
            // Implement save functionality here
          }}
        />
  </div>
)}

    </div>
  );
};

export default Page;
