import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import * as ConfigStyle from './style';

function Navigator(props) {
  const { classes, ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={classNames(classes.firebase, classes.item, classes.itemCategory)}>
            ManhTan
        </ListItem>
        <ListItem className={classNames(classes.item, classes.itemCategory)}>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>  
        </ListItem>
      </List>
    </Drawer>
  );
}


export default withStyles(ConfigStyle.styles)(Navigator);