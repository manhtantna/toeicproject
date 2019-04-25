import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
export default class Menu extends Component {
  render() {

    return (
      <div>
        <Hidden smUp>
                <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.props.onClick}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
      </div>
    )
  }
}
