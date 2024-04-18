// EditPopupForm.tsx

import React, { useState } from 'react';

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

const EditPopupForm: React.FC<{ tournament: Tournament }> = ({ tournament, onCancel }) => {
  const [editedTournament, setEditedTournament] = useState<Tournament>(tournament);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedTournament(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`http://localhost:8000/tournaments/updateTournament/${editedTournament.tournamentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedTournament),
      });

      if (response.ok) {
        // Handle successful response
        console.log('Tournament updated successfully');
      } else {
        console.error('Failed to update tournament:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating tournament:', error);
    }
  };

  const handleCancelEdit = () => {
    // Handle cancel action here
    console.log('Edit cancelled');
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
        <div className="flex flex-col">
          <span className="text-gray-400">Map:</span>
          <input
            type="text"
            name="map"
            value={editedTournament.map}
            onChange={handleInputChange}
            className="text-white bg-gray-700 p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-400">Game Type:</span>
          <input
            type="text"
            name="gameType"
            value={editedTournament.gameType}
            onChange={handleInputChange}
            className="text-white bg-gray-700 p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-400">Schedule Type:</span>
          <input
            type="text"
            name="scheduleType"
            value={editedTournament.scheduleType}
            onChange={handleInputChange}
            className="text-white bg-gray-700 p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-400">Match Duration:</span>
          <input
            type="number"
            name="matchDuration"
            value={editedTournament.matchDuration.toString()}
            onChange={handleInputChange}
            className="text-white bg-gray-700 p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-400">Re-Entry:</span>
          <select
            name="reEntry"
            value={editedTournament.reEntry.toString()}
            onChange={handleInputChange}
            className="text-white bg-gray-700 p-2 rounded"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-400">XP Level:</span>
          <input
            type="number"
            name="xpLevel"
            value={editedTournament.xpLevel.toString()}
            onChange={handleInputChange}
            className="text-white bg-gray-700 p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-400">Players:</span>
          <input
            type="number"
            name="players"
            value={editedTournament.players.toString()}
            onChange={handleInputChange}
            className="text-white bg-gray-700 p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-400">Start Date:</span>
          <input
            type="datetime-local"
            name="startDate"
            value={editedTournament.startDate}
            onChange={handleInputChange}
            className="text-white bg-gray-700 p-2 rounded"
          />
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
          onClick={handleCancelEdit}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditPopupForm;
