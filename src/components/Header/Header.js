import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import * as ConfigStyle from './style.js';
import Notification from './Notification';
import User from './User';
import Menu from './Menu';
function Header(props) {
  const {onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={8} alignItems="center">
            <Menu onClick={onDrawerToggle} />
            <Grid item xs />
            <Notification/>
            <User/>
          </Grid>
        </Toolbar>
      </AppBar> 
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(ConfigStyle.styles)(Header);