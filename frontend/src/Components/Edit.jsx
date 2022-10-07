import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  let { id } = useParams();
  const [heading, setHeading] = useState("");
  const [note, setNote] = useState("");
  const [tag, setTag] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("note_app_token");
  const [error, setError] = useState(false);

  const handleEdit = () => {
    const payload = {
      Heading: heading,
      Note: note,
      Tag: tag,
    };

    axios
      .patch(
        `https://note258.herokuapp.com/note/edit/${id}`,
        payload,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((r) => {
        // console.log(r);
        navigate("/note");
      })
      .catch((e) =>
        //   console.log(e)
        setError(true)
      );
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Heading fontSize={"4xl"}>Edit note</Heading>

        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="heading">
              <FormLabel>Heading</FormLabel>
              <Input
                type="text"
                placeholder="Enter Edited Heading"
                onChange={(e) => setHeading(e.target.value)}
              />
            </FormControl>
            <FormControl id="note">
              <FormLabel>Note</FormLabel>
              <Input
                type="text"
                placeholder="Enter Edited Note"
                onChange={(e) => setNote(e.target.value)}
              />
            </FormControl>
            <FormControl id="tag">
              <FormLabel>Tag</FormLabel>
              <Input
                type="text"
                placeholder="Enter Edited Tag"
                onChange={(e) => setTag(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleEdit}
              >
                Edit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Edit;
