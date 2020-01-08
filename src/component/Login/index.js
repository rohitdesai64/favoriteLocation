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
// import loggedInUser from "../../reducers/loggedInUser"
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
  }

  inputText = data => event => {
    this.setState({ [data]: event.target.value });
  };

  componentDidMount() {
    this.setState({ userDetails: this.props.allUsers });
  }

  validateForm = event => {
    const userDetails = this.props.allUsers;
    event.preventDefault();

    // check if user is registered
    for (var i = 0; i < userDetails.length; i++) {
      var obj = userDetails[i];
      if (
        obj.username === this.state.username &&
        obj.password === this.state.password
      ) {
        this.props.dispatch({ type: "LOGGED_IN", payload: {eventData: obj} })
        return (window.location = "mapView/:id="+ obj.id);
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

// const LoginPage = connect(mapStateToProps)(withStyles(styles)(Login))
// export default React.forwardRef((props, ref) => <LoginPage {...props} innerRef={ref}  />)
export default connect(mapStateToProps)(withStyles(styles)(Login))
