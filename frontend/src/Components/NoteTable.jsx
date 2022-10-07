import { Button, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const NoteTable = ({ note, handleDelete, handleEdit }) => {
  return (
    <Tr>
      <Td>{note.Heading}</Td>
      <Td>{note.Note}</Td>
      <Td>{note.Tag}</Td>
      <Td>
        <Button
          onClick={() => {
            handleDelete(note._id);
          }}
          leftIcon={<DeleteIcon />}
          colorScheme="teal"
          variant="solid"
        >
          Delete
        </Button>
      </Td>
      <Td>
        <Button
          onClick={() => {
            handleEdit(note._id);
          }}
          leftIcon={<EditIcon />}
          colorScheme="teal"
          variant="solid"
        >
          Edit
        </Button>
      </Td>
    </Tr>
  );
};

export default NoteTable;
