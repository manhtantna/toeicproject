import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import Hidden from '@material-ui/core/Hidden';
import Navigator from './../Navigator/Navigator';
import Content from './../Content/Content';
import Header from './../Header/Header';

import * as ConfigStyle from './style';
class Paperbase extends React.Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
    const { classes } = this.props;

    return (
        <MuiThemeProvider theme={ConfigStyle.theme}>
            <div className={classes.root}>
                <nav className={classes.drawer}>
                    <Hidden smUp implementation="js">
                    <Navigator
                        PaperProps={{ style: { width: ConfigStyle.drawerWidth } }}
                        variant="temporary"
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                    />
                    </Hidden>
                    <Hidden xsDown implementation="css">
                    <Navigator PaperProps={{ style: { width: ConfigStyle.drawerWidth } }} />
                    </Hidden>
                </nav>
                <div className={classes.appContent}>
                    <Header onDrawerToggle={this.handleDrawerToggle} />
                        <main className={classes.mainContent}>
                    <Content />
                    </main>
                </div>
            </div>
        </MuiThemeProvider>
    );
  }
}

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(ConfigStyle.styles)(Paperbase);