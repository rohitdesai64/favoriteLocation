import React from "react";
import {
  FormControl,
  TextField,
  Grid,
  withStyles,
  Button
} from "@material-ui/core";
import styles from "./Login.style";
import Header from "../Header";
import {connect} from "react-redux"
import { dispatch } from "store"
import loggedInUser from "../../reducers/loggedInUser"

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userDetails: [],
      username: "",
      password: "",
      loginValue: "Test",
      fieldVal: ""
    };
    // this.componentDidMount.bind(this);
  }

  inputText = data => event => {
    this.setState({ [data]: event.target.value });
  };

  componentDidMount() {
    console.log(" Login ******* ", this.props.allUsers)
    // let userData = require("../../data.json");
    this.setState({ userDetails: this.props.allUsers });
  }

  validateForm = event => {
    const userDetails = this.props.allUsers;
    event.preventDefault();

    for (var i = 0; i < userDetails.length; i++) {
      var obj = userDetails[i];
      if (
        obj.username === this.state.username &&
        obj.password === this.state.password
      ) {
        console.log("Logged ----", obj)
        this.props.dispatch(loggedInUser({ type: "LOGGED_IN", eventData: obj }))
        return (window.location = "mapView");
      }
    }
    return alert("Wrong Username/Password");
  };

  render() {
    let { classes } = this.props;

    return (
      <>
        <Header title={"Login Form"} displaySignUpButton={true} />
        <form onSubmit={this.validateForm} className={classes.loginBox}>
          <Grid container direction="column">
            <Grid item xs className={classes.pad20}>
              <FormControl className={classes.formInput}>
                <TextField
                  label="Username"
                  value={this.state.username}
                  onChange={this.inputText("username")}
                />
              </FormControl>
            </Grid>

            <Grid item xs className={classes.pad20}>
              <FormControl className={classes.formInput}>
                <TextField
                  type="password"
                  label="Password"
                  value={this.state.password}
                  onChange={this.inputText("password")}
                />
              </FormControl>
            </Grid>

            <Grid item xs className={classes.pad20}>
              <Button variant="contained" color="primary" type={"submit"}>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    allUsers: state.allUsers
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Login))
// export default withStyles(styles)(Login);
