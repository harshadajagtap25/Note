import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Allnotes = () => {
  const [notes, setNotes] = useState([]);
  const token = localStorage.getItem("note_app_token");
  const handleSignup = () => {
    axios
      .get("http://localhost:8080/note", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((r) => {
        console.log(r.data);
        setNotes(r.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    handleSignup();
  }, []);
  return (
    <div>
      Allnotes
      <div>
        {notes.length > 0 &&
          notes.map((note) => (
            <div key={note._id}>
              <h1>{note.Heading}</h1>
              <h3>{note.Note}</h3>
              <h3>{note.Tag}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Allnotes;
