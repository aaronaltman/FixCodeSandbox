import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function TopBar() {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{ width: 1, bgcolor: "#25ae4e", height: "52px" }}
    >
      <Container>
        <Grid container alignItems="center">
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
      </Container>
    </Box>
  );
}
