import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tooltip from '@material-ui/core/Tooltip';
export default class Notification extends Component {
  render() {
    return (
      <div>
        <Grid item>
                <Tooltip title="Alerts • No alters">
                    <IconButton color="inherit">
                    <NotificationsIcon />
                    </IconButton>
                </Tooltip>
        </Grid>
      </div>
    )
  }
}
