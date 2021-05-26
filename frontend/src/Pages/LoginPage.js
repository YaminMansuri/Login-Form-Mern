import React from "react";

import { Grid, makeStyles, Paper } from "@material-ui/core";

import LoginComponent from "../Components/LoginComponent";

const useStyles = makeStyles(() => {
  return {
    paperStyle: {
      padding: 20,
      height: "70vh",
      width: 300,
      margin: "20px auto",
    },
    fullHeight: {
      height: "100vh",
    },
  };
});

const LoginPage = () => {
  const loginPageStyle = useStyles();

  return (
    <Grid container alignItems="center" className={loginPageStyle.fullHeight}>
      <Paper elevation={10} className={loginPageStyle.paperStyle}>
        <Grid item align="center">
          <LoginComponent />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default LoginPage;
