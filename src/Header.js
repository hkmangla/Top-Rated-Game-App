import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { NativeSelect, TextField, Box } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "250px",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  },
  textField: {
    height: "40px"
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [sortValue, setSortValue] = React.useState(props.sortValue);
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Box
            width={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box height={7} alignItems="center" display="flex">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <Autocomplete
                  freeSolo
                  disableClearable
                  className={classes.inputInput}
                  options={props.gameList.map(option => option.Name)}
                  onInputChange={(_, v) => {
                    if (v === "") props.onSearch(v);
                  }}
                  onChange={(_, v) => props.onSearch(v)}
                  renderInput={params => (
                    <TextField
                      {...params}
                      placeholder="Search"
                      className={classes.textField}
                      fullWidth={true}
                      margin="normal"
                      InputProps={{ ...params.InputProps, type: "search" }}
                    />
                  )}
                />
              </div>
            </Box>
            <Box width="30%">
              <Dropdown
                value={sortValue}
                items={props.sortItems}
                onChange={event => {
                  setSortValue(event.target.value);
                  props.onSort(event.target.value);
                }}
                fullWidth={true}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
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
