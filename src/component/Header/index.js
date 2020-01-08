import React from "react";
import {
  Toolbar,
  Typography,
  AppBar,
  withStyles,
  Grid,
  TextField,
  Button,
  IconButton
} from "@material-ui/core";
import styles from "./Header.style";
import AddDialog from "../Dialog";
import AllRegesteredList from "../MapView/AllRegesteredList";
import MenuIcon from '@material-ui/icons/Menu';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      signUpDialog: false,
      name: "",
      username: "",
      password: "",
      openDrawer: false
    };
  }

  handleDialog = () => {
    this.setState({ signUpDialog: true });
  };

  closeDialog = () => {
    this.setState({ signUpDialog: false });
  };

  handleInput = value => e => {
    this.setState({ [value]: e.target.value });
  };

  userSignUp = () => {
    console.log(
      "Name==",
      this.state.name,
      "Username=",
      this.state.username,
      "Password=",
      this.state.password
    );
  };

  render() {
    const { classes } = this.props;
    const displaySignUpButton = this.props.displaySignUpButton;
    const signUpAction = [
      <Button variant="contained" color="primary" onClick={this.userSignUp}>
        Sign Up
      </Button>
    ];
    const signUpForm = (
      <>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={8} className={classes.padd15}>
            <TextField
              required
              label="Name"
              value={this.state.name}
              onChange={this.handleInput("name")}
              className={classes.fullWidth}
            />
          </Grid>
          <Grid item xs={8} className={classes.padd15}>
            <TextField
              required
              label="Username"
              value={this.state.username}
              onChange={this.handleInput("username")}
              className={classes.fullWidth}
            />
          </Grid>
          <Grid item xs={8} className={classes.padd15}>
            <TextField
              required
              type="password"
              label="Password"
              value={this.state.password}
              onChange={this.handleInput("password")}
              className={classes.fullWidth}
            />
          </Grid>
        </Grid>
      </>
    );

    return (
      <AppBar>
        <Toolbar>
          <IconButton onClick={() => {this.setState({ openDrawer: !this.state.openDrawer })}}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.grow}>
            {this.props.title}
          </Typography>

          {displaySignUpButton && (
            <>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.handleDialog}
              >
                Sign Up
              </Button>
              <AddDialog
                onClose={this.closeDialog}
                open={this.state.signUpDialog}
                title={"Sign up"}
                content={signUpForm}
                actions={signUpAction}
                maxWidth={"xs"}
              />
            </>
          )}
        </Toolbar>

        <AllRegesteredList openDrawer={this.state.openDrawer} closeDrawer={() => {this.setState({ openDrawer: true })}} />
      </AppBar>
    );
  }
}

Header.defaultProps = {
  displaySignUpButton: false
};

export default withStyles(styles)(Header);
