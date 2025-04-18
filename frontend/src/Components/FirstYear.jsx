import React from 'react';
import { FaFolderOpen } from 'react-icons/fa';

const folders = [
  { title: 'ISE-1', id: 'ise1' },
  { title: 'ISE-2', id: 'ise2' },
  { title: 'End Sem', id: 'endsem' },
];

const FirstYear = () => {
  const handleFolderClick = (folderId) => {
    // Optional: Navigate to a sub-page or open modal
    alert(`Open ${folderId} notes`);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-10">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-10">📁 First Year Notes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {folders.map((folder) => (
          <div
            key={folder.id}
            onClick={() => handleFolderClick(folder.id)}
            className="cursor-pointer bg-white shadow-lg rounded-xl p-6 text-center border hover:shadow-2xl transition-all duration-300"
          >
            <FaFolderOpen className="text-5xl text-yellow-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-blue-700">{folder.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstYear;
