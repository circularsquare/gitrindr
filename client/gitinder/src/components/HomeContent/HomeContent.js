import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import GitHubCircleIcon from 'mdi-material-ui/GithubCircle';
import EmptyState from '../EmptyState';

const styles = (theme) => ({
  emptyStateIcon: {
    fontSize: theme.spacing(12)
  },

  button: {
    marginTop: theme.spacing(1)
  },

  buttonIcon: {
    marginRight: theme.spacing(1)
  }
});

class HomeContent extends Component {
  render() {
    // Styling
    const { classes } = this.props;

    // Properties
    const { signedIn } = this.props;

    if (signedIn) {
      return (
        <EmptyState
          icon={<HomeIcon className={classes.emptyStateIcon} color="action" />}
          title="Home"
          description="This is the signed in home"
        />
      );
    }

    return (
      <EmptyState
        title={process.env.REACT_APP_NAME}
        description="The dating app for hackers"
        button={
          <Fab className={classes.button} color="secondary" href="https://github.com/Phoqe/react-material-ui-firebase" rel="noopener noreferrer" target="_blank" variant="extended">
            <GitHubCircleIcon className={classes.buttonIcon} />
            GitHub
          </Fab>
        }
      />
    );
  }
}

HomeContent.defaultProps = {
  signedIn: false
};

HomeContent.propTypes = {
  // Styling
  classes: PropTypes.object.isRequired,

  // Properties
  signedIn: PropTypes.bool.isRequired
};

export default withStyles(styles)(HomeContent);
