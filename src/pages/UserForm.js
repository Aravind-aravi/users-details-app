import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  makeStyles,
  CssBaseline,
} from "@material-ui/core";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(../assets/Bg.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function UserForm() {
  const [newUsername, setnewUsername] = useState(" ");
  const [newMobileNumber, setnewMobileNumber] = useState(" ");
  const [newAddress, setnewAddress] = useState(" ");
  const dispatch = useDispatch();

  const onAddHandler = () => {
    dispatch({
      type: "ADD_DATA",
      username: newUsername,
      mobileno: newMobileNumber,
      address: newAddress,
    });
    setnewAddress("");
    setnewMobileNumber("");
    setnewUsername("");
    alert("Added Successfully");
  };

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add User
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              label="UserName"
              onChange={(e) => setnewUsername(e.target.value)}
              value={newUsername}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              autoComplete="username"
              autoFocus
              name="username"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Mobile Number"
              label="Mobile Number"
              onChange={(e) => setnewMobileNumber(e.target.value)}
              value={newMobileNumber}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="address"
              label="Address"
              onChange={(e) => setnewAddress(e.target.value)}
              value={newAddress}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => onAddHandler()}
            >
              Add
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default UserForm;
