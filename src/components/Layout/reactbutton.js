import React from 'react';
import PropTypes from 'prop-types';

import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Tables from './ResultTable';

import green from '@material-ui/core/colors/green';
import TextF from './textf';
import App from '../../App';

import { updateActivePage } from './../../reducer';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
      updateActivePageIndex: (page) => {
        dispatch(updateActivePage(page));
      }
    }
  }

function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
  },
});

class FloatingActionButtonZoom extends React.Component {
  state = {
    "value": 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.updateActivePageIndex(value);
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };



    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Map Setting" />
            <Tab label="Discrete map" />
            <Tab label="Actual data" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <TextF/>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <App />
          </TabContainer>

          <TabContainer dir={theme.direction}>
          <Tables/>
          </TabContainer>

        </SwipeableViews>

      </div>
    );
  }
}

FloatingActionButtonZoom.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(withStyles(styles, { withTheme: true })(FloatingActionButtonZoom));
