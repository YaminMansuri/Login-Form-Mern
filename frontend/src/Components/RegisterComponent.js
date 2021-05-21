import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import { Avatar, Button, makeStyles, TextField } from "@material-ui/core";
import SnackbarComponent from "./SnackbarComponent";

const useStyles = makeStyles(() => {
  return {
    spacing: {
      margin: "15px auto",
    },
    linkStyle: {
      textDecoration: "none",
    },
  };
});

const RegisterComponent = () => {
  const registerComponentStyle = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const signUpHandler = async () => {
    try {
      const response = await axios.post("/api/register", {
        name: name,
        email: email,
        password: password,
      });
      if (response) {
        console.log(response);
        setError(false);
        setSuccess(true);
        setOpen(true);

        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      setError(true);
      setSuccess(false);
      setOpen(true);
    }
  };

  return (
    <>
      <Avatar />
      <h2>Sign Up</h2>
      <TextField
        label="User Name"
        variant="outlined"
        placeholder="Enter your name"
        required
        fullWidth
        value={name}
        onChange={nameChangeHandler}
        className={registerComponentStyle.spacing}
      />
      <TextField
        label="Email"
        variant="outlined"
        placeholder="Enter your email address"
        required
        fullWidth
        value={email}
        onChange={emailChangeHandler}
        className={registerComponentStyle.spacing}
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        placeholder="Enter your password"
        required
        fullWidth
        value={password}
        onChange={passwordChangeHandler}
        className={registerComponentStyle.spacing}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        className={registerComponentStyle.spacing}
        onClick={signUpHandler}
      >
        Sign Up
      </Button>

      <NavLink to="/login" className={registerComponentStyle.linkStyle}>
        Already have an account? Sign In
      </NavLink>

      {error && (
        <SnackbarComponent open={open} setOpen={setOpen} status="error">
          Invalid user name, email id or password
        </SnackbarComponent>
      )}

      {success && (
        <SnackbarComponent open={open} setOpen={setOpen} status="success">
          Successfully Registered
        </SnackbarComponent>
      )}
    </>
  );
};

export default RegisterComponent;
