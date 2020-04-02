import React from "react";
import { Box, Container } from "@material-ui/core";
import "./styles.css";
import Header from "./Header";
import GameList from "./GameList";
import Loader from "./Loader";
import DataService from "./utils/data-service";

export default function App() {
  const [loading, setLoading] = React.useState(false);
  const [gameList, setGameList] = React.useState([]);
  const [filteredGameList, setFilteredGameList] = React.useState([]);
  React.useEffect(() => {
    setLoading(true);
    DataService.getTopSellingGames()
      .then(_gameList => {
        setLoading(false);
        setGameList(_gameList);
        setFilteredGameList(_gameList);
      })
      .catch(err => {
        alert(err);
        setLoading(false);
      });
  }, []);

  const onSearch = searchString => {
    setFilteredGameList(
      gameList.filter(game =>
        game.Name.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  };
  const compare = key => (a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  };
  const onSort = value => {
    const _gameList = JSON.parse(JSON.stringify(gameList));
    setGameList(_gameList.sort(compare(value)));
    const _filteredGameList = JSON.parse(JSON.stringify(filteredGameList));
    setFilteredGameList(_filteredGameList.sort(compare(value)));
  };

  return (
    <Box className="app">
      <Header
        onSearch={onSearch}
        sortValue={"Rank"}
        sortItems={["Rank", "Name", "Year"]}
        onSort={onSort}
        gameList={gameList}
      />
      <Container>
        <GameList list={filteredGameList} />
        <Loader showLoader={loading} />
      </Container>
    </Box>
  );
}
