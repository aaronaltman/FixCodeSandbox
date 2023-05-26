import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function FixTopBar() {
  return (
    <AppBar elevation="1" position="sticky" color="primary">
      <Toolbar>
        <Grid container spacing={0} alignItems="center">
          <Grid
            item
            xs={6}
            md={6}
            style={{ textAlign: "right", paddingRight: "10px" }}
          >
            <Typography sx={{ color: "white" }}>
              Save $1000s on car repairs
            </Typography>
          </Grid>

          <Grid
            item
            xs={6}
            md={6}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              paddingLeft: "10px"
            }}
          >
            <Button
              variant="outlined"
              style={{
                backgroundColor: "white",
                color: "#000",
                height: "25px",
                width: "150px",
                fontSize: "10px",
                border: "1px solid black"
              }}
            >
              Get FIXD 67% off
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
