import React from "react";
import {
  Grid,
  Button,
  Typography,
  Drawer,
  IconButton,
  Divider,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { connect } from "react-redux";
import styles from "./MapView.style";
import { withStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SendIcon from '@material-ui/icons/Send';
import moment from 'moment'

class AllRegesteredList extends React.Component {
  state = {
    open: false
  };
  componentDidMount() {
    console.log("loggedInUser ------- ", this.props.loggedInUser);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.openDrawer !== this.props.openDrawer)
      this.setState({ open: this.props.openDrawer });
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Drawer
          classes={{ paper: classes.drawer }}
          variant="persistent"
          anchor="left"
          open={this.state.open}
        >
          <Grid container justify="flex-end">
            <IconButton
              onClick={() => {
                this.setState({ open: false });
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
          </Grid>
          <Divider />

          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                List of Registered Users
              </ListSubheader>
            }
            className={classes.root}
          >
            {this.props.allUsers.map(user => {
            return <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={<React.Fragment>
                <Grid container justify="space-between">
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {user.name}
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {moment(user.addedOn).format("MMM Do YY")}
                </Typography>
                </Grid>
              </React.Fragment>}

              secondary={<React.Fragment>

                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {user.username} - {" "}
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {user.password}
                </Typography>
              </React.Fragment>} />

            </ListItem>
            })}

          </List>
        </Drawer>
      </>
    );
  }
}

function mapState(state) {
  return {
    allUsers: state.allUsers
    // loggedInUser: state.loggedInUser
  };
}

export default withStyles(styles)(connect(mapState)(AllRegesteredList));
