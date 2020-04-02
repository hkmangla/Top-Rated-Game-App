import React from "react";
import { Box, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function GameList(props) {
  return (
    <Box mt={8}>
      <Grid container spacing={1}>
        {props.list.map(game => {
          return (
            <Grid key={game.Rank} item>
              <GameCard game={game} xs={12} sm={6} md={4} lg={4} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

function GameCard(props) {
  return (
    <Box width="250px">
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Rank {props.game.Rank}
          </Typography>
          <Typography
            title={props.game.Name}
            noWrap={true}
            variant="h5"
            component="h2"
          >
            {props.game.Name}
          </Typography>
          <Typography color="textSecondary">{props.game.Year}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
