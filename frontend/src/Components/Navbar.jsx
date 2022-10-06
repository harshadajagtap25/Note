import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack gap={10} justifyContent={"center"}>
      <Button>
        <Link to="/">Home</Link>
      </Button>
      <Button>
        <Link to="/login">Login</Link>
      </Button>
      <Button>
        <Link to="/signup">Sign Up</Link>
      </Button>
      <Button>
        <Link to="/create">Create New Note</Link>
      </Button>
      <Button>
        <Link to="/note">Allnotes</Link>
      </Button>
    </HStack>
  );
};

export default Navbar;
