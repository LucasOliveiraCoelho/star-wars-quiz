import React from 'react';
import { Button, Grid } from '@material-ui/core';

function Home() {
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <h1>
          STAR <br />
          WARS
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
          imperdiet velit. Proin tincidunt nulla lacus, sit amet blandit ex
          vulputate at. Morbi viverra consectetur massa, ac sollicitudin sem
          tempor non.
        </p>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Button variant="contained" color="primary">
          Regras
        </Button>
        <Button variant="contained" color="primary">
          Jogar
        </Button>
      </Grid>
    </div>
  );
}

export default Home;
