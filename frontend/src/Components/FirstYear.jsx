import React, { useState, useEffect } from "react";
import axios from "axios";

const FirstYear = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState([]);

  const uploadNote = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("year", "First Year");
    formData.append("file", file);

    try {
      await axios.post("http://localhost:5000/api/notes/upload", formData);
      alert("Note uploaded!");
      fetchNotes(); // Refresh the list
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/notes/First Year");
      setNotes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const downloadNote = (filename) => {
    window.open(`http://localhost:5000/api/notes/download/${filename}`, "_blank");
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="p-10 bg-red-50 min-h-screen">
      <h1 className="text-3xl font-bold text-red-800 mb-5">📂 First Year Notes</h1>

      {/* Upload Form */}
      <form onSubmit={uploadNote} className="mb-10 bg-white p-6 shadow rounded-lg">
        <input
          type="text"
          placeholder="Title"
          className="p-2 border mr-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="file"
          className="p-2 border mr-2 rounded"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
          Upload
        </button>
      </form>

      {/* Notes List */}
      <h2 className="text-2xl font-semibold mb-4">Available Notes</h2>
      <ul className="space-y-2">
        {notes.map((note) => (
          <li
            key={note._id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <span>{note.title}</span>
            <button
              className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-700"
              onClick={() => downloadNote(note.filename)}
            >
              Download
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirstYear;
