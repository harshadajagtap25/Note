import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import NoteTable from "./NoteTable";

const Allnotes = () => {
  const [notes, setNotes] = useState([]);
  const token = localStorage.getItem("note_app_token");
  const navigate = useNavigate();
  const getNotes = () => {
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
  const handleDelete = (id) => {
    axios
      .delete(
        `https://note258.herokuapp.com/note/delete/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((r) => {
        console.log(r);
      })
      .catch((e) => console.log(e));
  };
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
    // axios
    //   .patch(
    //     `https://note258.herokuapp.com/note/edit/${id}`,

    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   )
    //   .then((r) => {
    //     console.log(r);
    //     getNotes();
    //   })
    //   .catch((e) => console.log(e));
  };

  useEffect(() => {
    getNotes();
  }, []);
  return (
    <div>
      Allnotes
      <div>
        {notes.length > 0 ? (
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Heading</Th>
                  <Th>Note</Th>
                  <Th>Tag</Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {notes.map((note) => (
                  <NoteTable
                    key={note._id}
                    note={note}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <div>
            <p>No notes available</p>
            <Button>
              <Link to="/create">Create New Note</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Allnotes;
