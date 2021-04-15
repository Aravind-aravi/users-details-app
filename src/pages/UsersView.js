import {
  Grid,
  Typography,
  makeStyles,
  Card,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
}));

function UsersView() {
  const data = useSelector((state) => state.data);
  const classes = useStyles();

  return (
    <div style={{ marginTop: "2vh" }}>
      <Typography variant="h6" gutterBottom className="App">
        List of Users Details
      </Typography>
      <div
        style={{
          paddingLeft: "50px",
          paddingRight: "50px",
          marginTop: "2vh",
        }}
      >
        {" "}
        <Grid container spacing={3} alignItems="flex-end">
          {data.map((d) => (
            <Grid item key={d.id} xs={12} md={4}>
              <Card>
                <CardHeader
                  title={d.username}
                  subheader={d.mobileno}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Typography variant="subtitle1" align="Left">
                    {d.address}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default UsersView;
