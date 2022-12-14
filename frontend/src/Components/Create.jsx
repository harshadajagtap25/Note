import React, { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [heading, setHeading] = useState("");
  const [note, setNote] = useState("");
  const [tag, setTag] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const token = localStorage.getItem("note_app_token");
  const handleCreate = () => {
    const payload = {
      Heading: heading,
      Note: note,
      Tag: tag,
    };
    axios
      .post("https://note258.herokuapp.com/note/create", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((r) => {
        navigate("/note");
      })
      .catch((e) => {
        setError(true);
      });
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Heading fontSize={"4xl"}>Create new note</Heading>

        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Heading</FormLabel>
              <Input
                type="text"
                placeholder="Enter Heading"
                onChange={(e) => setHeading(e.target.value)}
                isRequired={true}
              />
            </FormControl>
            <FormControl id="note">
              <FormLabel>Note</FormLabel>
              <Input
                type="text"
                placeholder="Enter Note"
                onChange={(e) => setNote(e.target.value)}
                isRequired={true}
              />
            </FormControl>
            <FormControl id="tag">
              <FormLabel>Tag</FormLabel>
              <Input
                type="text"
                placeholder="Enter Tag"
                onChange={(e) => setTag(e.target.value)}
                isRequired={true}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleCreate}
              >
                Create
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Create;
