import React from "react";
import { Box, Grid, NativeSelect } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function GameList(props) {
  const [sortValue, setSortValue] = React.useState(props.sortValue);
  return (
    <Box mt={10}>
      <Box display="flex" mb={2} justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Top Selling Game List</Typography>
          <Dropdown value={sortValue} items={props.sortItems} onChange={(event) => {
            setSortValue(event.target.value);
            props.onSort(event.target.value);
          }}/>
        {/* </Box> */}
      </Box>
      <Grid container justify="space-between" spacing={1}>
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

function Dropdown(props) {
  const { items, ...rest } = props;

  return (
    <NativeSelect {...rest}>
      {items.map(item => {
        return (
          <option key={item} value={item}>
            Sort by {item}
          </option>
        );
      })}
    </NativeSelect>
  );
}