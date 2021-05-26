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

const LoginComponent = () => {
  const loginComponentStyle = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const emptyFieldsHandler = () => {
    setEmail("");
    setPassword("");
  };

  const signInHandler = async () => {
    try {
      await axios.post("/api/login", {
        email: email,
        password: password,
      });
      setError(false);
      setSuccess(true);
      setOpen(true);

      emptyFieldsHandler();
    } catch (error) {
      setError(true);
      setSuccess(false);
      setOpen(true);
    }
  };

  return (
    <>
      <Avatar />
      <h2>Sign In</h2>
      <TextField
        type="email"
        label="Email"
        variant="outlined"
        placeholder="Enter your email address"
        required
        fullWidth
        value={email}
        onChange={emailChangeHandler}
        className={loginComponentStyle.spacing}
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
        className={loginComponentStyle.spacing}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        className={loginComponentStyle.spacing}
        onClick={signInHandler}
      >
        Sign In
      </Button>

      <NavLink to="/" className={loginComponentStyle.linkStyle}>
        Don't have an account? Sign Up
      </NavLink>

      {error && (
        <SnackbarComponent open={open} setOpen={setOpen} status="error">
          Invalid email id or password
        </SnackbarComponent>
      )}

      {success && (
        <SnackbarComponent open={open} setOpen={setOpen} status="success">
          Successfully Logged In
        </SnackbarComponent>
      )}
    </>
  );
};

export default LoginComponent;
