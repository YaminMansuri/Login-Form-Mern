import React from "react";

import { Grid, makeStyles, Paper } from "@material-ui/core";

import RegisterComponent from "../Components/RegisterComponent";

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

const RegisterPage = () => {
  const registerPageStyle = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      className={registerPageStyle.fullHeight}
    >
      <Paper elevation={10} className={registerPageStyle.paperStyle}>
        <Grid item align="center">
          <RegisterComponent />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default RegisterPage;
