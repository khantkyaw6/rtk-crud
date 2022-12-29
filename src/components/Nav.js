import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Stack direction='row' gap={5} mt={3}>
      <Typography variant='h3'>Redux Toolkit with Json Server</Typography>
      <Link to='/'>
        <Button size='medium' color='warning' variant='contained'>
          Home
        </Button>
      </Link>

      <Link to='/create'>
        <Button size='medium' variant='contained'>
          Create
        </Button>
      </Link>
    </Stack>
  );
};

export default Nav;
