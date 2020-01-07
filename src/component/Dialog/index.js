import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Grid
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import styles from "./Dialog.style"

class AddDialog extends React.Component {
  render() {
    let { classes } = this.props;

    return (
      <>
        <Dialog
          fullWidth={true}
          maxWidth={this.props.maxWidth}
          open={this.props.open}
          onClose={this.props.onClose}
        >
          <DialogTitle className={classes.paddSpace}>
            <IconButton
              onClick={this.props.onClose}
              aria-label="Close"
              className={classes.closeDialog}
            >
              <CloseIcon className={classes.largeIcon} />
            </IconButton>

            <Typography className={classes.title}>
              {this.props.title}
            </Typography>
          </DialogTitle>

          <DialogContent className={classes.content}>
            {this.props.content}
          </DialogContent>

          <DialogActions className={classes.dialogFooter}>
            <Grid container justify="center">
              <Grid item>{this.props.actions}</Grid>
            </Grid>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

AddDialog.defaultProps = {
  maxWidth: "md",
  open: false
};

AddDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node),
  content: PropTypes.node.isRequired
};

export default withStyles(styles)(AddDialog);
