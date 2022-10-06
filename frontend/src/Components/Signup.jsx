import React, { useState } from "react";
import axios from "axios";
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

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleResgister = () => {
    const payload = {
      email: email,
      password: password,
      age: age,
    };
    axios
      .post("https://note258.herokuapp.com/user/signup", payload)
      .then((r) => {
        // console.log(r.data);
        navigate("/login");
      })
      .catch((e) => console.log(e));
  };
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Heading fontSize={"4xl"}>Sign in to your account</Heading>

        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter Email Address"
                onChange={(e) => setEmail(e.target.value)}
                isRequired={true}
              />
            </FormControl>
            <FormControl id="age">
              <FormLabel>Age</FormLabel>
              <Input
                type="number"
                placeholder="Enter Age"
                onChange={(e) => setAge(e.target.value)}
                isRequired={true}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
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
                onClick={handleResgister}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signup;
