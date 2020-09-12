import React from "react";
import Article from "./Article";

import { Grid, TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  inputRoot: {
    marginLeft: theme.spacing(6),
  },
}));

const Blog = () => {
  const classes = useStyles();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Grid container className={classes.root}>
          <Grid item>
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <Article></Article>
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-textfield"
              label="記事を検索"
              variant="outlined"
              className={classes.inputRoot}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
};

export default Blog;
