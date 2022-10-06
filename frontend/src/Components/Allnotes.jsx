import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Allnotes = () => {
  const [notes, setNotes] = useState([]);
  const token = localStorage.getItem("note_app_token");
  const handleSignup = () => {
    axios
      .get("https://note258.herokuapp.com/note", {
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
        {notes.length > 0 ? (
          notes.map((note) => (
            <div key={note._id}>
              <h1>{note.Heading}</h1>
              <h3>{note.Note}</h3>
              <h3>{note.Tag}</h3>
            </div>
          ))
        ) : (
          <div>
            <p>No notes available</p>
            
              <Button>
                <Link to="/create">Create New Note</Link>
              </Button>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Allnotes;
